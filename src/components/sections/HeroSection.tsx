import { useEffect, useRef } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const brands = [
  { name: "Vortex", letter: "V" },
  { name: "Nimbus", letter: "N" },
  { name: "Prysma", letter: "P" },
  { name: "Cirrus", letter: "C" },
  { name: "Kynder", letter: "K" },
  { name: "Halcyn", letter: "H" },
]

const allBrands = [...brands, ...brands]

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch(() => {})
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260309_042944_4a2205b7-b061-490a-852b-92d9e9955ce9.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 30%, hsl(260 87% 3% / 0.1) 45%, hsl(260 87% 3% / 0.4) 60%, hsl(260 87% 3% / 0.75) 75%, hsl(260 87% 3%) 95%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-6">
        {/* Navbar */}
        <nav className="mt-4 w-full max-w-[850px] liquid-glass liquid-glass-border rounded-3xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-secondary to-muted flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-foreground">
                <path d="M7 0v14M0 7h14M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-foreground">APEX</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <button className="px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1">
              Features <ChevronDown className="w-3 h-3" />
            </button>
            <button className="px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors">
              Solutions
            </button>
            <button className="px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors">
              Plans
            </button>
            <button className="px-3 py-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1">
              Learning <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <Button variant="hero" size="sm" className="rounded-full text-xs px-4 py-1.5 h-auto">
            Sign Up
          </Button>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center -mt-12">
          {/* Announcement Badge */}
          <div className="liquid-glass liquid-glass-border rounded-full px-4 py-1.5 flex items-center gap-2 text-sm mb-8">
            <span className="text-foreground/70">Nova+ Launched!</span>
            <span className="bg-white/10 rounded-full px-2.5 py-0.5 text-xs flex items-center gap-1 text-foreground">
              Explore <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-hero-heading text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-5xl">
            Accelerate Your Revenue
            <br />
            Growth Now
          </h1>

          {/* Subheading */}
          <p className="text-hero-sub text-lg max-w-md mt-4 opacity-80">
            Drive your funnel forward with clever workflows, analytics, and seamless lead management.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <Button variant="hero">Start Free Right Now</Button>
            <Button variant="heroSecondary">Schedule a Consult</Button>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="w-full max-w-6xl flex items-center gap-8 pb-12">
          <p className="text-foreground/50 text-sm leading-tight shrink-0 text-left">
            Relied on by brands
            <br />
            across the globe
          </p>
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-marquee w-max gap-6">
              {allBrands.map((brand, i) => (
                <div key={i} className="flex items-center gap-2 shrink-0">
                  <div className="liquid-glass liquid-glass-border w-6 h-6 rounded-lg flex items-center justify-center text-xs text-foreground/60">
                    {brand.letter}
                  </div>
                  <span className="text-sm text-foreground/40">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
