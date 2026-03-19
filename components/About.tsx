import { skills, personal } from "@/data";

export default function About() {
  const paragraphs = personal.about.split("\n\n");

  return (
    <section id="about" className="section-padding border-t border-slate-50">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
              About
            </p>
            <h2 className="heading-lg mb-8">
              Engineer. Builder.<br />Occasional trekker.
            </h2>

            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-body text-base">
                  {para}
                </p>
              ))}
            </div>

            {/* Experience pill */}
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">11</div>
                <div className="text-xs text-slate-500 font-medium">Years exp.</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">8+</div>
                <div className="text-xs text-slate-500 font-medium">Products shipped</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">3</div>
                <div className="text-xs text-slate-500 font-medium">Clouds mastered</div>
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-4">
              Skills & Stack
            </p>
            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-semibold text-slate-700 mb-2.5">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
