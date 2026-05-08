export default function About() {
  return (
    <section
      id="about"
      className="bg-earth-50"
      style={{ padding: "80px 0 96px", fontFamily: "Georgia, serif" }}
    >
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-xs tracking-widest uppercase text-earth-500 font-sans font-medium mb-2">
          The Project
        </p>
        <h2 className="text-3xl font-semibold text-earth-900 mb-12" style={{ letterSpacing: "-0.02em" }}>
          About SPADE-AI
        </h2>

        <div className="border-t border-earth-200 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — key facts panel */}
          <div>
            <div className="border-l-2 border-earth-300 pl-5 mb-8">
              <p className="text-xs font-sans font-medium uppercase tracking-widest text-earth-500 mb-1">
                Core Insight
              </p>
              <p className="text-xl font-semibold text-earth-900 leading-snug" style={{ letterSpacing: "-0.01em" }}>
                Soil Science Meets AI
              </p>
              <p className="text-sm font-sans text-earth-600 mt-1 leading-relaxed">
                Bridging agriculture and technology
              </p>
            </div>

            <div className="flex flex-col">
              {[
                { term: "Domain",  def: "Precision Agriculture & Remote Sensing"    },
                { term: "Method",  def: "Spectral Reconstruction from RGB Images"   },
                { term: "Target",  def: "Smallholder Farmers in Bangladesh"         },
                { term: "Output",  def: "Bengali-language Mobile Application"       },
                { term: "Zones",   def: "~10 Agro-ecological Zones (AEZs)"         },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className={`flex gap-4 py-2.5 ${i < arr.length - 1 ? "border-b border-earth-100" : ""}`}
                >
                  <span className="text-xs font-sans font-medium uppercase tracking-wider text-earth-500 pt-0.5 min-w-[68px]">
                    {item.term}
                  </span>
                  <span className="text-sm font-sans text-earth-800 leading-snug">
                    {item.def}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div className="flex flex-col gap-9">
            <div>
              <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-earth-900 mb-3 pb-2 border-b border-earth-200">
                General Objective
              </h3>
              <p className="text-sm font-sans text-earth-800 leading-loose">
                To develop an AI-driven crop suitability recommendation system (SPADE-AI) that analyzes
                soil properties from smartphone images through spectral reconstruction and multi-source
                agro-ecological data fusion, enabling precise crop suitability and rotation recommendations
                for sustainable, data-informed agricultural practices, thereby enhancing soil health,
                increasing productivity, and strengthening rural socio-economic resilience in Bangladesh.
              </p>
            </div>
            {/* <div>
              <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-earth-900 mb-3 pb-2 border-b border-earth-200">
                Motivation
              </h3>
              <p className="text-sm font-sans text-earth-800 leading-loose">
                Bangladesh's agriculture supports millions of livelihoods, but farmers often rely on
                traditional practices instead of scientific guidance, leading to low yields and poor soil
                management. Existing soil testing methods are costly, time-consuming, and inaccessible to
                smallholder farmers, while current monitoring tools are expensive and non-portable.
                However, the widespread use of smartphones offers a chance to make agricultural insights
                more accessible. This motivates SPADE-AI, an AI-based system that uses smartphone RGB
                images and spectral reconstruction to estimate soil properties, enabling instant,
                data-driven crop recommendations and improving productivity and rural resilience.
              </p>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}