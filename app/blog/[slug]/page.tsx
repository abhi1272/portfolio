import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="pt-24 pb-20">
      <div className="container-main max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-10 transition-colors"
        >
          <ArrowLeft size={14} /> Back to blog
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="tag-accent">{tag}</span>
          ))}
          {post.draft && (
            <span className="tag bg-amber-50 text-amber-600">Coming soon</span>
          )}
        </div>

        {/* Title */}
        <h1 className="heading-xl mb-4">{post.title}</h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-10 pb-10 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate prose-headings:font-semibold prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-slate-900 prose-pre:text-slate-100 max-w-none">
          <MDXRemote source={post.content} />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <p className="text-sm text-slate-500 mb-4">
            Found this useful? Let&apos;s talk.
          </p>
          <a
            href="mailto:abhishek.omex@gmail.com"
            className="btn-primary"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
