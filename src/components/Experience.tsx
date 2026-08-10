"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech: string[];
};

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/experience")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching experience:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-24 text-center text-white">Loading Experience...</div>;
  }

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Professional Experience
            </h2>
            <div className="flex-1 h-[1px] bg-white/10 ml-4"></div>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[21px] md:-left-[25px] top-1 bg-bg-darker border-4 border-primary w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                  <Briefcase size={16} className="text-primary" />
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.07] transition-all group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="text-lg text-primary font-medium">
                        {exp.company}
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-text-muted whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p className="text-text-muted mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-bg-darker/80 text-text-muted text-xs font-medium rounded border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
