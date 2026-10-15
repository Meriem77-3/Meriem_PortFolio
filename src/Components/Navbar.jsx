import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Même ordre que dans la page
const navItems = [
  { title: "À propos", to: "apropos" },
  { title: "Expérience", to: "experience" },
  { title: "Formations", to: "formations" },
  { title: "Compétences", to: "competences" },
  { title: "Projets", to: "projets" },
  { title: "Certifications", to: "certifications" },
  { title: "Contact", to: "contact" },
];

const CV_URL = "/CV_ASSOULI_MERIEM.pdf";

const menuVariants = {
  open: {
    clipPath: "circle(1500px at 90% -10%)",
    transition: { type: "spring", duration: 0.7, stiffness: 20 },
  },
  closed: {
    clipPath: "circle(30px at 90% -10%)",
    transition: { type: "spring", duration: 0.5, stiffness: 400, damping: 40 },
  },
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le défilement et permet de fermer avec Échap quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  const closeMenu = () => setMenu(false);

  return (
    <nav
      aria-label="Navigation principale"
      className={`sticky top-0 z-50 text-[#F4EEE0] transition-colors duration-300 ${
        scrolled ? "bg-[#393646]/95 shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Desktop */}
      <div className="container mx-auto hidden md:flex justify-between items-center py-4 px-4">
        <div className="text-xl lg:text-2xl font-bold">
          Meriem <span className="text-[#c197c4]">Assouli</span>
        </div>

        <ul className="flex items-center gap-1 lg:gap-3 text-sm lg:text-base list-none">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                spy
                tabIndex={0}
                activeClass="bg-[#6D5D6E]"
                className="block cursor-pointer rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[#6D5D6E]  focus-visible:outline-2 focus-visible:outline-[#F4EEE0]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={CV_URL}
          download="CV_ASSOULI_MERIEM.pdf"
          className="rounded-full bg-[#4F4557] px-5 py-2 text-sm lg:text-base shadow-md transition-colors duration-300 hover:bg-[#6D5D6E]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4EEE0]"
        >
          Télécharger CV
        </a>
      </div>

      {/* Mobile : barre */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        <div className="text-xl font-bold">
          Meriem <span className="text-[#c197c4]">Assouli</span>
        </div>

        <button
          type="button"
          onClick={() => setMenu((m) => !m)}
          className="relative z-50 rounded-full p-2 transition-colors duration-300 hover:bg-[#6D5D6E]/30 focus-visible:outline  focus-visible:outline-[#F4EEE0]"
          aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menu}
          aria-controls="menu-mobile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile : menu plein écran */}
      <motion.div
        id="menu-mobile"
        className="md:hidden fixed top-0 left-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-[#393646] px-6"
        initial={false}
        animate={menu ? "open" : "closed"}
        variants={menuVariants}
        aria-hidden={!menu}
        style={{ pointerEvents: menu ? "auto" : "none" }}
      >
        <ul className="flex w-full max-w-sm flex-col gap-4 text-xl">
          {navItems.map((item) => (
            <li key={item.to} className="text-center">
              <Link
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                tabIndex={menu ? 0 : -1}
                onClick={closeMenu}
                className="block cursor-pointer rounded-lg px-6 py-3 transition-colors duration-300 hover:bg-[#6D5D6E]"
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li className="mt-6 text-center">
            <a
              href={CV_URL}
              download="CV_ASSOULI_MERIEM.pdf"
              tabIndex={menu ? 0 : -1}
              onClick={closeMenu}
              className="inline-block rounded-full bg-[#4F4557] px-6 py-3 text-lg shadow-md transition-colors duration-300 hover:bg-[#6D5D6E]"
            >
              Télécharger CV
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;