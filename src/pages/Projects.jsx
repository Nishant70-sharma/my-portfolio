import {
  ArrowUpRight,
  Github,
  Layers3,
  Database,
  CreditCard,
  CalendarDays,
  GraduationCap,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    title: "CRM System",
    icon: <Layers3 size={26} />,
    tech: ["Laravel", "Nuxt.js", "Tailwind CSS", "API"],
    desc: "Built and customized a powerful CRM platform for lead management, client communication, activity tracking, and role-based access control with responsive UI and optimized backend APIs.",
    github: null,
    live: "https://www.osm-ermes.it",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Time Management",
    icon: <Layers3 size={26} />,
    tech: ["Laravel", "React", "Tailwind CSS", "API"],
    desc: "Developed a modern time management platform focused on employee scheduling, productivity tracking, attendance management, and workflow organization with responsive UI and optimized performance.",
    github: null,
    live: "https://app.i-time.biz",
    color: "from-purple-500 to-pink-500",
  },

  {
    title: "OSM COURSE",
    icon: <Layers3 size={26} />,
    tech: ["Laravel", "React", "Tailwind CSS", "API"],
    desc: "Built and enhanced an online business learning platform featuring premium courses, secure user access, responsive dashboards, and optimized frontend experiences for entrepreneurs and investors.",
    github: null,
    live: "https://imprenditoreinvestitore.it/",
    color: "from-purple-500 to-pink-500",
  },

  {
    title: "Online Academy Platform",
    icon: <GraduationCap size={26} />,
    tech: ["Laravel", "Vue.js", "Tailwind CSS"],
    desc: "Developed a complete LMS platform with courses, quizzes, payment integration, teacher/student roles, progress tracking, and secure content delivery.",
    github: null,
    live: "#",
    color: "from-pink-500 to-orange-500",
  },

  {
    title: "Asset & Profit Management",
    icon: <BarChart3 size={26} />,
    tech: ["Laravel", "Vue.js", "Dashboard"],
    desc: "Created an enterprise management system for tracking assets, expenses, profits, and analytics with role-based permissions and real-time reporting dashboards.",
    github: null,
    live: "#",
    color: "from-cyan-500 to-blue-500",
  },

  {
    title: "Event Management Platform",
    icon: <CalendarDays size={26} />,
    tech: ["Laravel", "Vue.js", "Tailwind"],
    desc: "Built a complete event management system featuring scheduling, attendee registration, calendar views, notifications, and responsive user interfaces.",
    github: null,
    live: "#",
    color: "from-emerald-500 to-teal-500",
  },

  {
    title: "Payment Gateway Integration",
    icon: <CreditCard size={26} />,
    tech: ["Laravel", "PayPal", "API"],
    desc: "Integrated secure online payment systems with transaction handling, PayPal integration, logging, and advanced error management for reliable transactions.",
    github: "https://github.com/Nishant70-sharma/Laravel-Payment-gatway",
    live: null,
    color: "from-indigo-500 to-purple-500",
  },

  {
    title: "Modern React Frontend",
    icon: <Database size={26} />,
    tech: ["React", "Tailwind CSS", "REST API"],
    desc: "Developed a responsive React frontend with modern UI design, API integration, form validation, reusable components, and performance optimization.",
    github: "https://github.com/Nishant70-sharma/React-js",
    live: null,
    color: "from-orange-500 to-red-500",
  },
];

export default function Projects() {
  return (
    <main className="relative overflow-hidden bg-[#f8fafc] px-5 py-10 sm:px-8 lg:px-10">
      {/* BACKGROUND */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-3xl" />

      <section className="relative mx-auto max-w-7xl">
        {/* HERO */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
            🚀 My Projects
          </div>

          <h1 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
            Featured
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Projects & Work
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            A collection of professional and personal projects built using
            Laravel, React, Vue.js, Nuxt.js, Tailwind CSS, APIs, and modern web
            technologies focused on scalability, performance, and beautiful UI
            experiences.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/80 p-7 shadow-xl backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* TOP GLOW */}
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${project.color}`}
              />

              {/* ICON */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r text-white shadow-lg ${project.color}`}
              >
                {project.icon}
              </div>

              {/* TECH STACK */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-2xl font-black text-slate-900">
                {project.title}
              </h2>

              {/* DESC */}
              <p className="mt-4 leading-7 text-slate-600">{project.desc}</p>

              {/* BUTTONS */}
              <div className="mt-8 flex items-center gap-4">
                {/* LIVE DEMO BUTTON */}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
                  >
                    Live Demo
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    />
                  </a>
                )}

                {/* GITHUB BUTTON */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-300 hover:border-purple-300 hover:text-purple-600 hover:shadow-lg"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-[40px] bg-gradient-to-r from-purple-600 to-pink-500 p-10 text-center shadow-2xl sm:p-14">
          <h2 className="text-4xl font-black text-white">
            Want to Build Something Amazing?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            I'm available for freelance projects, frontend development,
            full-stack applications, dashboards, admin panels, and modern web
            experiences.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-purple-700 shadow-xl transition duration-300 hover:scale-105"
          >
            Let’s Work Together
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
