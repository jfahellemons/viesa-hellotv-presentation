import { Link2, FileCode, Database, CheckSquare } from 'lucide-react'

const dependencies = [
  {
    icon: Link2,
    label: 'Systeemkoppelingen',
    description:
      'Toegang tot en medewerking bij het koppelen van bestaande systemen binnen HelloTV.',
    required: true,
  },
  {
    icon: FileCode,
    label: 'API-documentatie',
    description:
      'Beschikbaarheid van actuele API-documentatie voor de huidige systeeminterfaces.',
    required: true,
  },
  {
    icon: Database,
    label: 'Architectuurinzage',
    description:
      'Optioneel: inzage in de huidige technische architectuur versnelt de integratie.',
    required: false,
  },
]

export default function AfhankelijkhedenSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <CheckSquare size={18} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Wat we nodig hebben
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
          Afhankelijkheden
        </h2>
        <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
      </div>

      {/* Description */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
        <p className="text-foreground/80 text-base leading-relaxed">
          Voor een succesvolle implementatie zijn onderstaande randvoorwaarden
          noodzakelijk. Wij werken graag samen met het HelloTV-team om deze
          toegang tijdig te regelen.
        </p>
      </div>

      {/* Dependencies list */}
      <div className="flex flex-col gap-3">
        {dependencies.map(({ icon: Icon, label, description, required }) => (
          <div
            key={label}
            className="bg-card rounded-xl border border-border p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
              <Icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-semibold text-foreground text-sm">{label}</p>
                <span
                  className={[
                    'rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                    required
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground',
                  ].join(' ')}
                >
                  {required ? 'Vereist' : 'Optioneel'}
                </span>
              </div>
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
