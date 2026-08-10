import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-darker border-t border-white/5 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <a href="#" className="text-2xl font-heading font-bold text-white tracking-tighter mb-6">
          Mayur<span className="text-primary">.</span>
        </a>
        
        <div className="flex items-center gap-6 mb-8">
          <a href="https://github.com/MAYURPOTE2826/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/mayurpote" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:mayur.pote@email.com" className="text-text-muted hover:text-white transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        
        <p className="text-text-muted text-sm text-center mb-2">
          Designed and built with ❤️ by Mayur Pote.
        </p>
        <p className="text-text-muted/50 text-xs text-center">
          &copy; {currentYear} Mayur Pote. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
