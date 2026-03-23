import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useHlsVideo } from "@/hooks/useHlsVideo"

export function ChessSection() {
  const videoRef = useHlsVideo(
    "https://stream.mux.com/1CCfG6mPC7LbMOAs6iBOfPeNd3WaKlZuHuKHp00G62j8.m3u8"
  )

  const bullets = [
    "Arquitectura de software escalable",
    "Integración de sistemas y APIs",
    "Migración a la nube y DevOps",
  ]

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left — Video */}
        <div className="liquid-glass liquid-glass-border rounded-3xl aspect-[4/3] overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — Content */}
        <div>
          <div className="inline-flex items-center gap-2 liquid-glass liquid-glass-border rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="text-foreground/70">Desarrollo de Software</span>
            <span className="bg-white/10 rounded-full px-2.5 py-0.5 text-xs flex items-center gap-1 text-primary">
              Nuevo <ChevronRight className="w-3 h-3" />
            </span>
          </div>
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight mb-5">
            Tu Visión, Nuestra
            <br />
            Experiencia Técnica
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Combinamos metodologías ágiles con tecnologías de vanguardia para desarrollar
            soluciones robustas y escalables que se adaptan al crecimiento de tu negocio.
          </p>
          <ul className="space-y-3 mb-8">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/80 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <Button variant="hero">Ver Proyectos</Button>
            <Button variant="heroSecondary">Nuestras Tecnologías</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
