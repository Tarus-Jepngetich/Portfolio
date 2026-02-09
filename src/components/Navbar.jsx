import Logo from "../assets/Logo.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { playPageFlip } from "../utils/sfx";

const pageLinks = [
  { to: "/gazette", label: "Front Page" },
  { to: "/gazette/About", label: "About" },
  { to: "/gazette/ExperiencePractice", label: "Experience" },
  { to: "/gazette/Certifications", label: "Credentials" },
  { to: "/gazette/Extras", label: "Writing" },
  { to: "/gazette/Contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // ✅ reactive modal state
  const [isModalOpen, setIsModalOpen] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.body.classList.contains("modal-open");
  });

  // ✅ listen for modal open/close changes
  useEffect(() => {
    const sync = () => {
      setIsModalOpen(document.body.classList.contains("modal-open"));
    };

    window.addEventListener("modal-open-change", sync);

    // optional safety: sync on focus (if you alt-tab etc.)
    window.addEventListener("focus", sync);

    return () => {
      window.removeEventListener("modal-open-change", sync);
      window.removeEventListener("focus", sync);
    };
  }, []);

  // Close mobile menu if modal opens
  useEffect(() => {
    if (isModalOpen) setIsOpen(false);
  }, [isModalOpen]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    if (isModalOpen) return;

    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (y < 20) {
        setIsVisible(true);
        lastY = y;
        return;
      }

      if (Math.abs(delta) > 25) {
        if (delta > 0 && !isOpen) setIsVisible(false);
        else if (delta < 0) setIsVisible(true);
        lastY = y;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, isModalOpen]);

  const closeMenu = () => setIsOpen(false);

  const linkBase =
    "px-3 py-1.5 border border-[var(--rule)] rounded-md transition";
  const linkText = "uppercase tracking-[0.18em] text-[11px]";

  // ✅ If modal is open, hide navbar completely
  if (isModalOpen) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[var(--paper)]/95 backdrop-blur-md border-b border-[var(--rule)] print-soft">
        <nav className="max-w-6xl mx-auto px-6 py-3">
          {/* Top masthead row */}
          <div className="flex items-center justify-between gap-4">
            <NavLink
              to="/gazette"
              className="flex items-center gap-3"
              onClick={() => {
                playPageFlip(0.18);
                closeMenu();
              }}
            >
              <img
                src={Logo}
                alt="Tarus logo"
                className="w-10 h-10 object-contain"
              />
              <div className="leading-tight">
                <div className="text-[11px] tracking-[0.3em] uppercase text-[var(--ink-soft)]">
                  The
                </div>
                <div className="text-xl md:text-2xl font-semibold text-[var(--ink)]">
                  Tarus Gazette
                </div>
              </div>
            </NavLink>

            <div className="hidden md:flex items-center gap-3 text-xs text-[var(--ink-soft)]">
              <span className="px-2 py-1 rounded-full bg-[var(--mint)]/60 border border-[var(--rule)]">
                Edition: Portfolio
              </span>
              <span className="px-2 py-1 rounded-full bg-[var(--peach)]/60 border border-[var(--rule)]">
                Web • UI/UX • Art
              </span>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((p) => !p)}
              className="md:hidden rounded-full px-3 py-2 border border-[var(--rule)] bg-white text-[var(--ink)] text-lg shadow-sm active:scale-95 transition"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Edition strip / nav links */}
          <div className="mt-3 border-t border-[var(--rule)] pt-2">
            <ul className="hidden md:flex flex-wrap gap-2 items-center">
              {pageLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => playPageFlip(0.18)}
                    className={({ isActive }) =>
                      `${linkBase} ${linkText} ${
                        isActive
                          ? "bg-[var(--peach)]/30 text-[var(--ink)]"
                          : "bg-white/40 text-[var(--ink-soft)] hover:bg-[var(--mint)]/25"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              <li className="ml-auto">
                <NavLink
                  to="/journal"
                  onClick={() => playPageFlip(0.18)}
                  className={({ isActive }) =>
                    `${linkBase} ${linkText} ${
                      isActive
                        ? "bg-[var(--mint)]/30 text-[var(--ink)]"
                        : "bg-white/40 text-[var(--ink-soft)] hover:bg-[var(--peach)]/25"
                    }`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
            </ul>

            {/* Mobile dropdown */}
            {isOpen && (
              <div className="md:hidden pt-3">
                <ul className="flex flex-col items-center gap-2 pb-3">
                  {pageLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `${linkBase} ${linkText} text-[13px] ${
                            isActive
                              ? "bg-[var(--peach)]/30 text-[var(--ink)]"
                              : "bg-white/50 text-[var(--ink-soft)] hover:bg-[var(--mint)]/25"
                          }`
                        }
                        onClick={() => {
                          playPageFlip(0.18);
                          closeMenu();
                        }}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}

                  <li>
                    <NavLink
                      to="/journal"
                      className={`${linkBase} ${linkText} text-[13px] bg-white/50 text-[var(--ink-soft)] hover:bg-[var(--peach)]/25`}
                      onClick={() => {
                        playPageFlip(0.18);
                        closeMenu();
                      }}
                    >
                      Journal
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
