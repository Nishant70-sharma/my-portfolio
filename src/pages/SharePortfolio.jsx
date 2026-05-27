import { useState } from "react";
import {
  Send,
  Mail,
  FileText,
  Globe,
  ShieldCheck,
  ArrowRight,
  LockKeyhole,
  CheckCircle2,
} from "lucide-react";

export default function SharePortfolio() {
  /* ---------------- PASSWORD PROTECTION ---------------- */

  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = "nishant@2026";

  const unlockPage = () => {
    if (password === correctPassword) {
      setAuthorized(true);
    } else {
      alert("Wrong Password");
    }
  };

  /* ---------------- SHARE FORM ---------------- */

  const [email, setEmail] = useState("");

  const handleShare = (e) => {
    e.preventDefault();

    const subject =
      "Nishant Sharma | Full Stack Developer Portfolio";

    const body = `
Hello,

I hope you're doing well.

I’m sharing my portfolio and resume for your review.

🌐 Portfolio:
https://your-portfolio.vercel.app

📄 Resume:
https://your-portfolio.vercel.app/nishant_resume.pdf

About Me:
I’m a Full Stack Developer skilled in:
• React.js
• Laravel
• Vue.js
• Nuxt.js
• Tailwind CSS
• REST APIs

I specialize in building scalable, responsive, and modern web applications with beautiful UI and optimized performance.

Thank you for your time.

Best Regards,
Nishant Sharma
`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  /* ---------------- PASSWORD SCREEN ---------------- */

  if (!authorized) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8fafc] px-5">
        {/* BG EFFECTS */}
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-500/20 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-3xl" />

        <div className="relative w-full max-w-md overflow-hidden rounded-[40px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
          {/* TOP GLOW */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-600 to-pink-500" />

          {/* ICON */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-2xl">
            <LockKeyhole size={40} />
          </div>

          {/* TITLE */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              🔒 Private Access
            </div>

            <h1 className="mt-5 text-4xl font-black text-slate-900">
              Protected Page
            </h1>

            <p className="mt-4 leading-8 text-slate-600">
              This page is private and accessible only to authorized users.
            </p>
          </div>

          {/* INPUT */}
          <div className="mt-10">
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Enter Password
            </label>

            <input
              type="password"
              placeholder="Enter Secret Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-purple-400 focus:bg-white"
            />

            <button
              onClick={unlockPage}
              className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.02]"
            >
              <ShieldCheck size={20} />

              Unlock Page

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </main>
    );
  }

  /* ---------------- MAIN SHARE PAGE ---------------- */

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fafc] px-5 py-20 sm:px-8 lg:px-10">
      {/* BG EFFECTS */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-purple-500/20 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-3xl" />

      <section className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[40px] border border-white/40 bg-white/80 shadow-2xl backdrop-blur-2xl">
          {/* TOP */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-14 text-center text-white sm:px-12">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[30px] bg-white/20 backdrop-blur-xl">
              <Send size={44} />
            </div>

            <h1 className="mt-8 text-4xl font-black sm:text-5xl">
              Share Portfolio & Resume
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
              Instantly generate a professional email with your portfolio,
              resume, and introduction ready to share with recruiters, clients,
              or companies.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
                🚀 Quick Sharing Tool
              </div>

              <h2 className="mt-6 text-3xl font-black text-slate-900">
                Professional Email Generator
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                This tool automatically prepares a clean professional email with
                your portfolio and resume links for instant sharing.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: <Globe size={22} />,
                    title: "Portfolio Link Included",
                  },

                  {
                    icon: <FileText size={22} />,
                    title: "Resume PDF Included",
                  },

                  {
                    icon: <Mail size={22} />,
                    title: "Professional Message Ready",
                  },

                  {
                    icon: <CheckCircle2 size={22} />,
                    title: "One Click Sharing",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                      {item.icon}
                    </div>

                    <h3 className="font-semibold text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-3xl font-black text-slate-900">
                Share Now
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Enter any email address and instantly open your email app with a
                fully prepared professional email.
              </p>

              <form
                onSubmit={handleShare}
                className="mt-10 space-y-6"
              >
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Recipient Email
                  </label>

                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="recruiter@gmail.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-purple-400"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.02]"
                >
                  <Send
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />

                  Share Portfolio

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* INFO */}
              <div className="mt-8 rounded-2xl border border-purple-200 bg-purple-50 p-5">
                <p className="text-sm leading-7 text-purple-700">
                  After clicking the button, Gmail, Outlook, Apple Mail, or
                  your default mail application will automatically open with the
                  portfolio link, resume PDF, and professional message already
                  filled in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}