import L5 from "../assets/L5.png";


export default function ArtGallery() {
  return (
           
        <section
          id="art"
          className="relative min-h-screen flex items-center justify-center px-6 py-20"
          
        >
          
<div className=" hidden md:block absolute right-0 bottom-10">
  <img
    src={L5}
    alt="Decorative art"
    className="w-50 float-slow "
  />
</div> 
          <div className="max-w-6xl mx-auto text-center text-slate-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Art & Illustration 🎨
            </h2>
            <p className="text-slate-800 max-w-2xl mx-auto mb-8">
              Art keeps me grounded. It shapes how I see color, composition, and
              emotion — all of which I carry into my interfaces and front-end work.
            </p>

            {/* Gallery grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-square rounded-xl bg-white shadow-lg hover:scale-105 transform transition duration-300 flex items-center justify-center text-slate-400">
                <span>Artwork 1</span>
              </div>
              <div className="aspect-square rounded-xl bg-white shadow-lg hover:scale-105 transform transition duration-300 flex items-center justify-center text-slate-400">
                <span>Artwork 2</span>
              </div>
              <div className="aspect-square rounded-xl bg-white shadow-lg hover:scale-105 transform transition duration-300 flex items-center justify-center text-slate-400">
                <span>Artwork 3</span>
              </div>
            </div>

            {/* Optional View More button */}
            <div className="mt-10">
              <a
                href="#"
                className="inline-block px-8 py-3 rounded-full bg-slate-900 text-[#FFD1AD] font-semibold text-sm hover:bg-slate-800 transition"
              >
                View More Artworks
              </a>
            </div>
          </div>
        </section>

  );
}
