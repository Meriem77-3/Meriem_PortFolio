import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Du plus récent au plus ancien
const experiences = [
  {
    role: "Software Engineer Intern (Projet de Fin d'Études)",
    company: "Capgemini TS Maroc",
    period: "Mars 2026 – Août 2026",
    points: [
      "Amélioration de la qualité d'une application Java 17 / Spring Boot / Angular 17 : correction des bugs, Code Smells et vulnérabilités détectés par SonarQube.",
      "Migration d'une application Angular de l'architecture NgModule vers les Standalone Components, supprimant les 25 Blocker Issues identifiées par SonarQube.",
      "Écriture de tests unitaires (JUnit 5, Mockito, Karma, Jasmine) : couverture backend passée de 1,5 % à 73,6 %.",
      "Optimisation du pipeline Jenkins CI/CD : validation, tests, contrôles qualité et vérifications avant intégration.",
      "Collaboration avec les équipes de développement, QA et Business Analysts en Agile Scrum.",
    ],
    tech: "Java 17, Spring Boot, Angular, TypeScript, Jenkins, SonarQube, JUnit 5, Mockito, Karma, Jasmine, GitLab CI/CD",
  },
  {
    role: "Frontend Developer & DevSecOps Intern",
    company: "I-Gouvernancia, Casablanca",
    period: "Juillet 2025 – Septembre 2025",
    points: [
      "Développement d'interfaces responsives avec React, à partir de composants réutilisables.",
      "Mise en place d'une authentification sécurisée (JWT, OAuth2) avec gestion des rôles (RBAC).",
      "Intégration d'API REST développées avec Django REST Framework et gestion de l'état côté client.",
      "Automatisation du déploiement d'infrastructure avec Terraform sur OpenStack et création de pipelines GitLab CI/CD.",
    ],
    tech: "React, JavaScript, Django REST Framework, JWT, OAuth2, Terraform, OpenStack",
  },
];

const Experience = () => {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.6 },
      };

  return (
    <section id="experience" className="py-16 md:py-24 text-[#F4EEE0]">
      <motion.div ref={ref} {...reveal} className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Expérience professionnelle
          <span
            aria-hidden="true"
            className="block mx-auto mt-3 h-1 w-20 rounded bg-[#6D5D6E]"
          />
        </h2>

        {/* Frise chronologique : le contenu est bien une suite dans le temps */}
        <ol className="max-w-3xl mx-auto border-l-2 border-[#6D5D6E] space-y-10 ml-2 sm:mx-auto">
          {experiences.map((e) => (
            <li key={e.company} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute  top-2 h-4 w-4 rounded-full bg-[#F4EEE0] ring-4 ring-[#6D5D6E]"
              />
              <div className="rounded-xl bg-white/10 p-6 md:p-8 shadow-lg">
                <p className="text-sm text-[#F4EEE0]/75 mb-1">{e.period}</p>
                <h3 className="text-xl md:text-2xl font-bold leading-snug">
                  {e.role}
                </h3>
                <p className="font-medium text-[#F4EEE0]/90 mb-4">{e.company}</p>

                <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed">
                  {e.points.map((pt) => (
                    <li key={pt.slice(0, 30)}>{pt}</li>
                  ))}
                </ul>

                <p className="mt-5 pt-4 border-t border-[#F4EEE0]/20 text-sm text-[#F4EEE0]/80">
                  {e.tech}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
};

export default Experience;