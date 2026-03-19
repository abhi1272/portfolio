import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { featuredProjects, otherProjects } from "@/data";

function FeaturedCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  return (
    <div className="group relative border border-slate-100 rounded-2xl p-8 hover:border-indigo-100 hover:bg-indigo-50/20 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="tag-accent">{project.category}</span>
            <span className="text-xs text-slate-400">{project.year}</span>
          </div>
          <h3 className="heading-md">{project.title}</h3>
          <p className="text-sm text-slate-500 mt-1">{project.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href={`/projects/${project.slug}`}
            className="btn-secondary text-sm"
          >
            Case study <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <p className="text-body mb-6">{project.description}</p>

      <ul className="space-y-2 mb-6">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

function SecondaryCard({ project }: { project: typeof otherProjects[0] }) {
  return (
    <div className="card group flex flex-col justify-between min-h-[200px]">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="tag">{project.category}</span>
          <span className="text-xs text-slate-400">{project.year}</span>
        </div>
        <h3 className="text-base font-semibold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tech.map((t) => (
          <span key={t} className="tag text-xs">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-slate-50">
      <div className="container-main">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
            Work
          </p>
          <h2 className="heading-lg mb-4">Selected Projects</h2>
          <p className="text-body max-w-xl">
            A mix of products I&apos;ve built, systems I&apos;ve architected, and AI
            infrastructure I&apos;ve shipped. Real problems, real stakes.
          </p>
        </div>

        {/* Featured */}
        <div className="space-y-6 mb-16">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-slate-100" />
          <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">
            More projects
          </span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        {/* Secondary grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <SecondaryCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
