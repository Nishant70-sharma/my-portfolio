import { Link } from "react-router-dom";

const allTechnologies = [
  "React",
  "Laravel",
  "Vue",
  "Nuxt.js",
  "Tailwind CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "GitHub",
  "REST API",
  "Vite",
  "PostgreSQL",
  "vercel",
  "Netlify",
];

export default function TechTechnologies() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Tech Technologies</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Full list of technologies I use to build fast, scalable
            applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {allTechnologies.map((tech) => (
            <div
              key={tech}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-medium text-slate-700 transition hover:-translate-y-1 hover:border-purple-300"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="rounded-2xl border border-purple-500/20 bg-white/60 px-7 py-4 font-semibold backdrop-blur-xl transition hover:border-purple-500/50 hover:bg-white/80 text-slate-900"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
