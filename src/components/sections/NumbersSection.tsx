import { useHlsVideo } from "@/hooks/useHlsVideo"

export function NumbersSection() {
  const videoRef = useHlsVideo(
    "https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8"
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
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, hsl(260 87% 3%) 0%, hsl(260 87% 3% / 0.85) 15%, hsl(260 87% 3% / 0.4) 40%, hsl(260 87% 3% / 0.15) 60%, hsl(260 87% 3% / 0.3) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Metric */}
        <div className="text-center mb-24">
          <div className="text-hero-heading text-7xl sm:text-[8rem] lg:text-[10rem] font-semibold tracking-tighter leading-none">
            150+
          </div>
          <div className="text-primary text-lg font-medium mt-4">Proyectos entregados</div>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Soluciones de software implementadas con éxito para empresas de todos los tamaños y sectores.
          </p>
        </div>

        {/* Bottom Metrics */}
        <div className="liquid-glass liquid-glass-border rounded-3xl p-12 grid md:grid-cols-2">
          <div className="text-center md:border-r border-border/50 md:pr-12">
            <div className="text-hero-heading text-5xl sm:text-6xl font-semibold tracking-tight">
              15+
            </div>
            <div className="text-muted-foreground mt-2">Industrias atendidas</div>
          </div>
          <div className="text-center md:pl-12 mt-8 md:mt-0">
            <div className="text-hero-heading text-5xl sm:text-6xl font-semibold tracking-tight">
              99.9%
            </div>
            <div className="text-muted-foreground mt-2">Disponibilidad de sistemas</div>
          </div>
        </div>
      </div>
    </section>
  )
}
