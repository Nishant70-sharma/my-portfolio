import { useState } from "react";

export default function ProtectedRoute({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const checkPassword = () => {
    if (password === "nishant@2026") {
      setAuthorized(true);
    } else {
      alert("Wrong Password");
    }
  };

  if (authorized) {
    return children;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-5">
      <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
        <div className="text-center">
          <div className="inline-flex rounded-2xl bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            🔒 Private Access
          </div>

          <h1 className="mt-5 text-3xl font-black text-slate-900">
            Protected Page
          </h1>

          <p className="mt-3 leading-7 text-slate-600">
            Enter your private password to access this page.
          </p>
        </div>

        <div className="mt-8">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-purple-400"
          />

          <button
            onClick={checkPassword}
            className="mt-5 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-4 font-semibold text-white shadow-xl"
          >
            Unlock Page
          </button>
        </div>
      </div>
    </main>
  );
}