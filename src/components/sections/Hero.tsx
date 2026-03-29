"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-600/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-purple-400 text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi there! 👋
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent font-bold">
              Maria Hovhannisyan
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Building scalable, high-performance web applications with 5+ years
            of experience. Specialized in React, Next.js, and TypeScript with a
            strong focus on UI/UX quality and pixel-perfect implementation.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors border border-purple-500/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/marhovhannisyan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors border border-purple-500/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:maria.hovhannisyanw@gmail.com"
              className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors border border-purple-500/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail size={24} />
            </motion.a>
          </motion.div>

          <motion.button
            onClick={() => scrollToSection("about")}
            className="mx-auto w-12 h-12 flex items-center justify-center text-purple-400 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.2 }}
          >
            <FiArrowDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
