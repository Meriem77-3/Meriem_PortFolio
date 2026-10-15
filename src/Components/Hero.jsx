import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  // Une seule animation d'entrée pour tout le bloc
  const enter = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
      };

  return (
    <header id="accueil" className="py-10 md:py-16 text-[#F4EEE0]">
      <motion.div
        {...enter}
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4"
      >
        <div className="flex w-full md:w-1/3 justify-center">
          <img
            src="image.png"
            alt="Portrait de Meriem Assouli"
            draggable="false"
            className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-xl border-2 border-[#6D5D6E] object-cover shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Meriem Assouli
          </h1>
          <p className="mt-3 mb-6 text-xl md:text-2xl text-[#c197c4]">
            Ingénieure logiciel Java / Spring Boot, React
          </p>

          <p className="mx-auto md:mx-0 mb-8 max-w-2xl text-lg leading-relaxed">
            Ingénieure en génie informatique diplômée en 2026, je conçois des
            API REST et des interfaces web, avec une attention particulière à
            la qualité du code : tests, SonarQube et intégration continue. Ce
            portfolio rassemble mon expérience, mes projets et mes
            certifications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="projets"
              smooth
              duration={500}
              offset={-70}
              tabIndex={0}
              className="cursor-pointer rounded-full border-2 border-[#6D5D6E] bg-[#4F4557] px-6 py-3 text-center text-lg font-semibold shadow-md transition-colors duration-300 hover:bg-[#6D5D6E] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#F4EEE0]"
            >
              Voir mes projets
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-70}
              tabIndex={0}
              className="cursor-pointer rounded-full border-2 border-[#4F4557] px-6 py-3 text-center text-lg font-semibold transition-colors duration-300 hover:border-[#6D5D6E] hover:bg-[#4F4557] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#F4EEE0]"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;