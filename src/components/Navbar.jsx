import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const sectionLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "extras", label: "Extras" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

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

  // Track active section on Home page
  useEffect(() => {
    const sections = sectionLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navBg = "bg-[#FFE3C7]/80";
  const navBorder = "border-b border-[#E6BFA0]";
  const navText = "text-[#5A3B1E]";
  const linkBase = "relative text-sm font-medium transition-colors duration-200";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-transform duration-300 ${navBg} ${navBorder} ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 object-contain mr-2" />
        </div>

        {/* Desktop links: Home section anchors + Journal route */}
        <ul className="hidden md:flex gap-6 items-center">
          {sectionLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${linkBase} ${navText} ${isActive ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                >
                  <span className={`${isActive ? "font-semibold" : "font-medium"}`}>{link.label}</span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-[#5A3B1E] transition-all duration-200 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li>
            <NavLink
              to="/journal"
              className={({ isActive }) =>
                `${linkBase} ${navText} ${isActive ? "opacity-100 font-semibold" : "opacity-80 hover:opacity-100"}`
              }
            >
              Journal
            </NavLink>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((p) => !p)}
          className={`md:hidden rounded-full px-3 py-2 border border-[#E6BFA0] bg-[#FFE3C7] ${navText} text-lg shadow-sm active:scale-95 transition`}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className={`${navBg} ${navBorder} md:hidden`}>
          <ul className="flex flex-col items-center py-3 space-y-2">
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${navText} text-sm font-medium px-4 py-1 rounded-full transition-colors hover:bg-[#FFE3C7]`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <NavLink
                to="/journal"
                className={`${navText} text-sm font-medium px-4 py-1 rounded-full transition-colors hover:bg-[#FFE3C7]`}
                onClick={() => setIsOpen(false)}
              >
                Journal
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
