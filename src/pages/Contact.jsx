import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;

    const body = `
Name: ${formData.name}

Email: ${formData.email}

Project Type: ${formData.project}

Message:
${formData.message}
    `;

    window.location.href = `mailto:ns695373@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="relative overflow-hidden bg-[#f8fafc] px-5 py-10 sm:px-8 lg:px-10">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-pink-500/20 blur-3xl" />

      <section className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="rounded-[40px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            {/* BADGE */}
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
              🚀 Contact Me
            </div>

            {/* TITLE */}
            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Let’s Build
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Something Amazing
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              I'm available for freelance projects, full stack development,
              frontend engineering, UI/UX improvements, and creative web
              collaborations.
              <br />
              <br />
              Whether you have a startup idea, business website, dashboard, or
              custom web application — I’d love to help bring it to life.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <h3 className="font-semibold text-slate-800">
                    ns695373@gmail.com
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <h3 className="font-semibold text-slate-800">
                    7037745770
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <h3 className="font-semibold text-slate-800">
                  Noida, Delhi  Gurgaon, Haryana, India (Remote Available)
                  </h3>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/Nishant70-sharma"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:text-purple-600 hover:shadow-lg"
              >
                <Github size={20} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/nishant-sharma-93874726b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:text-purple-600 hover:shadow-lg"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-[40px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
            <h2 className="text-3xl font-black text-slate-900">
              Send a Message
            </h2>

            <p className="mt-4 text-slate-600">
              Have a project idea or collaboration in mind? Fill out the form
              below and send me a direct email instantly.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-purple-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-purple-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Project Type
                </label>

                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-purple-400 focus:bg-white"
                >
                  <option value="">Select Project Type</option>
                  <option>Frontend Development</option>
                  <option>Full Stack Development</option>
                  <option>Website Design</option>
                  <option>Dashboard / Admin Panel</option>
                  <option>Freelance Collaboration</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-purple-400 focus:bg-white"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.02]"
              >
                Send Message
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}