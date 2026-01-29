import { Outlet, Link } from "react-router-dom";

export default function JournalLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold tracking-tight">VISUAL DIARY</h1>
          <Link
            to="/"
            className="text-sm rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800"
          >
            ← Personal Website
          </Link>
        </div>

        {/* Nested journal routes render here */}
        <Outlet />
      </div>
    </div>
  );
}
