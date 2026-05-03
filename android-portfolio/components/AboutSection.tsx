"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const focusAreas = [
    "Kotlin & Java",
    "Jetpack Compose",
    "MVVM / MVI",
    "Clean Architecture",
    "REST APIs & Retrofit",
    "Firebase Integration",
    "Performance Optimization",
    "Room & DataStore"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-android-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-android-green mb-4">Professional Overview</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am an Android Developer with 2 years of solid experience in implementing robust architectures using Kotlin and Jetpack Compose. I am highly skilled in building maintainable, scalable mobile applications that rely on modern development practices like Clean Architecture and MVI/MVVM.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise spans across building custom UI Component libraries, managing full app deployment life cycles on the Play Store, and integrating advanced functionalities like real-time OSC APIs, Room databases, and ARCore positioning.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Core Focus Areas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-android-green/30 transition-colors"
                >
                  <CheckCircle className="text-android-green w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
