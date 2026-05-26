import heroImg from "../assets/My_image.jpg";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Code2,
  Layers3,
  Briefcase,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#f8fafc] text-slate-900">
      {/* BACKGROUND */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-500/25 blur-3xl" />
      <div className="absolute right-[-100px] top-[40%] h-[280px] w-[280px] rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[20%] h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-3xl" />

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative z-10">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-5 py-2 text-sm font-semibold text-purple-700 shadow-sm backdrop-blur-xl">
              <Sparkles size={16} />
              Full Stack Developer & UI Enthusiast
            </div>

            {/* TITLE */}
            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Crafting
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                Beautiful
              </span>
              <br />
              Modern Web Experiences
            </h1>

            {/* DESC */}
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Hi, I'm{" "}
              <span className="font-bold text-slate-900">
                Nishant Sharma
              </span>
              — a passionate Full Stack Developer focused on building scalable,
              responsive, and visually polished applications using React,
              Laravel, Vue, Nuxt, Tailwind CSS, and modern web technologies.
              <br />
              <br />
              I love transforming ideas into smooth digital experiences with
              clean code, performance optimization, and modern UI design.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-semibold text-white shadow-2xl shadow-purple-500/20 transition duration-300 hover:scale-105"
              >
                Explore Projects
                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-purple-400 hover:text-purple-700"
              >
                Let's Connect
              </Link>
            </div>

            {/* SOCIAL */}
            <div className="mt-10 flex items-center gap-4">
              {[
                {
                  icon: <Mail size={22} />,
                  link: "mailto:ns695373@gmail.com",
                },
                {
                  icon: <Github size={22} />,
                  link: "https://github.com/Nishant70-sharma",
                },
                {
                  icon: <Linkedin size={22} />,
                  link: "https://www.linkedin.com/in/nishant-sharma-93874726b",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/80 text-purple-700 shadow-md backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-2">
              {[
                {
                  value: "2+",
                  label: "Years Experience",
                  color: "text-purple-600",
                },
                {
                  value: "10+",
                  label: "Company Projects",
                  color: "text-pink-500",
                },
                {
                  value: "4+",
                  label: "Personal Projects",
                  color: "text-cyan-500",
                },
                {
                  value: "100%",
                  label: "Responsive Design",
                  color: "text-emerald-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/40 bg-white/80 p-5 shadow-sm backdrop-blur-xl"
                >
                  <h3 className={`text-3xl font-black ${item.color}`}>
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center">
            {/* GLOW */}
            <div className="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/50 bg-white/70 p-4 shadow-2xl backdrop-blur-2xl">
              <img
                src={heroImg}
                alt="Nishant Sharma"
                className="h-[420px] w-full rounded-[28px] object-cover object-top sm:h-[500px] sm:w-[400px]"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-[-20px] left-1/2 w-[90%] max-w-sm -translate-x-1/2 rounded-3xl border border-white/50 bg-white/90 p-5 shadow-xl backdrop-blur-xl sm:bottom-8 sm:left-0 sm:w-auto sm:translate-x-0">
              <p className="text-sm font-medium text-slate-500">
                Currently Working With
              </p>

              <h4 className="mt-2 text-lg font-bold text-slate-800">
                React • Laravel • Vue • Tailwind
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Building fast, scalable and user-friendly applications with
                modern technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <div className="rounded-[40px] border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur-2xl sm:p-12">
          {/* HEADING */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              <Code2 size={16} />
              My Tech Stack
            </div>

            <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
              Technologies I Work With
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              I build high-performance full stack applications using modern
              frontend and backend technologies focused on scalability,
              responsiveness, and clean UI experiences.
            </p>
          </div>

          {/* TECHS */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              {
                name: "React",
                icon: <Layers3 size={18} />,
              },
              {
                name: "Laravel",
                icon: <Briefcase size={18} />,
              },
              {
                name: "Vue.js",
                icon: <Layers3 size={18} />,
              },
              {
                name: "Tailwind CSS",
                icon: <Code2 size={18} />,
              },
              {
                name: "JavaScript",
                icon: <Code2 size={18} />,
              },
              {
                name: "PHP",
                icon: <Code2 size={18} />,
              },
              {
                name: "MySQL",
                icon: <DatabaseIcon />,
              },
              {
                name: "PostgreSQL",
                icon: <DatabaseIcon />,
              },
              {
                name: "REST API",
                icon: <Code2 size={18} />,
              },
              {
                name: "GitHub",
                icon: <Github size={18} />,
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 text-purple-600">
                  {tech.icon}

                  <span className="font-semibold text-slate-700">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/tech"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Explore Full Stack
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* SIMPLE DATABASE ICON */
function DatabaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[18px] w-[18px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}