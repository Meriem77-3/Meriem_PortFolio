import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const servicesData = [
  {
    title: "Développement Back-end Java",
    description:
      "Conception d'API REST et d'applications robustes avec Java 17, Spring Boot, Spring MVC, Spring Data JPA et Hibernate, en architecture microservices. Sécurisation des accès avec Spring Security, JWT, OAuth2 et gestion des rôles (RBAC).",
    tags: ["Java 17", "Spring Boot", "Hibernate", "REST API", "Microservices", "MySQL", "PostgreSQL", "SQL Server"],
    icon: "☕",
    backgroundColor: "#4F4557"
  },
  {
    title: "Développement Front-end",
    description:
      "Création d'interfaces modernes, responsives et accessibles avec Angular et React, à partir de composants réutilisables. Expérience de migration d'une application Angular 17 vers les Standalone Components.",
    tags: ["Angular", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS"],
    icon: "🌐",
    backgroundColor: "#6D5D6E"
  },
  {
    title: "Développement Mobile",
    description:
      "Développement d'applications mobiles multiplateformes avec Flutter et Dart, pour offrir des expériences fluides et cohérentes sur Android et iOS.",
    tags: ["Flutter", "Dart"],
    icon: "📱",
    backgroundColor: "#8f7d91"
  },
  {
    title: "Tests & Qualité Logicielle",
    description:
      "Écriture de tests unitaires et amélioration de la qualité du code : à l'occasion de mon PFE, la couverture backend est passée de 1,5 % à 73,6 % et les 25 Blocker Issues SonarQube ont été supprimées. Travail en méthode Agile Scrum.",
    tags: ["JUnit 5", "Mockito", "Karma", "Jasmine", "SonarQube", "JaCoCo", "Checkstyle", "ESLint", "Agile Scrum", "UML", "Design Patterns"],
    icon: "✅",
    backgroundColor: "#4F4557"
  },
  {
    title: "DevOps & Cloud",
    description:
      "Mise en place et optimisation de pipelines CI/CD (validation, tests, contrôles qualité), conteneurisation et automatisation du déploiement d'infrastructure avec Terraform sur OpenStack. Certifiée Oracle Cloud Infrastructure DevOps Professional.",
    tags: ["Jenkins", "GitLab CI/CD", "Docker", "Terraform", "OpenStack", "Linux", "Git / GitHub", "Maven"],
    icon: "🚀",
    backgroundColor: "#6D5D6E"
  },
  {
    title: "Intelligence Artificielle & Deep Learning",
    description:
      "Intérêt marqué pour l'IA appliquée : développement d'un modèle GNN avec PyTorch pour prédire le trafic routier sur des graphes de plus de 1000 nœuds, dockerisé pour garantir un environnement reproductible. Certifiée OCI AI Foundations.",
    tags: ["Python", "PyTorch", "GNN", "RNN", "LLMs", "Prompt Engineering"],
    icon: "🤖",
    backgroundColor: "#8f7d91"
  }
];

const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  // Un seul observateur pour toute la grille
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.03 });

  return (
    <section
      id="competences"
      className="text-[#F4EEE0] py-16 md:py-24"
      aria-labelledby="competences-title"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={titleVariants}
        className="container mx-auto flex flex-col items-center text-center px-4 mb-16"
      >
        <h2
          id="competences-title"
          className="text-3xl md:text-4xl font-bold mb-8 inline-block relative"
        >
          Compétences
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#6D5D6E] mt-2"></span>
        </h2>
        <p className="text-[#F4EEE0] text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Ingénieure en génie informatique, je combine développement back-end Java / Spring Boot,
          front-end Angular / React, qualité logicielle et DevOps. Voici les principaux axes sur
          lesquels je peux apporter de la valeur à vos projets.
        </p>
      </motion.div>

      <div
        ref={ref}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col"
            style={{ backgroundColor: service.backgroundColor }}
          >
            <div className="p-8 md:p-10 text-center flex flex-col flex-grow">
              <div className="text-4xl mb-6" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#F4EEE0] mb-4">
                {service.title}
              </h3>
              <p className="text-white/85 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="mt-auto flex flex-wrap justify-center gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-white/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;