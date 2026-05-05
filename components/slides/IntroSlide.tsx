import Image from 'next/image'
import { Zap } from 'lucide-react'

export default function IntroSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 py-12">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        {/* Partnership lockup */}
        <div className="relative w-full max-w-md">
          <Image
            src="/viesa-hellotv-lockup.png"
            alt="Viesa Automations x Hello TV"
            width={640}
            height={200}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-3">
          <p className="text-xl text-muted-foreground font-medium text-balance leading-relaxed">
            Slimme automatisering voor HelloTV
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 rounded-full bg-viesa-teal" />

        {/* Tagline */}
        <p className="text-base text-muted-foreground leading-relaxed max-w-lg text-balance">
          Een voorstel voor het moderniseren van dagelijkse operationele processen
          via één centraal, geautomatiseerd platform.
        </p>

        {/* Pill badge */}
        <div className="flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
          <Zap size={14} />
          <span>Presentatie Hello TV — 2026-05-07</span>
        </div>
      </div>
    </div>
  )
}
