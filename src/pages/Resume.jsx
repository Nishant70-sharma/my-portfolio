import { Download, FileText } from "lucide-react";

export default function Resume() {
  const pdfUrl = "/nishant_resume.pdf";

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-left">
            <h1 className="text-4xl font-bold">Resume</h1>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
              View and download my resume.
            </p>
          </div>

          <a
            href={pdfUrl}
            download="nishant_resume.pdf"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 font-semibold text-white shadow-2xl shadow-purple-500/20 transition hover:scale-105"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white">
              <FileText size={16} />
              PDF Preview
            </div>

            <iframe
              title="Resume PDF"
              src={pdfUrl}
              className="h-[70vh] w-full bg-white"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
