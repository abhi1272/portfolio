import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing on LLMs, system design, AI infrastructure, and building scalable products — by Abhishek Kumar.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-20">
      <div className="container-main">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
            Writing
          </p>
          <h1 className="heading-xl mb-4">AI Blog</h1>
          <p className="text-body max-w-xl">
            Technical deep-dives on LLMs, system design, and building AI-powered products.
            No fluff — things I&apos;ve actually built and learned from.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="py-20 text-center text-slate-400">
            <p>No posts yet. Run <code className="bg-slate-100 px-2 py-0.5 rounded text-sm">npm run new-post</code> to create one.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border border-slate-100 rounded-xl hover:border-indigo-100 hover:bg-indigo-50/20 transition-all"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag-accent">{tag}</span>
                    ))}
                    {post.draft && (
                      <span className="tag bg-amber-50 text-amber-600">Coming soon</span>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right hidden sm:block">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 group-hover:text-indigo-500 transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
          <p className="text-sm text-indigo-700 font-medium mb-1">More posts coming soon</p>
          <p className="text-sm text-indigo-500">
            I&apos;m writing detailed technical posts on LLM gateway architecture, NLP-powered query
            systems, and cloud cost optimization. Check back soon.
          </p>
        </div>
      </div>
    </div>
  );
}
