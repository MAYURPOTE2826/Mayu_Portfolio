"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 tracking-tight">
            Building intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              AI/ML systems
            </span> & <br />
            web experiences.
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-lg">
            Hi, I'm <strong className="text-white font-medium">Mayur Pote</strong>. A passionate Software Engineer specializing in Generative AI, Machine Learning, and Full-Stack MERN development.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-white text-bg-darker hover:bg-gray-100 font-semibold rounded-lg transition-all flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-10 flex items-center gap-5">
            <a href="https://github.com/MAYURPOTE2826/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <FaGithub size={22} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/mayurpote" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <FaLinkedin size={22} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:mayur.pote@email.com" className="text-text-muted hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <Mail size={22} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl transform rotate-3 scale-105 border border-white/10 backdrop-blur-sm"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-bg-dark">
              {/* Replace placeholder with generated image */}
              <Image 
                src="/hero_abstract.png" 
                alt="AI and Code Abstract"
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
