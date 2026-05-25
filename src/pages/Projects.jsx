const projects = [
  {
    title: "Modern Portfolio",
    tech: ["React", "Tailwind", "Vite"],
    desc: "A beautiful personal portfolio with responsive layouts and smooth UI.",
  },
  {
    title: "Admin Dashboard",
    tech: ["Laravel", "Vue", "Charts"],
    desc: "Analytics dashboard with charts, tables, and authentication system.",
  },
  {
    title: "Landing Page",
    tech: ["UI/UX", "Responsive"],
    desc: "High-converting landing page with premium modern design aesthetics.",
  },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-lg text-slate-400">
          Some of my recent work and experiments.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500/40"
          >
            <div className="mb-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="mt-4 leading-7 text-slate-400">{project.desc}</p>

            <a
              href="#"
              className="mt-6 inline-flex items-center font-semibold text-purple-400 transition hover:gap-3"
            >
              View Project <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
