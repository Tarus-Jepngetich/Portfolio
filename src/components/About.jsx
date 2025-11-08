import Leaf from "../assets/Leaf.png";

export default function About() {
  return (
    <section
  id="about"
  className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
>
  {/* Decorative art image on bottom right */}
  <div className="hidden md:block absolute right-10 bottom-10">
    <img
      src={Leaf}
      alt="Decorative art"
      className="w-36 float-slow"
    />
  </div>

  <div className="max-w-4xl text-center text-slate-900">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me 👋🧡</h2>
    <p className="text-slate-800 leading-relaxed">
      I’m Gladwel — a web developer, UI/UX designer, and artist who finds beauty
      in structure, simplicity, and creativity. I love blending clean code with
      expressive visuals to craft experiences that feel warm and human.
    </p>
    <p className="text-slate-800 mt-4">
      When I’m not designing or coding, you’ll find me sketching, painting, or
      exploring small, peaceful corners of life that inspire my art and design
      process.
    </p>
  </div>
</section>
  );
}
