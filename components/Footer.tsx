import { Smartphone, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-android-dark border-t border-white/10 py-12 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-android-green" />
          <span className="font-bold text-xl tracking-tight">Sathiya<span className="text-android-green">.dev</span></span>
        </div>
        
        <p className="text-gray-400 max-w-md mx-auto">
          Building robust architectures, dynamic UIs with Jetpack Compose, and seamless mobile experiences.
        </p>

        <div className="flex gap-6 mt-4">
          <a href="https://github.com/Sathiya-Lingesh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-android-green transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/sathiya-lingesh" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-android-green transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:sathiyalingeshveeramani@gmail.com" className="text-gray-400 hover:text-android-green transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-gray-600 text-sm mt-8">
          © {new Date().getFullYear()} Sathiya Lingesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
