"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Track3D",
      period: "July 2024 – Present",
      location: "Hyderabad, Telangana",
      responsibilities: [
        "Implemented Kotlin-based chunked upload and multi-part form data, boosting file upload speed by 40%.",
        "Implemented MVI Architecture to enforce Unidirectional Data Flow for predictable state management.",
        "Created a modular UI Component Library hosted on Maven for standardizing app designs.",
        "Managed complete development lifecycle, optimizing app bundles via R8 for Play Store deployment.",
        "Integrated Insta360 & Ricoh Theta OSC APIs with custom BLE/Wi-Fi connection flows.",
        "Leveraged ARCore for precise indoor positioning and plotting spatial paths on maps."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Track3D",
      period: "Dec 2023 – June 2024",
      location: "Hyderabad, Telangana",
      responsibilities: [
        "Developed 'Granite', an MVVM-based application to capture images and record video with ARCore path data.",
        "Handled robust multi-part API uploads ensuring reliable data synchronization."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-android-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-android-dark border-2 border-android-green rounded-full shadow-[0_0_10px_rgba(61,220,132,0.5)]"></div>
              
              <div className="glass-panel p-6 md:p-8 rounded-2xl hover:border-android-green/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-android-green font-medium flex items-center gap-2">
                      <Briefcase size={16} /> {exp.company}
                    </h4>
                  </div>
                  <div className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed pl-2 text-sm md:text-base">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
