import type { Metadata } from "next";
import { Lightbulb } from "lucide-react";
import { aiToolsIdeas } from "@/data";

export const metadata: Metadata = {
  title: "AI Tools Ideas",
  description:
    "AI product ideas at the intersection of LLMs and real business problems — by Abhishek Kumar.",
};

const statusColors: Record<string, string> = {
  Concept: "bg-slate-100 text-slate-500",
  "In Exploration": "bg-indigo-50 text-indigo-600",
  "In Development": "bg-emerald-50 text-emerald-600",
};

export default function ToolsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-main">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
            Ideas
          </p>
          <h1 className="heading-xl mb-4">AI Tools I&apos;m Thinking About</h1>
          <p className="text-body max-w-xl">
            Product ideas at the intersection of AI and real business problems. Some are
            early concepts, some are being actively explored. I share these to think out
            loud and find people interested in building together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {aiToolsIdeas.map((idea) => (
            <div
              key={idea.title}
              className="card flex flex-col justify-between hover:border-indigo-100 hover:bg-indigo-50/10"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-indigo-50 rounded-xl">
                    <Lightbulb size={20} className="text-indigo-500" />
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      statusColors[idea.status] || "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {idea.status}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">{idea.title}</h2>
                <p className="text-sm text-indigo-600 font-medium mb-3">{idea.tagline}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{idea.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {idea.tags.map((tag) => (
                  <span key={tag} className="tag-accent">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 bg-slate-900 rounded-2xl text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Interested in building one of these?
          </h2>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            If any of these ideas resonate with you — whether you&apos;re a founder, investor,
            or fellow engineer — let&apos;s talk.
          </p>
          <a
            href="mailto:abhishek.omex@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
