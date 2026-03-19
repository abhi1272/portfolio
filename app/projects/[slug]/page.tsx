import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { featuredProjects } from "@/data";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = featuredProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = featuredProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="pt-24 pb-20">
      <div className="container-main max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-10 transition-colors"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="tag-accent">{project.category}</span>
            <span className="text-xs text-slate-400">{project.year}</span>
          </div>
          <h1 className="heading-xl mb-2">{project.title}</h1>
          <p className="text-lg text-slate-500">{project.subtitle}</p>
        </div>

        {/* Role badge */}
        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 mb-10">
          <div>
            <div className="text-xs text-slate-400 font-medium">My role</div>
            <div className="text-sm font-semibold text-slate-800">{project.role}</div>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-slate max-w-none mb-10">
          {project.longDescription.split("\n\n").map((para, i) => (
            <p key={i} className="text-body text-base mb-4">
              {para}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-10">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Key highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                <span className="text-slate-700">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div>
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Tech stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
