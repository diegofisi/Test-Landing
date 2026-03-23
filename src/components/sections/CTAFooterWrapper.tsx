import { Button } from "@/components/ui/button"
import { useHlsVideo } from "@/hooks/useHlsVideo"

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Community", "Support", "Status"],
}

export function CTAFooterWrapper() {
  const videoRef = useHlsVideo(
    "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8"
  )

  return (
    <section className="relative overflow-hidden">
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
            "linear-gradient(to bottom, hsl(260 87% 3%) 0%, hsl(260 87% 3% / 0.85) 15%, hsl(260 87% 3% / 0.4) 40%, hsl(260 87% 3% / 0.15) 60%, hsl(260 87% 3% / 0.3) 100%)",
        }}
      />

      {/* CTA Section */}
      <div className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="liquid-glass liquid-glass-border rounded-[2rem] p-12 sm:p-20 text-center">
            <h2 className="text-hero-heading text-3xl sm:text-5xl font-semibold leading-tight mb-5">
              Ready to Outpace
              <br />
              Your Pipeline Targets?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Join 2,400+ teams already accelerating revenue with APEX. No credit card required.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hero">Start Free Today</Button>
              <Button variant="heroSecondary">Talk to Sales</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 px-6">
        <div className="max-w-6xl mx-auto py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-b from-secondary to-muted flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-foreground">
                    <path d="M7 0v14M0 7h14M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-foreground">APEX</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Revenue acceleration platform for modern go-to-market teams.
              </p>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-foreground text-sm font-medium mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/30 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-muted-foreground text-xs">&copy; 2026 APEX Inc.</span>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
