"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              About Me
            </h2>
            <div className="flex-1 h-[1px] bg-white/10 ml-4"></div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              I am a recent Computer Engineering graduate from Savitribai Phule Pune University (SPPU) with a deep passion for building intelligent, practical solutions. Throughout my academic journey and early career, I have cultivated strong expertise in Python, Machine Learning, and Artificial Intelligence.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              My hands-on experience extends into full-stack web development, where I've built scalable MERN stack applications and integrated complex AI models via robust APIs. I thrive in environments that challenge me to solve real-world problems—whether it's designing self-healing systems that detect anomalies or building intelligent AI agents using Generative AI and LLMs.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              With a continuous learning mindset and a dedication to writing clean, maintainable code, I am actively seeking opportunities to contribute to forward-thinking teams. Outside of coding, I am an avid poetry writer, exploring creativity beyond the digital world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
