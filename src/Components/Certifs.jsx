import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaJava,
  FaStream,
  FaCodeBranch,
  FaRobot,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

// `image` et `date` sont optionnels : ajoutez-les quand vous avez l'image / la date exacte.
const certificationData = [
  {
    title: "Oracle Certified Professional : Java SE 17 Developer",
    code: "1Z0-829",
    institution: "Oracle",
    icon: FaJava,
    featured: true,
    description:
      "Certification professionnelle validant la maîtrise de Java 17 : programmation orientée objet, lambdas et API Stream, collections, concurrence, modules et gestion des exceptions.",
  },
  {
    title: "Apache Kafka Foundations",
    institution: "Confluent",
    date: "2025",
    icon: FaStream,
    description:
      "Validation des bases d'Apache Kafka : architecture (topics, partitions, brokers), producteurs et consommateurs, et traitement de flux de données en temps réel.",
  },
  {
    title: "Oracle Cloud Infrastructure DevOps Professional",
    institution: "Oracle",
    date: "2025",
    icon: FaCodeBranch,
    description:
      "Pratiques DevOps dans Oracle Cloud Infrastructure : pipelines CI/CD, conteneurs et Kubernetes, infrastructure as code avec Terraform et supervision.",
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations",
    institution: "Oracle",
    date: "2024",
    icon: FaRobot,
    description:
      "Concepts fondamentaux de l'IA sur Oracle Cloud Infrastructure, incluant l'apprentissage automatique, le deep learning et les services d'IA.",
  },
  {
    title: "Oracle Java Foundations",
    code: "1Z0-811",
    institution: "Oracle",
    icon: FaJava,
    description:
      "Compétences fondamentales en Java : syntaxe de base, structures de contrôle, programmation orientée objet et collections.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Certifications = () => {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const animated = !reduceMotion;

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 text-[#F4EEE0]"
      aria-labelledby="certifications-title"
    >
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={animated ? { opacity: 0, y: 30 } : false}
          whileInView={animated ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2
            id="certifications-title"
            className="text-3xl md:text-4xl font-bold"
          >
            Certifications
            <span
              aria-hidden="true"
              className="block mx-auto mt-3 h-1 w-20 rounded bg-[#6D5D6E]"
            />
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-[#F4EEE0]/90">
            Cinq certifications Oracle et Confluent qui couvrent mon domaine
            principal, Java, ainsi que le cloud, le DevOps, l'IA et le
            streaming de données.
          </p>
        </motion.div>

        {/* Cartes */}
        <motion.ul
          ref={ref}
          variants={animated ? containerVariants : undefined}
          initial={animated ? "hidden" : false}
          animate={animated && inView ? "visible" : undefined}
          className="max-w-6xl mx-auto flex flex-wrap justify-center items-stretch gap-6"
        >
          {certificationData.map((c) => {
            const Icon = c.icon;
            return (
              <motion.li
                key={c.title}
                variants={animated ? cardVariants : undefined}
                whileHover={animated ? { y: -6 } : undefined}
                className="group relative w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#6D5D6E] to-[#4F4557] p-7 shadow-lg transition-shadow duration-300 hover:shadow-2xl flex flex-col"
              >
                {/* Liseré d'accent */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-[#F4EEE0]/70 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* Icône + badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F4EEE0]/15 ring-1 ring-[#F4EEE0]/20 transition-colors duration-300 group-hover:bg-[#F4EEE0]/25">
                    <Icon aria-hidden="true" className="text-3xl text-[#F4EEE0]" />
                  </div>

                  {c.featured && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F4EEE0] px-3 py-1 text-xs font-semibold text-[#4F4557]">
                      <FaCheckCircle aria-hidden="true" />
                      Principale
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold leading-snug mb-4">
                  {c.title}
                </h3>

                {/* Métadonnées */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
                    {c.institution}
                  </span>
                  {c.code && (
                    <span className="rounded-full border border-[#F4EEE0]/30 px-3 py-1 text-sm">
                      {c.code}
                    </span>
                  )}
                  {c.date && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-[#F4EEE0]/80">
                      <FaCalendarAlt aria-hidden="true" />
                      {c.date}
                    </span>
                  )}
                </div>

                <p className="text-base leading-relaxed text-[#F4EEE0]/85">
                  {c.description}
                </p>

                {c.image && (
                  <img
                    src={c.image}
                    alt={`Certificat : ${c.title}`}
                    loading="lazy"
                    className="mt-6 w-full max-h-48 object-contain rounded-md bg-black/20 p-2"
                  />
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default Certifications;