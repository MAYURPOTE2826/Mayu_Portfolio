"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Education
            </h2>
            <div className="flex-1 h-[1px] bg-white/10 ml-4"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-3xl p-1 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <GraduationCap size={150} />
            </div>

            <div className="bg-bg-darker/90 backdrop-blur-sm rounded-[22px] p-8 md:p-10 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                    B.E. Computer Engineering
                  </h3>
                  <div className="text-lg text-text-muted font-medium">
                    Trinity Academy of Engineering, Pune
                  </div>
                  <div className="text-sm text-text-muted/70">
                    Savitribai Phule Pune University (SPPU)
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-bold rounded-full border border-primary/30">
                    CGPA: 9.30
                  </span>
                  <span className="text-text-muted text-sm font-medium">
                    Graduation: 2026
                  </span>
                </div>
              </div>

              <div className="text-text-muted leading-relaxed">
                <p>
                  Demonstrated consistent academic excellence and a strong foundation in computer science principles, algorithms, and software engineering. Actively participated in technical projects and continuous learning.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
