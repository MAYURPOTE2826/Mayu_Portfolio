"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type SkillCategory = {
  category: string;
  skills: string[];
};

export default function Skills() {
  const [skillsData, setSkillsData] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkillsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-24 text-center text-white">Loading Skills...</div>;
  }

  return (
    <section id="skills" className="py-24 relative bg-bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Technical Arsenal
            </h2>
            <div className="flex-1 h-[1px] bg-white/10 ml-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((categoryGroup, idx) => (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
              >
                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  {categoryGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-bg-darker/50 text-text-muted text-sm rounded-md border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
