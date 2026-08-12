"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  tech: string[];
  image?: string;
  github: string;
  demo?: string;
};

type ProjectsData = {
  featured: Project[];
  other: Project[];
};

export default function Projects() {
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        // Try fetching from the same origin first (works when Next.js serves the API)
        let res = await fetch('/api/projects');
        // If the same-origin API is not available (dev setup where backend runs on a different port),
        // fall back to the backend FastAPI server.
        if (!res.ok) {
          res = await fetch('http://127.0.0.1:8000/api/projects');
        }
        const data = await res.json();
        setProjectsData(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading || !projectsData) {
    return <div className="py-24 text-center text-white">Loading Projects...</div>;
  }

  const { featured: featuredProjects, other: otherProjects } = projectsData;

  return (
    <section id="projects" className="py-24 relative bg-bg-dark">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Selected Projects
            </h2>
            <div className="flex-1 h-[1px] bg-white/10 ml-4"></div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:bg-white/[0.07] transition-all hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="grid lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-3 order-2 lg:order-1">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <div className="bg-bg-darker/50 rounded-xl p-5 mb-6 border border-white/5">
                      <p className="text-text-muted mb-3"><strong className="text-white">Problem:</strong> {project.problem}</p>
                      <p className="text-text-muted"><strong className="text-white">Solution:</strong> {project.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                        <FaGithub size={20} />
                        GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 order-1 lg:order-2">
                    <div className="aspect-video w-full bg-gradient-to-br from-bg-darker to-bg-dark rounded-xl border border-white/10 overflow-hidden relative group-hover:border-primary/30 transition-colors flex items-center justify-center">
                       {project.image ? (
                         (() => {
                           const src = /^https?:\/\//.test(project.image)
                             ? project.image
                             : (typeof window !== 'undefined' ? window.location.origin + project.image : project.image);
                           return (
                             <img
                               src={src}
                               alt={project.title}
                               className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                             />
                           );
                         })()
                       ) : (
                         <span className="text-text-muted/50 font-heading text-lg">Project Visual</span>
                       )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-heading font-bold text-white">
              Other Notable Work
            </h3>
            <div className="flex-1 h-[1px] bg-white/10 ml-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors flex flex-col h-full"
              >
                {project.image && (
                  <div className="w-full h-40 overflow-hidden rounded-md mb-4">
                    {(() => {
                      const thumbSrc = /^https?:\/\//.test(project.image)
                        ? project.image
                        : (typeof window !== 'undefined' ? window.location.origin + project.image : project.image);
                      return <img src={thumbSrc} alt={project.title} className="w-full h-full object-cover" />;
                    })()}
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white leading-tight">
                    {project.title}
                  </h4>
                  <a href={project.github} className="text-text-muted hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                </div>
                <p className="text-text-muted mb-6 flex-1 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-text-muted bg-bg-darker px-2.5 py-1 rounded-md border border-white/5">
                      {t}
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
