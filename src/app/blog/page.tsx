import { getAllPosts, type PostType } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Stories — CleanKuakata",
  description: "Read the latest articles, volunteer stories, and updates from the CleanKuakata initiative and Plastic-Free Kuakata 2026.",
};

const TYPE_CONFIG: Record<PostType, { label: string; bg: string }> = {
  blog:    { label: "Blog",    bg: "bg-teal text-white" },
  story:   { label: "Story",   bg: "bg-coral text-white" },
  gallery: { label: "Gallery", bg: "bg-sand text-charcoal" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Header */}
      <div className="bg-teal pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-sand/70 text-sm hover:text-sand transition-colors mb-6 inline-block">
            ← CleanKuakata
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-3">
            Blog &amp; Stories
          </h1>
          <p className="text-white/60 text-lg">
            Updates, articles, and stories from the CleanKuakata initiative.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-charcoal/40 text-center py-16">
            No posts yet. Add <code>.md</code> files to <code>content/posts/</code>.
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => {
              const { label, bg } = TYPE_CONFIG[post.type] ?? TYPE_CONFIG.blog;
              const dateStr = new Date(post.date).toLocaleDateString("en-BD", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded-2xl p-6 md:p-8 border border-charcoal/5 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${bg}`}>
                      {label}
                    </span>
                    <span className="text-charcoal/35 text-xs">{dateStr}</span>
                    {post.author && (
                      <span className="text-charcoal/35 text-xs">· {post.author}</span>
                    )}
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-charcoal group-hover:text-teal transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-charcoal/35 bg-charcoal/5 px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
