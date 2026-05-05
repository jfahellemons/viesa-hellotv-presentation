import { Map, Code2, TestTube2, Rocket } from 'lucide-react'

const phases = [
  {
    icon: Code2,
    phase: 'Fase 1',
    title: 'Ontwikkeling',
    duration: '2 maanden',
    description:
      'Bouwen van het centrale portaal, systeemkoppelingen en kernfunctionaliteit op basis van requirements.',
    color: 'bg-primary/10 text-primary',
    barColor: 'bg-primary',
  },
  {
    icon: TestTube2,
    phase: 'Fase 2',
    title: 'Testen',
    duration: '1 maand',
    description:
      'Pilotfase met selecte groep gebruikers, feedbackverwerking en fijnafstelling van het systeem.',
    color: 'bg-viesa-teal-light/10 text-viesa-teal-light',
    barColor: 'bg-viesa-teal-light',
  },
  {
    icon: Rocket,
    phase: 'Fase 3',
    title: 'Implementatie',
    duration: '1 maand',
    description:
      'Volledige uitrol naar alle filialen, gebruikerstraining en overdracht naar beheerteam.',
    color: 'bg-muted text-muted-foreground',
    barColor: 'bg-muted-foreground',
  },
]

export default function RoadmapSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <Map size={18} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Planning
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
          Roadmap
        </h2>
        <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
      </div>

      {/* Timeline total */}
      <div className="bg-card rounded-2xl border border-border p-5 shadow-sm flex items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-2">Totale looptijd</p>
          <div className="flex gap-1 h-2">
            <div className="flex-1 rounded-l-full bg-primary" />
            <div className="flex-[0.5] bg-viesa-teal-light" />
            <div className="flex-[0.5] rounded-r-full bg-muted-foreground/40" />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground">Start</span>
            <span className="text-xs font-semibold text-foreground">4 maanden</span>
          </div>
        </div>
      </div>

      {/* Phase cards */}
      <div className="flex flex-col gap-3">
        {phases.map(({ icon: Icon, phase, title, duration, description, color }, index) => (
          <div
            key={phase}
            className="bg-card rounded-xl border border-border p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Step indicator */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div
                className={[
                  'flex h-10 w-10 items-center justify-center rounded-lg',
                  color,
                ].join(' ')}
              >
                <Icon size={20} />
              </div>
              {index < phases.length - 1 && (
                <div className="w-px h-4 bg-border" />
              )}
            </div>
            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {phase}
                </span>
                <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5 font-medium">
                  {duration}
                </span>
              </div>
              <p className="font-semibold text-foreground text-sm mt-1">{title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
