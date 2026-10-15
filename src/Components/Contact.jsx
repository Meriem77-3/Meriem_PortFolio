import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
    FaCheckCircle,
    FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formState, setFormState] = useState({
        nom: '',
        email: '',
        telephone: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));

        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formState.nom.trim()) errors.nom = "Veuillez entrer votre nom";

        if (!formState.email.trim()) {
            errors.email = "Veuillez entrer votre email";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
            errors.email = "Veuillez entrer un email valide";
        }

        if (!formState.message.trim()) errors.message = "Veuillez entrer votre message";

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/mkgjabyl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                setFormSubmitted(true);
                setTimeout(() => {
                    setFormSubmitted(false);
                    setFormState({
                        nom: '',
                        email: '',
                        telephone: '',
                        message: ''
                    });
                }, 5000);
            } else {
                console.error("Erreur lors de l'envoi du message");
            }
        } catch (err) {
            console.error("Erreur réseau :", err);
        }
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-[#F4EEE0] w-6 h-6" />,
            title: "Téléphone",
            value: "+212 639-365548",
            href: "tel:+212639365548",
            delay: 0.2
        },
        {
            icon: <FaEnvelope className="text-[#F4EEE0] w-6 h-6" />,
            title: "Email",
            value: "meriemassoulli@gmail.com",
            href: "mailto:meriemassoulli@gmail.com",
            delay: 0.4
        },
        {
            icon: <FaMapMarkerAlt className="text-[#F4EEE0] w-6 h-6" />,
            title: "Adresse",
            value: "Casablanca, Maroc",
            delay: 0.6
        }
    ];

    return (
        <div id="contact" className=" py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: -50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl font-bold text-[#F4EEE0] mb-4"
                >
                    Discutons si vous avez des <span className="text-[#6D5D6E]">remarques ou opportunités d'emploi</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-[#F4EEE0] text-xl max-w-3xl mx-auto mb-16"
                >
                    Ingénieure en Génie Informatique diplômée (2026), spécialisée en développement
                    Java/Spring Boot et Angular/React. J'aime concevoir des API REST, améliorer la qualité
                    logicielle et résoudre des problèmes complexes en environnement Agile Scrum.
                    N'hésitez pas à me contacter pour discuter de vos besoins et projets.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info Column */}
                <div className="space-y-8">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: item.delay }}
                            className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="bg-[#6D5D6E] p-4 rounded-full shadow-inner shrink-0">
                                {item.icon}
                            </div>
                            <div className="grow">
                                <p className="text-lg font-semibold text-[#1b2016]">{item.title}</p>
                                {item.href ? (
                                    <a href={item.href} className="text-[#555555] hover:text-[#6D5D6E] transition-colors duration-300">
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-[#555555]">{item.value}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {/* Social Media Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-8 flex flex-col items-start"
                    >
                        <h3 className="text-xl font-semibold text-[#F4EEE0] mb-4">Suivez-moi</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/meriem-assouli-31a440286/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="bg-[#4F4557] p-3 rounded-full hover:bg-[#6D5D6E] transition-colors duration-300"
                            >
                                <FaLinkedin className="w-6 h-6 text-white" />
                            </a>
                            <a
                                href="https://github.com/Meriem77-3"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="bg-[#4F4557] p-3 rounded-full hover:bg-[#6D5D6E] transition-colors duration-300"
                            >
                                <FaGithub className="w-6 h-6 text-white" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form Column */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="bg-white p-8 rounded-lg shadow-lg"
                >
                    {formSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-12 text-center"
                        >
                            <FaCheckCircle className="text-[#F4EEE0] w-16 h-16 mb-6" />
                            <h3 className="text-2xl font-bold text-[#333333] mb-2">Message envoyé !</h3>
                            <p className="text-[#6D5D6E]">
                                Merci de m'avoir contactée. Je vous répondrai dans les plus brefs délais.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="text-2xl font-semibold text-[#1b2016] mb-6">Envoyez-moi un message</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="nom" className="block text-[#1b2016] font-medium mb-1">Nom</label>
                                    <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        value={formState.nom}
                                        onChange={handleChange}
                                        placeholder="Votre nom"
                                        className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#6D5D6E] focus:outline-none transition-all duration-200 ${formErrors.nom ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
                                            }`}
                                    />
                                    {formErrors.nom && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.nom}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-[#1b2016] font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="Votre email"
                                        className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#6D5D6E] focus:outline-none transition-all duration-200 ${formErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
                                            }`}
                                    />
                                    {formErrors.email && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="telephone" className="block text-[#1b2016] font-medium mb-1">Téléphone (optionnel)</label>
                                <input
                                    type="tel"
                                    id="telephone"
                                    name="telephone"
                                    value={formState.telephone}
                                    onChange={handleChange}
                                    placeholder="Votre numéro"
                                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#6D5D6E] focus:outline-none transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[#1b2016] font-medium mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Votre message"
                                    rows="4"
                                    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-[#6D5D6E] focus:outline-none transition-all duration-200 ${formErrors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-50'
                                        }`}
                                ></textarea>
                                {formErrors.message && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#4F4557] text-white py-3 px-8 rounded-md hover:bg-[#6D5D6E] transition-colors duration-300 font-medium"
                            >
                                <FaPaperPlane />
                                Envoyer
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-24 py-8 border-t border-[#dce2d5] bg-[#f0f3ec]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[#333333] mb-4 md:mb-0">
                        © {new Date().getFullYear()} ASSOULI Meriem. Tous droits réservés.
                    </p>

                    <div className="flex space-x-6">
                        <a
                            href="https://www.linkedin.com/in/meriem-assouli-31a440286/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-[#4F4557] hover:text-[#6D5D6E] transition-colors duration-300"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/Meriem77-3"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-[#4F4557] hover:text-[#6D5D6E] transition-colors duration-300"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
};

export default Contact;