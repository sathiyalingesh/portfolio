"use client";

import { motion } from "framer-motion";
import { Terminal, Play, Settings, Smartphone } from "lucide-react";

export default function WorkspaceSection() {
  return (
    <section id="workspace" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Environment</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A glimpse into my daily workspace building Android applications.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Code Editor */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 code-window flex flex-col h-[500px]"
          >
            <div className="code-header justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono">MainActivity.kt — Android Studio</div>
              <div className="flex gap-3 text-gray-400">
                <Play className="w-4 h-4 text-android-green cursor-pointer" />
                <Settings className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
            <div className="p-4 overflow-y-auto font-mono text-sm leading-relaxed flex-1 bg-[#1E1E1E]">
              <div className="flex">
                <div className="w-8 text-gray-600 select-none text-right pr-4 border-r border-[#333]">
                  {[...Array(15)].map((_, i) => <div key={i}>{i + 1}</div>)}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">package</span> com.sathiya.portfolio<br/><br/>
                  <span className="text-purple-400">import</span> android.os.Bundle<br/>
                  <span className="text-purple-400">import</span> androidx.activity.ComponentActivity<br/>
                  <span className="text-purple-400">import</span> androidx.activity.compose.setContent<br/>
                  <span className="text-purple-400">import</span> dagger.hilt.android.AndroidEntryPoint<br/><br/>
                  <span className="text-yellow-400">@AndroidEntryPoint</span><br/>
                  <span className="text-purple-400">class</span> <span className="text-blue-400">MainActivity</span> : <span className="text-blue-400">ComponentActivity</span>() {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">override fun</span> <span className="text-blue-300">onCreate</span>(savedInstanceState: <span className="text-blue-400">Bundle</span>?) {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">super</span>.onCreate(savedInstanceState)<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">setContent</span> {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">PortfolioTheme</span> {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">PortfolioApp</span>()<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
                  {'}'}
                </div>
              </div>
            </div>
            
            {/* Terminal / Logcat */}
            <div className="h-[150px] border-t border-[#333] bg-[#0A0A0A] flex flex-col">
              <div className="bg-[#1A1A1A] px-4 py-1 text-xs text-gray-400 border-b border-[#333] flex gap-4">
                <span className="border-b border-android-green text-android-green pb-1">Build Output</span>
                <span>Logcat</span>
                <span>Terminal</span>
              </div>
              <div className="p-2 font-mono text-xs text-gray-300 overflow-y-auto">
                <div><span className="text-gray-500">10:42:01</span> <span className="text-green-400">INFO:</span> Gradle build finished in 2s 345ms</div>
                <div><span className="text-gray-500">10:42:02</span> <span className="text-blue-400">adb:</span> Installing APK 'app-debug.apk' on Pixel_6_Pro_API_33</div>
                <div><span className="text-gray-500">10:42:04</span> <span className="text-green-400">SUCCESS:</span> Installed successfully.</div>
                <div><span className="text-gray-500">10:42:05</span> <span className="text-white">Launching activity com.sathiya.portfolio.MainActivity</span></div>
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block w-2 h-3 bg-white ml-1"
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* Emulator Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center h-[500px]"
          >
            <div className="relative w-[240px] h-[480px] bg-black border-[6px] border-[#222] rounded-[30px] overflow-hidden shadow-2xl">
              <div className="absolute top-0 w-full h-5 bg-black flex justify-center z-20">
                <div className="w-1/3 h-3 bg-black rounded-b-lg"></div>
              </div>
              <div className="w-full h-full bg-[#121212] flex flex-col p-4 relative z-10 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-android-green flex items-center justify-center">
                    <Smartphone size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Portfolio App</h4>
                    <p className="text-gray-400 text-xs">Ready to launch</p>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col gap-3">
                  <div className="w-full h-24 bg-gradient-to-r from-android-green/20 to-primary/20 rounded-xl border border-android-green/30 animate-pulse"></div>
                  <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5"></div>
                  <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5"></div>
                  <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5"></div>
                </div>
                
                <div className="w-1/2 h-1 bg-white/20 mx-auto mt-4 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
