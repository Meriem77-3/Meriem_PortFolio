import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCertificate } from 'react-icons/fa';

// Données de formation (mises à jour selon le CV)
const formationsData = [
  {
    id: 1,
    title: "Diplôme d'Ingénieur d'État, Génie Informatique",
    period: "2023 - 2026",
    location: "Faculté des Sciences et Techniques Hassan 1er, Settat, Maroc",
    skills: [
      "Java / Spring Boot",
      "Angular / React",
      "Architecture Microservices",
      "API REST",
      "CI/CD (Jenkins, GitLab)",
      "Tests & Qualité (JUnit, SonarQube)",
      "Docker / Terraform",
      "Deep Learning (GNN, RNN)",
      "Agile Scrum / UML"
    ],
    description:
      "Formation approfondie en génie informatique, axée sur le développement de systèmes logiciels complexes, l'architecture logicielle, le DevOps et l'intelligence artificielle. Diplômée en 2026, avec un Projet de Fin d'Études réalisé chez Capgemini TS Maroc (Java 17, Spring Boot, Angular 17).",
    backgroundColor: "#4F4557"
  },
  {
    id: 2,
    title: "DEUST Sciences et Technologies",
    period: "2021 - 2023",
    location: "Faculté des Sciences et Techniques Hassan 1er, Settat, Maroc",
    description:
      "Deux années préparatoires aux études d'ingénieur, avec une formation solide en mathématiques, physique et informatique. Développement de compétences analytiques et techniques.",
    skills: ["Algorithmique", "Structures de données", "Bases de données", "Programmation C", "Analyse", "Algèbre", "Probabilité"],
    backgroundColor: "#6D5D6E"
  },
  {
    id: 3,
    title: "Baccalauréat scientifique",
    period: "2020 - 2021",
    location: "Lycée EL BAHTOURY, Casablanca, Maroc",
    description:
      "Le baccalauréat scientifique a été une étape clé dans mon parcours académique, me permettant d'acquérir des bases solides en mathématiques et en sciences.",
    skills: ["Mathématiques", "Physique"],
    backgroundColor: "#8f7d91"
  }
];

const certifications = [
  "Oracle Certified Professional : Java SE 17 Developer (1Z0-829)",
  "Confluent Certified – Apache Kafka Foundations (2025)",
  "Oracle Cloud Infrastructure DevOps Professional (2025)",
  "Oracle Cloud Infrastructure AI Foundations (2024)",
  "Oracle Java Foundations (1Z0-811)"
];

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Composant dédié : le hook useInView ne doit pas être appelé dans un .map()
const FormationCard = ({ formation, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -10% 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full"
    >
      <div
        className="rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
        style={{ backgroundColor: formation.backgroundColor }}
      >
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F4EEE0] mb-4 md:mb-0 flex items-center">
              <FaGraduationCap className="inline-block mr-3 mb-1 shrink-0" />
              <span>{formation.title}</span>
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 text-white/90">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 shrink-0" aria-hidden="true" />
                <span className="font-medium">{formation.period}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 shrink-0" aria-hidden="true" />
                <span className="font-medium">{formation.location}</span>
              </div>
            </div>
          </div>

          <div className="text-white/85 text-lg mb-6 leading-relaxed">{formation.description}</div>

          <div>
            <h4 className="text-white font-semibold mb-3">Compétences acquises :</h4>
            <div className="flex flex-wrap gap-2">
              {formation.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/20 text-white px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-white/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Formations = () => {
  return (
    <section id="formations" className="text-[#F4EEE0] py-16 md:py-24" aria-labelledby="formations-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2
            id="formations-title"
            className="text-3xl md:text-4xl font-bold mb-8 inline-block relative"
          >
            Formations
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#6D5D6E] mt-2"></span>
          </h2>
          <p className="text-[#F4EEE0] text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Ingénieure d'État en Génie Informatique (2026), mon parcours académique m'a permis d'acquérir
            des compétences solides en développement Java/Spring Boot, Angular/React, DevOps et intelligence
            artificielle, formant une base théorique et pratique essentielle à ma pratique professionnelle.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {formationsData.map((formation, index) => (
            <FormationCard key={formation.id} formation={formation} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Certifications</h3>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-start gap-3 bg-[#4F4557] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <FaCertificate className="mt-1 shrink-0" aria-hidden="true" />
                <span className="text-white/90">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Formations;