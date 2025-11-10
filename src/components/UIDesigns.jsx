import L3 from "../assets/L3.png";

export default function UIDesigns() {
  return (
    <section
      id="uiux"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Decorative PNG on top left */}
      <div className="hidden md:block absolute left-0 bottom-0">
        <img
          src={L3}
          alt="Decorative art"
          className="w-40 float-slow "
        />
      </div>

      <div className="max-w-5xl mx-auto text-center text-slate-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          UI/UX Designs
        </h2>

        <p className="text-slate-800 max-w-2xl mx-auto mb-10">
          I design user journeys, wireframes, and high-fidelity interfaces with
          a focus on clarity, accessibility, and emotion. I love turning messy
          ideas into simple, grounded experiences.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 text-left md:w-1/2 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">
              Restaurant Ordering Flow
            </h3>
            <p className="text-sm text-slate-200">
              From menu browsing to checkout, I mapped the full journey and
              prototyped screens in Figma for a smooth, low-friction experience.
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 text-left md:w-1/2 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2">
              Newsletter Signup Experience
            </h3>
            <p className="text-sm text-slate-200">
              A simple, welcoming signup form focused on clarity, hierarchy, and
              microcopy that feels human and friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
