"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-android-green/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-android-green/30 bg-android-green/10 text-android-green w-fit text-sm font-medium">
            Android Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-android-green">Sathiya</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg">
            Android Developer | Kotlin | Jetpack Compose | Clean Architecture
          </p>
          <p className="text-gray-400 mb-4 max-w-lg">
            I craft visually stunning, high-performance mobile applications that users love, blending seamless functionality with beautiful design.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-android-green text-background font-semibold hover:bg-primary transition-colors shadow-[0_0_20px_rgba(61,220,132,0.3)]">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" className="px-6 py-3 rounded-xl border border-white/20 hover:border-android-green hover:text-android-green transition-colors bg-white/5 backdrop-blur-sm">
              Download Resume
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-transparent hover:border-white/20 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Content - Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Phone Frame */}
          <div className="relative w-[300px] h-[600px] bg-[#1a1a1a] border-[8px] border-[#333] rounded-[40px] shadow-2xl overflow-hidden z-10 flex flex-col">
            {/* Top Bar */}
            <div className="h-6 w-full bg-black flex justify-center items-center">
              <div className="w-1/3 h-4 bg-black rounded-b-xl absolute top-0"></div>
            </div>
            
            {/* App Screen Content */}
            <div className="flex-1 bg-gradient-to-b from-[#0B0F14] to-[#050816] p-4 flex flex-col gap-4 relative">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono absolute top-2 left-6 right-6">
                <span>10:42</span>
                <div className="flex gap-1">
                  <span>LTE</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col items-center justify-center text-center flex-1">
                {/* Profile Icon / Graphic */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-android-green to-primary p-1 mb-4 shadow-[0_0_20px_rgba(61,220,132,0.4)]"
                >
                  <div className="w-full h-full bg-[#0B0F14] rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-android-green to-primary">S</span>
                  </div>
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl font-bold text-white mb-1"
                >
                  Sathiya
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-[11px] font-mono text-android-green bg-android-green/10 px-3 py-1.5 rounded-full mb-6 border border-android-green/20 shadow-[0_0_10px_rgba(61,220,132,0.2)]"
                >
                  Android Developer
                </motion.p>

                {/* Floating Tech Stack inside phone */}
                <div className="grid grid-cols-2 gap-3 w-full px-2">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center gap-2 backdrop-blur-md"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                       <Code2 size={14} className="text-blue-400" />
                    </div>
                    <span className="text-[10px] text-gray-300 font-medium">Kotlin</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center gap-2 backdrop-blur-md"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                       <Smartphone size={14} className="text-purple-400" />
                    </div>
                    <span className="text-[10px] text-gray-300 font-medium">Compose</span>
                  </motion.div>
                </div>

                {/* Swipe to unlock indicator */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="mt-auto pt-6 text-[10px] text-gray-500 flex flex-col items-center gap-1"
                >
                  <div className="w-10 h-1 bg-gray-600 rounded-full mb-1"></div>
                  Swipe up to launch
                </motion.div>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="h-1 bg-white/30 w-1/3 mx-auto rounded-full mb-2"></div>
          </div>

          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-10 -left-10 glass-panel p-4 flex items-center gap-3 rounded-2xl z-20 border-android-green/30"
          >
            <div className="bg-blue-500/20 p-2 rounded-xl text-blue-400">
              <Code2 size={24} />
            </div>
            <div>
              <p className="font-bold text-sm">Kotlin</p>
              <p className="text-xs text-gray-400">Coroutines</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 -right-12 glass-panel p-4 flex items-center gap-3 rounded-2xl z-20 border-purple-500/30"
          >
            <div className="bg-purple-500/20 p-2 rounded-xl text-purple-400">
              <Smartphone size={24} />
            </div>
            <div>
              <p className="font-bold text-sm">Compose</p>
              <p className="text-xs text-gray-400">Declarative UI</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
            className="absolute -top-6 right-0 glass-panel p-3 rounded-2xl z-0"
          >
             <div className="bg-yellow-500/20 p-2 rounded-xl text-yellow-400">
              <Database size={24} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
