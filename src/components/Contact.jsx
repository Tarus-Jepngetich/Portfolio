import Flower from "../assets/Flower.png";

export default function Contact() {
  return (
    <section
  id="contact"
  className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 "
>
  {/* Art image on the left middle */}
  <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2">
  <img
    src={Flower}
    alt="Decorative art"
    className="w-40 float-slow"
  />
</div>

  <div className="max-w-3xl text-center text-slate-900">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch 💌</h2>
    <p className="text-slate-800 mb-8">
      Let’s collaborate, connect, or just share ideas — I’d love to hear from you.
    </p>

    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#5A3B1E] outline-none"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#5A3B1E] outline-none"
      />
      <textarea
        rows="4"
        placeholder="Your Message"
        className="px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-[#5A3B1E] outline-none"
      ></textarea>
      <button
        type="submit"
        className="mt-2 px-8 py-3 bg-[#5A3B1E] text-[#FFD1AD] font-semibold rounded-full hover:bg-[#7b5431] transition"
      >
        Send Message ✉️
      </button>
    </form>
  </div>
</section>
  );
}
