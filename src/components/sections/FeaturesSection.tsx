import { ChevronRight, Zap, BarChart3, Shield } from "lucide-react"
import { useHlsVideo } from "@/hooks/useHlsVideo"

const features = [
  {
    icon: Zap,
    title: "Desarrollo a Medida",
    description:
      "Creamos aplicaciones web y móviles personalizadas que se adaptan a los procesos y objetivos de tu empresa.",
    statValue: "150+",
    statLabel: "proyectos entregados",
  },
  {
    icon: BarChart3,
    title: "Consultoría Estratégica",
    description:
      "Analizamos tu infraestructura tecnológica y diseñamos hojas de ruta para optimizar tus operaciones digitales.",
    statValue: "98%",
    statLabel: "satisfacción del cliente",
  },
  {
    icon: Shield,
    title: "Calidad y Seguridad",
    description:
      "Implementamos las mejores prácticas de desarrollo seguro, testing automatizado y estándares de calidad en cada proyecto.",
    statValue: "Zero",
    statLabel: "incidentes de seguridad",
  },
]

export function FeaturesSection() {
  const videoRef = useHlsVideo(
    "https://stream.mux.com/Jwr2RhmsNrd6GEspBNgm02vJsRZAGlaoQIh4AucGdASw.m3u8"
  )

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 liquid-glass liquid-glass-border rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="text-foreground/70">Nuestros Servicios</span>
            <span className="bg-white/10 rounded-full px-2.5 py-0.5 text-xs flex items-center gap-1 text-foreground">
              Explorar <ChevronRight className="w-3 h-3" />
            </span>
          </div>
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight">
            Soluciones Tecnológicas
            <br />
            que Impulsan Resultados
          </h2>
          <p className="text-hero-sub text-lg mt-4 max-w-lg mx-auto opacity-80">
            Tres pilares fundamentales que garantizan el éxito de tu transformación digital.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="liquid-glass liquid-glass-border rounded-3xl p-8 hover:bg-white/[0.03] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-hero-heading text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="border-t border-border/50 pt-5">
                <div className="text-hero-heading text-2xl font-semibold">{feature.statValue}</div>
                <div className="text-muted-foreground text-xs mt-1">{feature.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
