import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const paragraphs = [
  "Je m'appelle Meriem Assouli, ingénieure en génie informatique diplômée en 2026 de la FST de Settat. Je suis spécialisée dans le développement d'applications Java / Spring Boot côté back-end, et Angular / React côté front-end.",
  "J'ai réalisé mon projet de fin d'études chez Capgemini TS Maroc, sur une application Java 17 / Angular 17. J'y ai corrigé les bugs et vulnérabilités détectés par SonarQube, migré l'application vers les Standalone Components et fait passer la couverture de tests backend de 1,5 % à 73,6 %. J'ai aussi optimisé le pipeline Jenkins CI/CD.",
  "Auparavant, j'ai été stagiaire développeuse front-end et DevSecOps chez I-Gouvernancia : interfaces React, authentification JWT / OAuth2 avec gestion des rôles, intégration d'API Django REST, et déploiement d'infrastructure avec Terraform sur OpenStack.",
  "Je travaille en équipe Agile Scrum et j'aime autant concevoir des interfaces claires que résoudre des problèmes techniques côté serveur. Je cherche un poste d'ingénieure logiciel où je peux continuer à progresser sur des projets qui ont du sens.",
  "En dehors du code, j'aime lire, apprendre de nouvelles langues et relever des défis créatifs.",
];

const stats = [
  { value: "10+", label: "technologies maîtrisées" },
  { value: "5", label: "certifications Oracle et Confluent" },
  { value: "2", label: "stages : Capgemini et I-Gouvernancia" },
];

const About = () => {
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Une seule animation d'entrée pour toute la section
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.6 },
      };

  return (
    <section id="apropos" className="py-24 text-[#F4EEE0]">
      <motion.div ref={ref} {...reveal} className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          À propos de moi
          <span
            aria-hidden="true"
            className="block mx-auto mt-3 h-1 w-20 rounded bg-[#6D5D6E]"
          />
        </h2>

        <div className="max-w-3xl mx-auto rounded-xl bg-white/10 p-6 md:p-10 shadow-lg">
          <div className="space-y-5 text-base md:text-lg leading-relaxed">
            {paragraphs.map((text) => (
              <p key={text.slice(0, 30)}>{text}</p>
            ))}
          </div>

          <p className="mt-8 pt-6 border-t border-[#F4EEE0]/20 text-sm md:text-base text-[#F4EEE0]/80">
            Casablanca, Maroc · Arabe (langue maternelle) · Français (courant) ·
            Anglais (professionnel)
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-[#6D5D6E] p-8 text-center shadow-lg flex flex-col items-center justify-center"
            >
              <p className="text-4xl font-bold mb-3">{s.value}</p>
              <p className="text-base leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;