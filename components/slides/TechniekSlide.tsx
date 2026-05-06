import Image from 'next/image'
import { Cpu } from 'lucide-react'

export default function TechniekSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <Cpu size={18} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Architectuur
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
          De Techniek
        </h2>
        <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
      </div>

      {/* Diagram container */}
      <div className="relative flex-1 w-full min-h-[400px] rounded-2xl overflow-hidden border border-border shadow-lg bg-white p-4">
        <Image
          src="/diagram.png"
          alt="Technische Architectuur Diagram"
          fill
          className="object-contain"
          priority
        />
      </div>


    </div>
  )
}
