export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="rounded-[40px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          I build modern, responsive web experiences with React and a strong
          focus on clean UI, performance, and maintainable code.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-bold text-purple-400">Clean</div>
            <p className="mt-2 text-slate-300">Code & Architecture</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-bold text-pink-400">Fast</div>
            <p className="mt-2 text-slate-300">Performance-first UI</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-bold text-cyan-400">UX</div>
            <p className="mt-2 text-slate-300">User-centered design</p>
          </div>
        </div>
      </section>
    </main>
  );
}
