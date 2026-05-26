import { Download, FileText, ArrowUpRight } from "lucide-react";

export default function Resume() {
  const pdfUrl = "/nishant_resume.pdf";

  return (
    <main className="relative overflow-hidden bg-[#f8fafc] px-5 py-5 sm:px-8 lg:px-10">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-3xl" />

      <section className="relative mx-auto max-w-7xl">
        {/* HERO CARD */}
        <div className="rounded-[40px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="max-w-3xl">
              {/* BADGE */}
              <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
                📄 My Resume
              </div>

              {/* TITLE */}
              <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                Professional
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {" "}
                  Resume & Experience
                </span>
              </h1>

              {/* DESC */}
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Explore my professional experience, technical skills, projects,
                and development journey in frontend and full stack web
                development.
                <br />
                <br />
                The resume includes my expertise in React, Laravel, Vue.js,
                Nuxt.js, Tailwind CSS, API integrations, dashboards, CRM
                systems, and modern responsive UI development.
              </p>
            </div>

            {/* DOWNLOAD BUTTON */}
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href={pdfUrl}
                download="Nishant_Sharma_Resume.pdf"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-semibold text-white shadow-2xl shadow-purple-500/20 transition duration-300 hover:scale-105"
              >
                <Download size={20} />

                Download Resume

                <ArrowUpRight
                  size={18}
                  className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-purple-300 hover:text-purple-600 hover:shadow-lg"
              >
                <FileText size={20} />
                Open PDF
              </a>
            </div>
          </div>

          {/* PDF PREVIEW */}
          <div className="mt-12 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
            {/* TOP BAR */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <FileText size={16} />
                  Nishant_Sharma_Resume.pdf
                </div>
              </div>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-xl bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 transition hover:bg-purple-200 sm:block"
              >
                Open Fullscreen
              </a>
            </div>

            {/* PDF IFRAME */}
            <div className="relative">
              <iframe
                title="Resume PDF"
                src={pdfUrl}
                className="h-[75vh] w-full bg-white"
              />
            </div>
          </div>

          {/* QUICK INFO */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Experience",
                value: "2+ Years",
                color: "text-purple-600",
              },
              {
                title: "Projects",
                value: "10+ Completed",
                color: "text-pink-500",
              },
              {
                title: "Tech Stack",
                value: "React • Laravel",
                color: "text-cyan-500",
              },
              {
                title: "Availability",
                value: "Freelance Ready",
                color: "text-emerald-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className={`text-2xl font-black ${item.color}`}>
                  {item.value}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}