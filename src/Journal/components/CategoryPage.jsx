// src/journal/components/CategoryPage.jsx
import { Link, useParams, useLocation } from "react-router-dom";
import HeaderCard from "./HeaderCard";
import ArtCarousel from "./ArtCarousel";
import { CATEGORY_PAGES } from "../data/galleryData";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const location = useLocation();

  // Tab we came from (passed from GalleryHome via navigate state)
  const fromTab = location.state?.fromTab;

  const category = CATEGORY_PAGES[categoryId];

  if (!category) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 text-slate-50">
        <HeaderCard />
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-4">
          <p className="text-sm text-rose-300">
            Oops — that category doesn&apos;t exist (yet).
          </p>
          <Link
            to="/journal"
            state={fromTab ? { activeTab: fromTab } : undefined}
            className="inline-flex text-xs text-sky-300 hover:text-sky-200"
          >
            ← Back to gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-50">
      <HeaderCard />

      <section className="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Category
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
              {category.title}
            </h2>
          </div>

          <Link
            to="/journal"
            state={fromTab ? { activeTab: fromTab } : undefined}
            className="text-[11px] text-sky-300 hover:text-sky-200"
          >
            ← Back to gallery
          </Link>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {category.intro}
        </p>

        {category.tools && (
          <div className="text-[11px] text-slate-400">
            <span className="uppercase tracking-[0.2em]">TOOLS &amp; MEDIA</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {category.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-slate-800 text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {category.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                {section.heading}
              </h3>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ✅ Carousel only shows if artworks exist on that category */}
        {category.artworks?.length > 0 && <ArtCarousel items={category.artworks} />}

        {category.docs?.length > 0 && (
          <div className="pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Development Journal
              </p>
              <span className="text-[11px] text-slate-500">
                {category.docs.length} entry{category.docs.length > 1 ? "ies" : ""}
              </span>
            </div>

            <div className="grid gap-3">
              {category.docs.map((doc) => (
                <Link
                  key={doc.id}
                  to={doc.to}
                  className="block rounded-xl border border-slate-800 bg-slate-950/40 p-4 hover:bg-slate-950/60 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50">
                        {doc.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        {doc.date} • {doc.readTime}
                      </p>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        {doc.excerpt}
                      </p>
                    </div>

                    <span className="shrink-0 text-[11px] text-sky-300 hover:text-sky-200">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
