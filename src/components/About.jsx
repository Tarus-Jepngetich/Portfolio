import L2 from "../assets/L2.png";
import Leaf from "../assets/Leaf.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Decorative PNGs */}
      {/* Top Left */}
      <div className="hidden md:block absolute top-0 left-0">
        <img
          src={L2}
          alt="Decorative corner"
          className="w-40 md:w-52 float-slow"
        />
      </div>

      {/* Top Right (mirrored) */}
      <div className="hidden md:block absolute top-0 right-0">
        <img
          src={L2}
          alt="Decorative corner mirrored"
          className="w-40 md:w-52 float-slow scale-x-[-1]"
        />
      </div>

      {/* Bottom Right Leaf */}
      <div className="hidden md:block absolute bottom-10 right-0">
        <img
          src={Leaf}
          alt="Leaf decorative"
          className="w-48 md:w-56 float-slow-alt"
        />
      </div>

      {/* Main content */}
      <div className="max-w-3xl text-center text-slate-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me 🌿</h2>
        <p className="text-slate-800 leading-relaxed">
          I’m <span className="font-semibold">Tarus Mercy Jepngetich</span>, a designer, developer,
          and artist passionate about crafting experiences that blend technology
          with emotion. My work spans from digital storytelling to functional
          design systems that bring ideas to life beautifully.
        </p>
        <p className="mt-4 text-slate-800 leading-relaxed">
          Whether sketching concepts, designing intuitive UIs, or coding smooth
          web experiences, I love connecting art, empathy, and innovation.
        </p>
      </div>
    </section>
  );
}
