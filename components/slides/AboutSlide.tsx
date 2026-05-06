import { Users, Code, ShoppingCart, CheckCircle2, Award, Lightbulb, TrendingUp, Cpu } from 'lucide-react'

const people = [
  {
    name: 'Joep Hellemons',
    role: 'Technische drijvende kracht',
    cards: [
      {
        title: 'Ervaring & Projecten',
        icon: Award,
        points: [
          'Ruim 10 jaar ervaring als developer',
          'Grootschalige, complexe projecten geleid voor Achmea, Wehkamp, Nationale Politie en Coop supermarkten',
        ],
      },
      {
        title: 'Expertise & Innovatie',
        icon: Cpu,
        points: [
          'Expertise in web en app development',
          'Up to date met de laatste toepassingen in Automatisering zoals AI',
        ],
      },
    ],
  },
  {
    name: 'Tom van Biene',
    role: 'Commerciële Expert',
    cards: [
      {
        title: 'HelloTV Track Record',
        icon: ShoppingCart,
        points: [
          'Bekend gezicht bij HelloTV',
          'Jarenlang een van de absolute topverkopers van filiaal Breda',
        ],
      },
      {
        title: 'Filosofie & Visie',
        icon: Lightbulb,
        points: [
          'Filosofie om altijd goed te zijn voor de mens - heeft filiaal Breda in alle opzichten laten groeien',
          'Begrijpt commerciële behoeften van de vloer als geen ander en vertaalt dit naar succesvolle technologische oplossingen',
        ],
      },
    ],
  },
]

export default function AboutSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-12 gap-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary/80">
          <Users size={18} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Over ons
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
          Wie zijn wij?
        </h2>
        <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {people.map((person) => (
          <div key={person.name} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 border-l-4 border-viesa-teal pl-4">
              <h3 className="text-3xl font-bold text-foreground">{person.name}</h3>
              <p className="text-viesa-teal font-semibold text-lg">{person.role}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {person.cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <card.icon size={24} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-base text-foreground">{card.title}</h4>
                    <ul className="flex flex-col gap-2">
                      {card.points.map((point, j) => (
                        <li key={j} className="flex gap-2 items-start">
                          <CheckCircle2 className="text-viesa-teal shrink-0 mt-1" size={16} />
                          <span className="text-foreground/80 text-sm leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
