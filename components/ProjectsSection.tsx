"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Capture Analytics Dashboard",
      description: "An analytics application built using Jetpack Compose and MVI architecture for tracking detailed metrics and plotting them on interactive charts.",
      tech: ["Kotlin", "Compose", "MVI", "Room"],
      github: "#",
      demo: "#"
    },
    {
      title: "ARCore Walking Path App",
      description: "Android application utilizing ARCore to plot real-time global spatial coordinates on a floor map during video recording sessions.",
      tech: ["Kotlin", "ARCore", "MVVM"],
      github: "#",
      demo: "#"
    },
    {
      title: "SpendWise",
      description: "A finance tracking application that categorizes incomes and expenses, providing statistical analysis and chart visualizations for users.",
      tech: ["Kotlin", "Firebase", "MVVM"],
      github: "#",
      demo: "#"
    },
    {
      title: "Resource Flow",
      description: "Web application retrieving numerous electricity bills linked to a person, enabling single-click payments via RazorPay integration.",
      tech: ["ReactJS", "NodeJS", "MongoDB"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-android-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-android-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-android-green transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-android-green bg-android-green/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
