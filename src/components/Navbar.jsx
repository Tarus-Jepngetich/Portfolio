import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { playPageFlip } from "../utils/sfx";

const pageLinks = [
  { to: "/gazette", label: "Front Page" },
  { to: "/gazette/About", label: "About" },
  { to: "/gazette/Extras", label: "Extras" },
  { to: "/gazette/Contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);


  // Hide on scroll down, show on scroll up
  useEffect(() => {
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
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

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
            <NavLink to="/gazette" className="flex items-center gap-3"   onClick={() => {
    playPageFlip(0.18);
    closeMenu();
  }}>
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
            <ul className="hidden md:flex flex-wrap gap-x-6 gap-y-2 items-center text-[13px]">
              {pageLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `uppercase tracking-[0.18em] ${
                        isActive ? "font-semibold underline" : "font-medium"
                      } text-[var(--ink)] hover:opacity-80`
                    }
                    style={{
                      textDecorationColor: "var(--peach)",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              <li className="ml-auto">
                <NavLink
                  to="/journal"
                  className={({ isActive }) =>
                    `uppercase tracking-[0.18em] ${
                      isActive ? "font-semibold underline" : "font-medium"
                    } text-[var(--ink)] hover:opacity-80`
                  }
                  style={{
                    textDecorationColor: "var(--mint)",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Journal
                </NavLink>
              </li>
            </ul>

            {/* Mobile dropdown */}
            {isOpen && (
              <div className="md:hidden pt-3">
                <ul className="flex flex-col items-center space-y-2 pb-3">
                  {pageLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `uppercase tracking-[0.18em] text-[13px] ${
                            isActive ? "font-semibold" : "font-medium"
                          } text-[var(--ink)] px-4 py-1 rounded-full hover:bg-[var(--mint)]/40`
                        }              onClick={() => {
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
                      className="uppercase tracking-[0.18em] text-[13px] font-medium text-[var(--ink)] px-4 py-1 rounded-full hover:bg-[var(--peach)]/40"
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
