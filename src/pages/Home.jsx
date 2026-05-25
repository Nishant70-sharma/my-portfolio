import heroImg from "../assets/My_image.jpg";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[350px] w-[350px] rounded-full bg-pink-500/20 blur-3xl" />

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-xl">
              🚀 Full Stack Developer
            </div>

            <h1 className="mt-7 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Building
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Modern
              </span>
              <br />
              Web Experiences
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Hi, I’m{" "}
              <span className="font-semibold text-white">
                Nishant Sharma
              </span>
              . I develop scalable full stack applications with React,
              Laravel, Tailwind CSS, and modern web technologies focused on
              performance and beautiful user experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-semibold text-white shadow-2xl shadow-purple-500/20 transition hover:scale-105"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-purple-400/40 hover:bg-white/10"
              >
                Contact Me
              </Link>
            </div>

            {/* SOCIALS */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="mailto:your-email@example.com"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purple-300 backdrop-blur-xl transition hover:-translate-y-1 hover:border-purple-500/40"
              >
                <Mail size={22} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purple-300 backdrop-blur-xl transition hover:-translate-y-1 hover:border-purple-500/40"
              >
                <Github size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purple-300 backdrop-blur-xl transition hover:-translate-y-1 hover:border-purple-500/40"
              >
                <Linkedin size={22} />
              </a>
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-black text-purple-400">
                  2+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-pink-400">
                  20+
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-cyan-400">
                  100%
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Responsive UI
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />

            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl">
              <img
                src={heroImg}
                alt="Nishant Sharma"
                className="h-[500px] w-[400px] rounded-[30px] object-cover object-top"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-0 rounded-3xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-2xl">
              <p className="text-sm text-slate-300">
                Currently working with
              </p>

              <h4 className="mt-1 text-lg font-bold">
                React • Laravel • Tailwind
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black">
              Tech Stack
            </h2>

            <p className="mt-4 text-slate-400">
              Technologies I use to build fast and scalable applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {[
              "React",
              "Laravel",
              "Vue",
              "Tailwind CSS",
              "JavaScript",
              "PHP",
              "MySQL",
              "GitHub",
              "REST API",
              "Vite",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-medium text-slate-200 transition hover:-translate-y-1 hover:border-purple-500/40"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}