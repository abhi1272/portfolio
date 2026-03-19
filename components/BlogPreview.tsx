import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="section-padding border-t border-slate-50">
      <div className="container-main">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
              Writing
            </p>
            <h2 className="heading-lg mb-3">AI Blog</h2>
            <p className="text-body max-w-lg">
              Technical deep-dives on LLMs, system design, and building AI-powered
              products in the real world.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            All posts <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border border-slate-100 rounded-xl hover:border-indigo-100 hover:bg-indigo-50/20 transition-all duration-200"
            >
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag-accent">{tag}</span>
                  ))}
                  {post.draft && (
                    <span className="tag bg-amber-50 text-amber-600">Coming soon</span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{post.excerpt}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate-300 group-hover:text-indigo-500 transition-colors"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/blog" className="link-accent text-sm font-medium">
            See all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
