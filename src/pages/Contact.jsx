export default function Contact() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <section className="rounded-[40px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-10 text-center backdrop-blur-2xl">
        <h1 className="text-4xl font-bold">Let’s Work Together</h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Available for freelance projects, collaborations, and frontend
          development opportunities.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your-email@example.com"
            className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 font-semibold transition hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="#"
            className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold transition hover:border-purple-400/40"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
