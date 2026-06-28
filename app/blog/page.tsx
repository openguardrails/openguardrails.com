export const metadata = {
  title: "Blog — OpenGuardrails",
  description: "Operational guides and notes on vendor-neutral agent safety & security with OpenGuardrails (OGR).",
};

const POSTS = [
  {
    slug: "guarding-a-hermes-agent-with-openguardrails",
    title: "Guarding a Hermes agent with OpenGuardrails",
    date: "2026-06-28",
    blurb:
      "Guard a Hermes agent behind one neutral contract — intercept every tool call and real exec, enforce one policy you own, and plug in any vendor's detector without rewiring the agent. What Hermes exposes, what you pip install, the one policy that controls it, and how to verify end to end.",
  },
];

export default function BlogIndex() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Blog</h1>
      <p className="text-zinc-400 mb-10">
        Operational guides for vendor-neutral agent safety &amp; security.
      </p>
      <ul className="space-y-8">
        {POSTS.map((p) => (
          <li key={p.slug} className="border-b border-white/[0.06] pb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-2">{p.date}</p>
            <a href={`/blog/${p.slug}/`} className="block group">
              <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                {p.title}
              </h2>
            </a>
            <p className="text-zinc-400 mt-2 leading-relaxed">{p.blurb}</p>
            <a
              href={`/blog/${p.slug}/`}
              className="inline-block mt-3 text-accent text-sm font-semibold hover:underline"
            >
              Read →
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
