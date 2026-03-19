import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personal } from "@/data";

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-slate-50">
      <div className="container-main">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
            Contact
          </p>
          <h2 className="heading-lg mb-4">Let&apos;s build something.</h2>
          <p className="text-body text-lg mb-10 max-w-xl">
            Whether you&apos;re looking to hire, collaborate, or just want to talk
            about building AI-powered systems — my inbox is open.
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 group mb-12"
          >
            <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-indigo-600 transition-colors">
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Email me at</div>
              <div className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {personal.email}
              </div>
            </div>
            <ArrowUpRight
              size={16}
              className="text-slate-300 group-hover:text-indigo-500 transition-colors ml-2"
            />
          </a>

          {/* Social links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:border-slate-200 hover:bg-slate-50 transition-all group"
            >
              <Github size={20} className="text-slate-600" />
              <div>
                <div className="text-xs text-slate-400">GitHub</div>
                <div className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  @abhi1272
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-300 ml-auto group-hover:text-slate-500" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:border-slate-200 hover:bg-slate-50 transition-all group"
            >
              <Linkedin size={20} className="text-slate-600" />
              <div>
                <div className="text-xs text-slate-400">LinkedIn</div>
                <div className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  Abhishek Kumar
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-300 ml-auto group-hover:text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
