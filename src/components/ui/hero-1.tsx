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
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 
      min-h-[calc(100vh-40px)] overflow-hidden 
      bg-[linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--background))_50%,hsl(var(--muted))_88%)]  
      dark:bg-[linear-gradient(to_bottom,hsl(var(--background)),transparent_30%,hsl(var(--muted))_78%,hsl(var(--background))_99%_50%)] 
      rounded-b-xl"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
        bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent */}
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] 
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] 
        -translate-x-1/2 rounded-[100%] border-border bg-background 
        bg-[radial-gradient(closest-side,hsl(var(--background))_82%,hsl(var(--foreground)))] 
        dark:bg-[radial-gradient(closest-side,hsl(var(--background))_82%,hsl(var(--foreground)))] 
        animate-fade-up"
      />

      {/* Eyebrow */}
      {eyebrow && (
        <a href="#" className="group">
          <span
            className="text-sm text-muted-foreground font-sans mx-auto px-5 py-2 
            bg-gradient-to-tr from-muted/5 via-muted/5 to-transparent  
            border-[2px] border-border/20 dark:border-border/5 
            rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center"
          >
            {eyebrow}
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>
      )}

      {/* Title */}
      <h1
        className="animate-fade-in -translate-y-4 text-balance 
        bg-gradient-to-br from-foreground from-30% to-foreground/40 
        bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter 
        text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl 
        dark:from-foreground dark:to-foreground/40"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-12 -translate-y-4 text-balance 
        text-lg tracking-tight text-muted-foreground 
        opacity-0 md:text-xl max-w-3xl mx-auto"
        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
      >
        {subtitle}
      </p>

      {/* CTA */}
      {ctaLabel && (
        <div className="flex justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <Button
            asChild
            size="lg"
            className="mt-[-20px] w-fit md:w-52 z-20 tracking-tight text-center text-lg"
          >
            <Link to={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      )}

      {/* Bottom Fade */}
      <div
        className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
        style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
      />
    </section>
  )
}
