import Link from "next/link";
import { Lightbulb, ArrowUpRight } from "lucide-react";
import { aiToolsIdeas } from "@/data";

const statusColors: Record<string, string> = {
  Concept: "bg-slate-100 text-slate-500",
  "In Exploration": "bg-indigo-50 text-indigo-600",
  "In Development": "bg-emerald-50 text-emerald-600",
};

export default function AITools() {
  return (
    <section id="ai-tools" className="section-padding border-t border-slate-50">
      <div className="container-main">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
              Ideas
            </p>
            <h2 className="heading-lg mb-3">AI Tools I&apos;m Thinking About</h2>
            <p className="text-body max-w-lg">
              Product ideas at the intersection of AI and real business problems.
              Some are concepts, some are being explored.
            </p>
          </div>
          <Link
            href="/tools"
            className="hidden sm:flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            See all <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiToolsIdeas.map((idea) => (
            <div
              key={idea.title}
              className="card flex flex-col justify-between group hover:border-indigo-100 hover:bg-indigo-50/10"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Lightbulb size={18} className="text-indigo-500" />
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      statusColors[idea.status] || "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {idea.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{idea.title}</h3>
                <p className="text-xs text-indigo-600 font-medium mb-3">{idea.tagline}</p>
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
      </div>
    </section>
  );
}
