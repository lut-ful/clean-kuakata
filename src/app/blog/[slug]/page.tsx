import { getPostBySlug, getAllPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Pre-render all known slugs at build time
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — CleanKuakata`,
    description: post.excerpt,
  };
}

const TYPE_LABEL: Record<string, string> = {
  blog: "Blog",
  story: "Story",
  gallery: "Gallery",
};
const TYPE_COLOR: Record<string, string> = {
  blog: "bg-teal text-white",
  story: "bg-coral text-white",
  gallery: "bg-sand text-charcoal",
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const dateStr = new Date(post.date).toLocaleDateString("en-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Dynamically import react-markdown only on the server render path
  const { default: ReactMarkdown } = await import("react-markdown");
  const { default: remarkGfm } = await import("remark-gfm");

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Header */}
      <div
        className="pt-24 pb-16 px-4"
        style={{ background: post.coverColor }}
      >
        <div className="max-w-3xl mx-auto">
          <a href="/blog" className="text-white/50 text-sm hover:text-white transition-colors mb-6 inline-block">
            ← All posts
          </a>
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${TYPE_COLOR[post.type] ?? "bg-white/20 text-white"}`}>
              {TYPE_LABEL[post.type] ?? post.type}
            </span>
            <span className="text-white/50 text-sm">{dateStr}</span>
            {post.author && <span className="text-white/50 text-sm">· {post.author}</span>}
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-white/40 text-xs bg-white/10 px-2 py-0.5 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <article className="bg-white rounded-2xl p-8 md:p-12 shadow-sm prose prose-lg max-w-none
          prose-headings:font-heading prose-headings:text-charcoal
          prose-p:text-charcoal/75 prose-p:leading-relaxed
          prose-a:text-teal prose-a:no-underline hover:prose-a:underline
          prose-strong:text-charcoal prose-strong:font-semibold
          prose-ul:text-charcoal/70 prose-li:marker:text-teal
          prose-blockquote:border-teal prose-blockquote:text-charcoal/60 prose-blockquote:italic
          prose-code:text-coral prose-code:bg-offwhite prose-code:px-1 prose-code:rounded
          prose-hr:border-charcoal/10">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </article>

        {/* Footer nav */}
        <div className="mt-8 flex justify-between items-center">
          <a href="/blog" className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors">
            ← All posts
          </a>
          <a href="/#volunteer" className="bg-coral text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-coral-dark transition-colors">
            Volunteer for June 5 →
          </a>
        </div>
      </div>
    </div>
  );
}
