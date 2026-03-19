import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personal } from "@/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container-main">
        <div className="max-w-3xl py-24 sm:py-32">
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-slate-500 font-medium">
              Available for new projects
            </span>
          </div>

          {/* Name & title */}
          <h1 className="heading-xl mb-3">
            Abhishek Kumar
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-indigo-600 mb-6">
            Full-Stack & AI Engineer
          </p>

          {/* Headline */}
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-4 max-w-2xl">
            11 years building end-to-end systems — from{" "}
            <span className="text-slate-700 font-medium">NestJS APIs</span> and{" "}
            <span className="text-slate-700 font-medium">React frontends</span> to{" "}
            <span className="text-slate-700 font-medium">LLM gateways</span> and{" "}
            <span className="text-slate-700 font-medium">cloud infrastructure</span> on AWS & Azure.
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm text-slate-400 mb-10">
            <MapPin size={14} />
            <span>Pune, India</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Link href="/#projects" className="btn-primary">
              See my work
              <ArrowDown size={15} />
            </Link>
            <a href="mailto:abhishek.omex@gmail.com" className="btn-secondary">
              Get in touch
              <Mail size={15} />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <span className="text-slate-200">|</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 transition-colors"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="container-main pb-8 flex items-center gap-2 text-slate-300">
        <ArrowDown size={14} className="animate-bounce" />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
