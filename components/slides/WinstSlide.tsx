import { TrendingUp, Users, Zap, Target } from 'lucide-react'

const metrics = [
  {
    icon: Users,
    value: '~30 FTE',
    unit: 'per jaar',
    label: 'Tijdsbesparing',
    description: 'Significante reductie in handmatige arbeidsinzet op jaarbasis.',
    highlight: true,
  },
  {
    icon: Zap,
    value: 'Sneller',
    unit: 'verwerking',
    label: 'Orderverwerking',
    description: 'Kortere doorlooptijd per bestelling dankzij automatisering.',
    highlight: false,
  },
  {
    icon: Target,
    value: 'Meer',
    unit: 'focus',
    label: 'Commerciële activiteiten',
    description: 'Medewerkers richten zich op klantwaarde in plaats van administratie.',
    highlight: false,
  },
]

export default function WinstSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <TrendingUp size={18} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Wat levert het op
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
          Winst &amp; ROI
        </h2>
        <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
      </div>

      {/* Summary */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
        <p className="text-foreground/80 text-base leading-relaxed">
          De implementatie levert{' '}
          <strong className="text-foreground font-semibold">significante winst</strong>{' '}
          op in zowel tijd als commerciële slagkracht. De terugverdientijd is
          aantoonbaar kort door directe FTE-reductie.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {metrics.map(({ icon: Icon, value, unit, label, description, highlight }) => (
          <div
            key={label}
            className={[
              'rounded-xl border p-5 flex flex-col gap-3 shadow-sm transition-shadow hover:shadow-md',
              highlight
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card border-border',
            ].join(' ')}
          >
            <div
              className={[
                'flex h-10 w-10 items-center justify-center rounded-lg',
                highlight
                  ? 'bg-white/20 text-primary-foreground'
                  : 'bg-primary/10 text-primary',
              ].join(' ')}
            >
              <Icon size={20} />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span
                  className={[
                    'text-2xl font-bold leading-none',
                    highlight ? 'text-primary-foreground' : 'text-foreground',
                  ].join(' ')}
                >
                  {value}
                </span>
                <span
                  className={[
                    'text-xs font-medium',
                    highlight ? 'text-primary-foreground/70' : 'text-muted-foreground',
                  ].join(' ')}
                >
                  {unit}
                </span>
              </div>
              <p
                className={[
                  'font-semibold text-sm mt-1',
                  highlight ? 'text-primary-foreground' : 'text-foreground',
                ].join(' ')}
              >
                {label}
              </p>
              <p
                className={[
                  'text-xs leading-relaxed mt-1',
                  highlight ? 'text-primary-foreground/70' : 'text-muted-foreground',
                ].join(' ')}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
