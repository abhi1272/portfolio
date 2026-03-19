import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-main py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-slate-400">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-medium text-slate-600 ml-1">Abhishek Kumar</span>
            <span className="ml-1">— Built with Next.js</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-slate-700 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-slate-700 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="text-slate-400 hover:text-slate-700 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
