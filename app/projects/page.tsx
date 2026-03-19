import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, otherProjects } from "@/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack products, AI infrastructure, and cloud systems built by Abhishek Kumar over 11 years of engineering.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-main">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
            Work
          </p>
          <h1 className="heading-xl mb-4">All Projects</h1>
          <p className="text-body max-w-xl">
            Products shipped, systems architected, and AI infrastructure built over 11 years.
          </p>
        </div>

        {/* Featured */}
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
          Featured
        </h2>
        <div className="space-y-6 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="border border-slate-100 rounded-2xl p-8 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag-accent">{project.category}</span>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>
                  <h2 className="heading-md">{project.title}</h2>
                  <p className="text-sm text-slate-500 mt-1">{project.subtitle}</p>
                </div>
                <Link href={`/projects/${project.slug}`} className="btn-secondary shrink-0">
                  View case study <ArrowUpRight size={14} />
                </Link>
              </div>
              <p className="text-body mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other */}
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
          Other projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div key={project.title} className="card">
              <div className="flex items-center justify-between mb-3">
                <span className="tag">{project.category}</span>
                <span className="text-xs text-slate-400">{project.year}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
