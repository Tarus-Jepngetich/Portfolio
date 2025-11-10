import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const links = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Web Dev" },
  { id: "uiux", label: "UI/UX" },
  { id: "art", label: "Art" },
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

      // Always show near the very top
      if (y < 20) {
        setIsVisible(true);
        lastY = y;
        return;
      }

      // Only react if movement is noticeable
      if (Math.abs(delta) > 25) {
        if (delta > 0 && !isOpen) {
          // scrolling down
          setIsVisible(false);
        } else if (delta < 0) {
          // scrolling up
          setIsVisible(true);
        }
        lastY = y;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // section is "active" when ~50% in view
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Color tokens
  const navBg = "bg-[#FFE3C7]/80";         // light brown tint
  const navBorder = "border-b border-[#E6BFA0]"; // slightly deeper brown
  const navText = "text-[#5A3B1E]";        // main brown text

  const linkBase =
    "relative text-sm font-medium transition-colors duration-200";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-transform duration-300 ${navBg} ${navBorder} ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Image */}
        <div className="flex items-center">
  <img
    src={Logo}
    alt="Logo"
    className="w-10 h-10 object-contain mr-2"
  />
</div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${linkBase} ${navText} ${
                    isActive
                      ? "opacity-100"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`pb-1 ${
                      isActive ? "font-semibold" : "font-medium"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* underline indicator */}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-[#5A3B1E] transition-all duration-200 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
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
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`${navText} text-sm font-medium px-4 py-1 rounded-full transition-colors ${
                      isActive
                        ? "bg-[#E6BFA0]/80"
                        : "hover:bg-[#FFE3C7] hover:bg-opacity-90"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
