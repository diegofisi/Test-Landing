const testimonials = [
  {
    quote:
      "GM2 transformó por completo nuestra operación digital. Pasamos de procesos manuales a un sistema integrado que nos ahorra horas cada día. Su equipo entendió nuestras necesidades desde el primer momento.",
    name: "María González",
    role: "Directora de Tecnología, Grupo Finova",
    initials: "MG",
  },
  {
    quote:
      "El equipo de GM2 se integró a nuestro proyecto como si fueran parte de la empresa. La calidad del código y su compromiso con los plazos de entrega superaron todas nuestras expectativas.",
    name: "Carlos Mendoza",
    role: "CTO, LogiRed Solutions",
    initials: "CM",
  },
  {
    quote:
      "Evaluamos varias consultoras antes de elegir a GM2. Su experiencia técnica y enfoque estratégico marcaron la diferencia. Nuestro sistema ahora escala sin problemas.",
    name: "Ana Rodríguez",
    role: "Gerente de Operaciones, Salud+ Digital",
    initials: "AR",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight">
            La Confianza de
            <br />
            Nuestros Clientes
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Lo que dicen las empresas que ya trabajan con nosotros.
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
