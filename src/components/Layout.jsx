import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Resume",
      path: "/resume",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* LOGO */}
          <Link
            to="/"
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-2xl font-black tracking-tight text-transparent"
          >
            Nishant Sharma
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                      : "text-slate-700 hover:bg-white hover:text-purple-600 hover:shadow-md"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT BUTTON */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Hire Me
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${
            mobileMenu ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 px-5 py-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-5 py-4 text-sm font-semibold transition duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* MOBILE CTA */}
            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-4 text-center text-sm font-semibold text-white shadow-lg"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main>{children}</main>
    </div>
  );
}