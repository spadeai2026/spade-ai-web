export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-earth-50 border-t border-earth-200"
      style={{ fontFamily: "Georgia, serif" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* About */}
          <div>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-earth-500 mb-3">
              Project
            </p>
            <h3
              className="text-lg font-semibold text-earth-900 mb-3"
              style={{ letterSpacing: "-0.01em" }}
            >
              SPADE-AI
            </h3>
            <p className="text-sm font-sans text-earth-700 leading-relaxed mb-3">
              Deep Learning Based Soil Property Estimation from Smartphone Images
              for Crop Recommendation.
            </p>
            <p className="text-xs font-sans text-earth-500">
              Jashore University of Science and Technology, Bangladesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-earth-500 mb-3">
              Quick Links
            </p>
            <div className="flex flex-col gap-0">
              {[
                { label: "About",      href: "#about"  },
                { label: "Impact",     href: "#impact" },
                { label: "Team",       href: "#team"   },
              ].map((link, i, arr) => (
                <a
                  key={i}
                  href={link.href}
                  className={`text-sm font-sans text-earth-700 hover:text-earth-900 transition-colors py-2.5 ${
                    i < arr.length - 1 ? "border-b border-earth-100" : ""
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-sans font-medium uppercase tracking-widest text-earth-500 mb-3">
              Contact
            </p>
            <div className="flex flex-col gap-0">
              {[
                { label: "PI",      email: "pi.spade.ai@gmail.com"   },
                { label: "Co-PI",   email: "copi.spade.ai@gmail.com" },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className={`flex items-baseline gap-3 py-2.5 ${
                    i < arr.length - 1 ? "border-b border-earth-100" : ""
                  }`}
                >
                  <span className="text-xs font-sans font-medium uppercase tracking-wider text-earth-500 min-w-[36px]">
                    {item.label}
                  </span>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-sm font-sans text-earth-700 hover:text-earth-900 transition-colors border-b border-earth-300 pb-px"
                    style={{ textDecoration: "none", fontSize: "13px" }}
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Funded By */}
        <div className="border-t border-earth-200 pt-10 mb-10">
          <p className="text-xs font-sans font-medium uppercase tracking-widest text-earth-500 mb-8 text-center">
            Funded & Supported By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { src: "/logos/adb.png",     alt: "Asian Development Bank"               },
              { src: "/logos/ugc.png",     alt: "University Grants Commission Bangladesh" },
              { src: "/logos/icsetep.png", alt: "ICSETEP"                              },
            ].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-20 md:h-24 object-contain opacity-90"
              />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-earth-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs font-sans text-earth-500">
            &copy; {currentYear} SPADE-AI Research Project. All rights reserved.
          </p>
          <p className="text-xs font-sans text-earth-400">
            Jashore University of Science and Technology, Jashore, Bangladesh
          </p>
        </div>

      </div>
    </footer>
  );
}