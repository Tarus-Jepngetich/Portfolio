// src/journal/components/GalleryHome.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderCard from "./HeaderCard";
import { TABS, PROJECT_GROUPS } from "../data/galleryData";

export default function GalleryHome() {
  const [activeTab, setActiveTab] = useState("graphic");
  const navigate = useNavigate();
  const projects = PROJECT_GROUPS[activeTab];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-50">
      <HeaderCard />

      <section>
        {/* Tabs */}
        <div className="bg-slate-900 rounded-t-xl border border-slate-800 border-b-0">
          <nav className="flex flex-wrap gap-2 px-4 pt-3 text-xs sm:text-sm font-medium">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-t-lg border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-sky-400 text-sky-100 bg-slate-800"
                    : "border-transparent text-sky-400 hover:text-sky-200 hover:bg-slate-800/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Cards */}
        <div className="bg-slate-900 rounded-b-xl border border-slate-800 border-t-0 p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-700/60 bg-slate-900/80 p-4 shadow-sm hover:border-sky-400 hover:shadow-lg transition"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{project.kind}</p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-50">{project.title}</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{project.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(`/journal/category/${project.id}`)}
                  className="mt-4 inline-flex items-center justify-between text-[11px] font-medium text-sky-300 group-hover:text-sky-200"
                >
                  <span>View projects</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-0.5">↗</span>
                </button>
              </article>
            ))}
          </div>

          <p className="mt-4 text-[11px] text-slate-500">
            Viewing:{" "}
            <span className="font-semibold text-sky-300">
              {TABS.find((tab) => tab.id === activeTab)?.label}
            </span>
            . Use the deep blue tabs to switch between Graphic Design, UI/UX, and Art.
          </p>
        </div>
      </section>
    </div>
  );
}
