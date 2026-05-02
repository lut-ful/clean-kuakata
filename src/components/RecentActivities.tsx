import { getRecentPosts, type Post } from "@/lib/content";
import Link from "next/link";

const TYPE_CONFIG = {
  blog: { label: "Blog", color: "bg-teal text-white" },
  story: { label: "Story", color: "bg-coral text-white" },
  gallery: { label: "Gallery", color: "bg-sand text-charcoal" },
} as const;

function ActivityCard({ post }: { post: Post }) {
  const { label, color } = TYPE_CONFIG[post.type] ?? TYPE_CONFIG.blog;
  const dateStr = new Date(post.date).toLocaleDateString("en-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow flex flex-col">
      {/* Cover */}
      <div
        className="h-44 flex items-end p-5"
        style={{
          // When coverImage is set: background: `url('${post.coverImage}') center/cover`
          background: post.coverColor,
        }}
      >
        <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${color}`}>
          {label}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-charcoal/40 text-xs mb-2">{dateStr}</p>
        <h3 className="font-heading text-lg font-bold text-charcoal mb-3 leading-snug flex-1">
          {post.title}
        </h3>
        <p className="text-charcoal/60 text-sm leading-relaxed mb-5">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-auto">
          <a
            href={`/blog/${post.slug}`}
            className="text-teal text-sm font-semibold hover:text-teal-dark transition-colors"
          >
            Read more →
          </a>
          {post.author && (
            <span className="text-charcoal/30 text-xs">{post.author}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default async function RecentActivities() {
  const posts = getRecentPosts(3);

  return (
    <section id="activities" className="bg-offwhite py-20 md:py-28 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-4">
          Recent Activities
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Blog, Stories &amp; Updates.
          </h2>
          <Link
            href="/blog"
            className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors shrink-0"
          >
            View all →
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <ActivityCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-charcoal/40">
            <p className="text-4xl mb-4">📝</p>
            <p>No posts yet. Add markdown files to <code>content/posts/</code> to get started.</p>
          </div>
        )}

        {/* Content type legend */}
        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          {(Object.entries(TYPE_CONFIG) as [string, { label: string; color: string }][]).map(
            ([, { label, color }]) => (
              <span key={label} className={`text-xs font-semibold px-3 py-1 rounded-full ${color}`}>
                {label}
              </span>
            )
          )}
          <span className="text-charcoal/40 text-xs self-center">— content types</span>
        </div>
      </div>
    </section>
  );
}
