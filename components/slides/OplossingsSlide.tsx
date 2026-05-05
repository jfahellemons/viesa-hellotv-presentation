import { CheckCircle, LayoutDashboard, Plug, Layers, Play } from 'lucide-react'

const features = [
  {
    icon: LayoutDashboard,
    label: 'Één centraal portaal',
    description: 'Alle dagelijkse taken op één plek, geen versnippering meer.',
  },
  {
    icon: Plug,
    label: 'Systeemintegratie',
    description: 'Koppeling met bestaande systemen voor naadloze doorstroom van data.',
  },
  {
    icon: Layers,
    label: 'Moderne interface',
    description: 'Intuïtief en snel, gebouwd op bewezen technologie.',
  },
]

export default function OplossingsSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <CheckCircle size={18} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Onze aanpak
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
          De Oplossing
        </h2>
        <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
      </div>

      {/* Description */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
        <p className="text-foreground/80 text-base leading-relaxed">
          Wij hebben een{' '}
          <strong className="text-foreground font-semibold">prototype ontwikkeld</strong>{' '}
          voor een efficiënter proces. Het systeem biedt één centraal portaal,
          integratie met bestaande systemen en een moderne interface.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map(({ icon: Icon, label, description }) => (
          <div
            key={label}
            className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon size={20} />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{label}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Demo placeholder */}
      <div className="bg-card rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 py-8 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Play size={22} />
        </div>
        <p className="font-semibold text-foreground text-sm">Live Demo</p>
        <p className="text-muted-foreground text-xs text-center max-w-xs">
          Een interactieve demonstratie van het prototype volgt hier tijdens de presentatie.
        </p>
      </div>
    </div>
  )
}
