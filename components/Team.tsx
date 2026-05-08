export default function Team() {
  const pi   = { role: "Principal Investigator",    name: "Prof. Dr. Md. Alam Hossain", email: "pi.spade.ai@gmail.com"   };
  const copi = { role: "Co-Principal Investigator", name: "Dr. A F M Shahab Uddin",     email: "copi.spade.ai@gmail.com" };

  const assistants = [
    { name: "Name 1", email: "ra1.spade.ai@gmail.com" },
    { name: "Name 2", email: "ra2.spade.ai@gmail.com" },
  ];

  return (
    <section id="team" className="bg-earth-50 font-serif pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-6">

        <p className="text-xs tracking-widest uppercase text-earth-500 font-sans font-medium mb-2">
          Research Group
        </p>
        <h2 className="text-3xl font-semibold text-earth-900 tracking-snug mb-2">
          SPADE-AI Team
        </h2>
        <p className="text-sm font-sans text-earth-700 leading-relaxed mb-12 max-w-lg">
          A collaborative research group advancing AI-driven precision agriculture
          at Jashore University of Science and Technology.
        </p>

        <div className="border-t border-earth-200 mb-10" />

        {/* PI */}
        <div className="mb-9">
          <p className="text-xs font-sans font-medium uppercase tracking-widest text-earth-500 mb-1">{pi.role}</p>
          <h3 className="text-xl font-semibold text-earth-900 tracking-title mb-1.5">{pi.name}</h3>
          <a href={`mailto:${pi.email}`} className="text-fine font-sans text-earth-600 border-b border-earth-300 pb-px no-underline">
            {pi.email}
          </a>
        </div>

        {/* Co-PI */}
        <div className="mb-11">
          <p className="text-xs font-sans font-medium uppercase tracking-widest text-earth-500 mb-1">{copi.role}</p>
          <h3 className="text-xl font-semibold text-earth-900 tracking-title mb-1.5">{copi.name}</h3>
          <a href={`mailto:${copi.email}`} className="text-fine font-sans text-earth-600 border-b border-earth-300 pb-px no-underline">
            {copi.email}
          </a>
        </div>

        <div className="border-t border-earth-200 mb-8" />

        <p className="text-xs font-sans font-medium uppercase tracking-widest text-earth-500 mb-5">
          Research Assistants
        </p>

        <div className="flex flex-col mb-14">
          {assistants.map((ra, i, arr) => (
            <div key={i} className={`flex items-baseline justify-between flex-wrap gap-2 py-4 ${i < arr.length - 1 ? "border-b border-earth-100" : ""}`}>
              <span className="text-base font-semibold text-earth-900 tracking-title">{ra.name}</span>
              <a href={`mailto:${ra.email}`} className="text-fine font-sans text-earth-600 border-b border-earth-300 pb-px no-underline">
                {ra.email}
              </a>
            </div>
          ))}
        </div>

        <div className="border-t border-earth-200 pt-8 flex items-center gap-5 flex-wrap">
          <img src="/logos/just.png" alt="Jashore University of Science and Technology" className="h-12 object-contain opacity-90" />
          <div>
            <p className="text-sm font-sans font-semibold text-earth-900">Jashore University of Science and Technology</p>
            <p className="text-xs font-sans text-earth-500 mt-0.5">Jashore, Bangladesh</p>
          </div>
        </div>

      </div>
    </section>
  );
}