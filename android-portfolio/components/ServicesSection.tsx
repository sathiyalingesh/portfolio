"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Smartphone, Zap, Code2 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Native App Development",
      description: "Building fast, reliable, and scalable Android applications using Kotlin and Clean Architecture.",
      icon: <Smartphone className="w-8 h-8 text-android-green" />
    },
    {
      title: "Jetpack Compose UI",
      description: "Creating beautiful, declarative, and responsive user interfaces that adapt to any screen size.",
      icon: <LayoutTemplate className="w-8 h-8 text-android-green" />
    },
    {
      title: "API & Hardware Integration",
      description: "Seamless integration of REST APIs, Firebase, and external hardware via BLE/Wi-Fi or OSC.",
      icon: <Code2 className="w-8 h-8 text-android-green" />
    },
    {
      title: "Performance Optimization",
      description: "Refactoring legacy codebases, improving app startup times, and managing memory efficiently.",
      icon: <Zap className="w-8 h-8 text-android-green" />
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Can Build</h2>
          <div className="w-20 h-1 bg-android-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl text-center group hover:bg-white/[0.05] transition-colors"
            >
              <div className="mx-auto w-16 h-16 bg-android-green/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
