"use client"

import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Technology Services Agency",
  title,
  subtitle,
  ctaLabel = "Start Your Project",
  ctaHref = "/contact",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full min-h-screen flex flex-col items-center justify-center px-6 text-center md:px-8 pt-24 pb-16 overflow-hidden bg-gradient-to-b from-deep-space via-midnight-slate to-deep-space"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(112, 112, 125, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(112, 112, 125, 0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 100%)',
        }}
      />

      {/* Soft glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(closest-side, rgba(82, 102, 235, 0.15) 0%, transparent 80%)',
        }}
      />

      {/* Eyebrow */}
      {eyebrow && (
        <div className="group relative z-10 mb-8">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight tracking-wide uppercase"
          >
            {eyebrow}
            <ChevronRight className="inline w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      )}

      {/* Title */}
      <h1
        className="relative z-10 max-w-5xl mx-auto text-balance text-display md:text-[80px] lg:text-[100px] font-light leading-[1.05] tracking-tight text-starlight mb-8"
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="relative z-10 max-w-2xl mx-auto text-subheading md:text-heading-sm text-silver leading-relaxed mb-12"
      >
        {subtitle}
      </p>

      {/* CTA */}
      {ctaLabel && (
        <div className="relative z-10 flex justify-center">
          <Button
            asChild
            size="xl"
            className="text-base tracking-wide"
          >
            <Link to={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      )}

      {/* Bottom fade to deep space */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-space to-transparent" />
    </section>
  )
}
