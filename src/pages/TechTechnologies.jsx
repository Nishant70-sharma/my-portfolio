import {
  Code2,
  Database,
  Globe,
  Server,
  Layers3,
  Smartphone,
  Github,
  ArrowLeft,
  Rocket,
} from "lucide-react";

import { Link } from "react-router-dom";

const technologies = [
  {
    title: "Frontend",
    icon: <Code2 size={28} />,
    color: "from-purple-500 to-pink-500",
    items: [
      "React.js",
      "Vue.js",
      "Nuxt.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },

  {
    title: "Backend",
    icon: <Server size={28} />,
    color: "from-cyan-500 to-blue-500",
    items: [
      "Laravel",
      "PHP",
      "REST APIs",
      "Authentication",
      "API Integration",
      "MVC Architecture",
    ],
  },

  {
    title: "Database",
    icon: <Database size={28} />,
    color: "from-emerald-500 to-teal-500",
    items: [
      "MySQL",
      "PostgreSQL",
      "Database Design",
      "Query Optimization",
    ],
  },

  {
    title: "Tools & Deployment",
    icon: <Rocket size={28} />,
    color: "from-orange-500 to-red-500",
    items: [
      "GitHub",
      "Git",
      "Jira",
      "Vercel",
      "Netlify",
      "Responsive Design",
      "Performance Optimization",
    ],
  },

  {
    title: "UI / UX",
    icon: <Layers3 size={28} />,
    color: "from-indigo-500 to-purple-500",
    items: [
      "Modern UI Design",
      "Responsive Layouts",
      "Glassmorphism",
      "Animations",
      "User Experience",
    ],
  },

  {
    title: "Cross Platform",
    icon: <Smartphone size={28} />,
    color: "from-pink-500 to-orange-500",
    items: [
      "Mobile Responsive",
      "Desktop Optimization",
      "Tablet Support",
      "SEO Friendly",
    ],
  },
];

export default function TechTechnologies() {
  return (
    <main className="relative overflow-hidden bg-[#f8fafc] px-5 py-10 sm:px-8 lg:px-10">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-500/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-3xl" />

      <section className="relative mx-auto max-w-7xl">
        {/* HERO */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
            ⚡ Technologies & Skills
          </div>

          <h1 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
            My
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Tech Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            I work with modern frontend and backend technologies to build fast,
            scalable, responsive, and visually polished web applications with
            clean architecture and optimized performance.
          </p>
        </div>

        {/* TECHNOLOGY GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((section, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* TOP BORDER */}
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${section.color}`}
              />

              {/* ICON */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r text-white shadow-lg ${section.color}`}
              >
                {section.icon}
              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-2xl font-black text-slate-900">
                {section.title}
              </h2>

              {/* ITEMS */}
              <div className="mt-6 flex flex-wrap gap-3">
                {section.items.map((tech) => (
                  <div
                    key={tech}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* EXTRA SECTION */}
        <div className="mt-16 rounded-[40px] bg-gradient-to-r from-purple-600 to-pink-500 p-10 text-center shadow-2xl sm:p-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 text-white backdrop-blur-xl">
            <Globe size={40} />
          </div>

          <h2 className="mt-8 text-4xl font-black text-white">
            Always Learning & Improving
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            I continuously explore modern technologies, frameworks, UI trends,
            and scalable development practices to build better digital
            experiences and high-quality applications.
          </p>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="https://github.com/Nishant70-sharma"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-xl transition duration-300 hover:scale-105"
            >
              <Github size={20} />
              Visit GitHub
            </a>

            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}