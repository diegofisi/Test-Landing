const testimonials = [
  {
    quote:
      "APEX transformed how our revenue team operates. We went from guessing to data-driven decisions overnight. Pipeline velocity increased by 40% in the first quarter.",
    name: "Clara Whitfield",
    role: "VP Revenue, Meridian Health",
    initials: "CW",
  },
  {
    quote:
      "The lead routing alone paid for itself in week one. Our reps are closing faster because they're talking to the right prospects at the right time. Game changer.",
    name: "Derek Tanaka",
    role: "Growth Lead, Baseform",
    initials: "DT",
  },
  {
    quote:
      "We evaluated six platforms before choosing APEX. The compliance engine and analytics depth are unmatched. Our board loves the reporting granularity.",
    name: "Simone Reuter",
    role: "CRO, Alpenhaus Group",
    initials: "SR",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight">
            Trusted by Revenue
            <br />
            Leaders Everywhere
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Hear from the teams that made the switch.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`liquid-glass liquid-glass-border rounded-3xl p-8 ${
                i === 1 ? "md:-translate-y-6" : ""
              }`}
            >
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="border-t border-border/50 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground/70">
                  {t.initials}
                </div>
                <div>
                  <div className="text-hero-heading text-sm font-medium">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
