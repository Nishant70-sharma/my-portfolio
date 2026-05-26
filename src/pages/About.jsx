import {
  Code2,
  Layers3,
  Rocket,
  Palette,
  MonitorSmartphone,
  Database,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <main className="relative overflow-hidden bg-[#f8fafc] px-5 py-10 sm:px-8 lg:px-10">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-3xl" />

      <section className="relative mx-auto max-w-7xl">
        {/* HERO SECTION */}
        <div className="rounded-[40px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12 lg:p-16">
          {/* BADGE */}
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
            ✨ About Me
          </div>

          {/* TITLE */}
          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Passionate About Building
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Modern Web Applications
            </span>
          </h1>

          {/* DESCRIPTION */}
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Hi, I’m{" "}
                <span className="font-bold text-slate-900">
                  Nishant Sharma
                </span>
                , a Full Stack Developer who enjoys creating beautiful,
                responsive, and scalable digital experiences.
                <br />
                <br />
                I specialize in modern frontend development with React, Vue,
                Tailwind CSS, and backend technologies like Laravel & REST APIs.
                My focus is not only writing clean code but also building
                products that users genuinely enjoy using.
              </p>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                I love transforming ideas into high-performance web applications
                with elegant UI/UX and maintainable architecture.
                <br />
                <br />
                From dashboards and admin panels to modern landing pages and
                full-stack applications, I enjoy solving real-world problems
                with creative and scalable solutions.
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "2+",
                title: "Years Experience",
                color: "text-purple-600",
              },
              {
                number: "10+",
                title: "Professional Projects",
                color: "text-pink-500",
              },
              {
                number: "4+",
                title: "Personal Projects",
                color: "text-cyan-500",
              },
              {
                number: "100%",
                title: "Responsive Design",
                color: "text-emerald-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className={`text-4xl font-black ${item.color}`}>
                  {item.number}
                </h3>

                <p className="mt-3 text-sm font-medium text-slate-500">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="mt-10 rounded-[40px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
          {/* TITLE */}
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
              🚀 Skills & Expertise
            </div>

            <h2 className="mt-6 text-4xl font-black text-slate-900">
              Technologies & Tools I Use
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              I work with modern frontend and backend technologies to build
              scalable, responsive, and high-performance web applications.
            </p>
          </div>

          {/* SKILLS GRID */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Code2 size={30} />,
                title: "Frontend Development",
                desc: "Building responsive and modern interfaces using React, Vue, Tailwind CSS, and JavaScript.",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: <Database size={30} />,
                title: "Backend Development",
                desc: "Creating scalable APIs and backend systems using Laravel, PHP, MySQL, and PostgreSQL.",
                color: "bg-pink-100 text-pink-600",
              },
              {
                icon: <Palette size={30} />,
                title: "UI / UX Design",
                desc: "Designing clean, user-friendly, and visually polished digital experiences.",
                color: "bg-cyan-100 text-cyan-600",
              },
              {
                icon: <Rocket size={30} />,
                title: "Performance Optimization",
                desc: "Improving website speed, responsiveness, SEO, and overall user experience.",
                color: "bg-emerald-100 text-emerald-600",
              },
              {
                icon: <Layers3 size={30} />,
                title: "Full Stack Applications",
                desc: "Developing complete web applications with frontend, backend, APIs, and databases.",
                color: "bg-orange-100 text-orange-600",
              },
              {
                icon: <MonitorSmartphone size={30} />,
                title: "Responsive Design",
                desc: "Ensuring applications look beautiful across desktop, tablet, and mobile devices.",
                color: "bg-indigo-100 text-indigo-600",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${skill.color}`}
                >
                  {skill.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {skill.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-10 rounded-[40px] border border-white/40 bg-gradient-to-r from-purple-600 to-pink-500 p-10 text-center shadow-2xl sm:p-14">
          <h2 className="text-4xl font-black text-white">
            Let’s Create Something Great Together
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            I’m always excited to work on modern web applications, creative
            ideas, and meaningful digital products.
          </p>

          <a
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-purple-700 shadow-xl transition duration-300 hover:scale-105"
          >
            Contact Me
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}