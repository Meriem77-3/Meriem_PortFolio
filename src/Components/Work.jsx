import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDownload, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ArtSphere : vente de tableaux en ligne",
    description:
      "Backend d'une application web d'achat et de vente de tableaux artistiques, développé avec Spring Boot.",
    tech: "Java, Spring Boot",
    image: "/artsphere.png",
    link: "https://github.com/Meriem77-3/ProjetFinal",
  },
  {
    title: "Prédiction du trafic routier avec GNN",
    description:
      "Modèle de Graph Neural Networks avec PyTorch pour prédire les embouteillages à partir de graphes de plus de 1000 nœuds. Application dockerisée.",
    tech: "Python, PyTorch, GNN, Docker",
    image: "/Gnn.png",
    link: "https://github.com/Meriem77-3/PR-DICTION-DES-EMBOUTEILLAGES-GNN",
  },
  {
    title: "Réservation de billets d'avion",
    description:
      "Application Java de réservation de billets d'avion en ligne, avec espace client et espace administrateur.",
    tech: "Java, Swing, MySQL",
    image: "/billets.png",
    link: "https://github.com/Meriem77-3/R-servation-de-billets-d-avion-en-ligne",
  },
  {
    title: "RNN pour la classification MNIST",
    description:
      "Implémentation et déploiement d'un réseau de neurones récurrent pour la classification MNIST et la génération de mini MNIST.",
    tech: "Deep Learning, RNN",
    image: "/CLUSTERING.png",
    link: "https://github.com/Meriem77-3/RNN-pour-la-classification-et-la-g-n-ration",
  },
  {
    title: "Animation web pour Ramadan",
    description:
      "Animation festive avec lune, étoiles et lanterne interactive.",
    tech: "HTML, CSS, JavaScript",
    image: "/Ramadan.png",
    link: "https://github.com/Meriem77-3/Ramadan-Animation",
  },
];

const Work = () => {
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
    <section id="projets" className="py-16 md:py-24 text-[#F4EEE0]">
      <motion.div ref={ref} {...reveal} className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Mes projets
            <span
              aria-hidden="true"
              className="block mx-auto mt-3 h-1 w-20 rounded bg-[#6D5D6E]"
            />
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Projets réalisés pendant ma formation d'ingénieure : applications
            Java et Spring Boot, intelligence artificielle (GNN, RNN) et web. Le
            code de chacun est disponible sur GitHub.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <li
              key={p.title}
              className="rounded-xl bg-[#6D5D6E] shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={p.image}
                alt={`Aperçu du projet ${p.title}`}
                loading="lazy"
                className="w-full h-48 object-contain bg-black/20 p-4"
              />
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold leading-snug mb-3">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed text-[#F4EEE0]/90 mb-3">
                  {p.description}
                </p>
                <p className="text-sm text-[#F4EEE0]/75 mb-6">{p.tech}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-white/20 px-5 py-2 transition-colors hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4EEE0]"
                >
                  <FaGithub aria-hidden="true" />
                  Voir sur GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <p className="mb-5 text-lg">
            Mon parcours complet est dans mon CV.
          </p>
          <a
            href="/CV_ASSOULI_MERIEM.pdf"
            download="CV_ASSOULI_MERIEM.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-[#6D5D6E] px-6 py-3 transition-colors hover:bg-[#7d6c7e]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4EEE0]"
          >
            <FaDownload aria-hidden="true" />
            Télécharger mon CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;