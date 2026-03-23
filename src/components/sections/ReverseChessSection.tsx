import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useHlsVideo } from "@/hooks/useHlsVideo"

const stats = [
  { value: "47.2%", label: "win-rate increase" },
  { value: "12 days", label: "shorter sales cycle" },
  { value: "2.8x", label: "deal velocity" },
  { value: "91%", label: "forecast accuracy" },
]

export function ReverseChessSection() {
  const videoRef = useHlsVideo(
    "https://stream.mux.com/f0001qPDy00mvqP023lqK3lWx31uHvxirFCHK1yNLczzqxY.m3u8"
  )

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left — Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 liquid-glass liquid-glass-border rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="text-foreground/70">Pipeline Studio</span>
            <span className="bg-white/10 rounded-full px-2.5 py-0.5 text-xs flex items-center gap-1 text-primary">
              Beta <ChevronRight className="w-3 h-3" />
            </span>
          </div>
          <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight mb-5">
            Design Funnels
            <br />
            That Actually Close
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Drag-and-drop pipeline builder with live conversion metrics at every stage. See exactly
            where deals stall and why.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="liquid-glass liquid-glass-border rounded-2xl p-4"
              >
                <div className="text-hero-heading text-xl font-semibold">{stat.value}</div>
                <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <Button variant="hero">Try Pipeline Studio</Button>
        </div>

        {/* Right — Video */}
        <div className="order-1 lg:order-2 liquid-glass liquid-glass-border rounded-3xl aspect-[4/3] overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
