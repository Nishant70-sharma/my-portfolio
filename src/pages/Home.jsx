import heroImg from "../assets/My_image.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14">
      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 backdrop-blur-2xl md:p-12">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-2xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-pink-500/20 blur-2xl" />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-purple-300">
              Hi, I am Nishant Sharma
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Full Stack Developer
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-slate-300">
              I build modern, responsive web experiences with React and a strong
              focus on clean UI, performance, and maintainable code.
            </p>
            <div className="mt-4 rounded-lg bg-red-500 px-3 py-2 text-white">
              tailwind-test
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 font-semibold text-white transition hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-purple-400/40"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#"
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-purple-200 shadow-lg transition hover:-translate-y-1"
              >
                ✉️
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-purple-200 shadow-lg transition hover:-translate-y-1"
              >
                🐙
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-purple-200 shadow-lg transition hover:-translate-y-1"
              >
                in
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-[40px] bg-black/20 blur-xl" />
            <img
              src={heroImg}
              alt="Hero"
              className="relative z-10 h-[360px] w-full rounded-[30px] object-cover object-center shadow-2xl md:h-[460px]"
            />
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-2xl">
          <div className="text-3xl font-bold text-purple-300">Clean</div>
          <p className="mt-3 text-green-900">UI-first components</p>
        </div>
        <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-2xl">
          <div className="text-3xl font-bold text-pink-300">Fast</div>
          <p className="mt-3 text-slate-300">Performance-minded builds</p>
        </div>
        <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-2xl">
          <div className="text-3xl font-bold text-cyan-300">UX</div>
          <p className="mt-3 text-slate-300">User-centered experience</p>
        </div>
      </section>
    </main>
  );
}
