export default function Footer() {
  return (
    <footer className="bg-[var(--paper)]/95 border-t border-[var(--rule)] ">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-xs md:text-sm text-[var(--ink-soft)] font-serif">
        © {new Date().getFullYear()} TARUS MERCY JEPNG&apos;ETICH. Built with 💙, time &amp; Passion. Enjoy Browsing.
      </div>
    </footer>
  );
}
