"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Globe, Wrench, Map } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Android & UI",
      icon: <Code className="text-android-green" />,
      skills: ["Kotlin", "Java", "Jetpack Compose", "XML", "Material Design"]
    },
    {
      title: "Architecture",
      icon: <Server className="text-android-green" />,
      skills: ["MVVM", "MVI", "Clean Architecture", "Repository Pattern"]
    },
    {
      title: "Networking",
      icon: <Globe className="text-android-green" />,
      skills: ["Retrofit", "OkHttp", "REST APIs", "WebSocket"]
    },
    {
      title: "Storage & DI",
      icon: <Database className="text-android-green" />,
      skills: ["Room", "SQLite", "DataStore", "Hilt", "Dagger"]
    },
    {
      title: "Cloud & Maps",
      icon: <Map className="text-android-green" />,
      skills: ["Firebase", "Crashlytics", "Mixpanel", "Google Maps", "ARCore"]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="text-android-green" />,
      skills: ["Android Studio", "Gradle", "Git", "GitHub", "Azure DevOps"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-android-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-android-green/10 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-android-green/50 hover:text-android-green transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
