import Image from 'next/image'
import { 
  CheckCircle, 
  LayoutDashboard, 
  Users, 
  FileText, 
  TrendingUp, 
  Package, 
  MessageSquare, 
  Play 
} from 'lucide-react'

const features = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    description: "Real-time analytics en KPI's",
  },
  {
    icon: Users,
    label: 'CRM',
    description: 'Klantenbeheer',
  },
  {
    icon: FileText,
    label: 'Offertes',
    description: 'Offerte management met accept/reject workflow',
  },
  {
    icon: TrendingUp,
    label: 'Sales Tracker',
    description: 'Live verkoop performance tracking',
  },
  {
    icon: Package,
    label: 'Voorraad',
    description: 'Automatisch voorraadsbeheer met alerts',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    description: 'Notificatie integratie',
  },
]

export default function OplossingsSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-5xl mx-auto w-full">
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

      {/* Feature cards & Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-6">
          {/* Description */}
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
            <p className="text-foreground/80 text-base leading-relaxed">
              Wij hebben een{' '}
              <strong className="text-foreground font-semibold">prototype ontwikkeld</strong>{' '}
              voor een efficiënter proces. Het systeem biedt een modern dashboard met alle
              essentiële functionaliteiten voor de dagelijkse operatie.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-3">
            {features.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="bg-card rounded-xl border border-border p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{label}</p>
                  <p className="text-muted-foreground text-[11px] leading-relaxed mt-0.5">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview & Demo Link */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl bg-muted group">
            <Image
              src="/dashboard.png"
              alt="Prototype Dashboard"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

          {/* Live Demo Link */}
          <a
            href="https://hello-tv.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 py-6 shadow-sm hover:bg-muted/50 hover:border-primary/50 transition-all group/demo cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover/demo:bg-primary group-hover/demo:text-primary-foreground transition-colors">
              <Play size={18} />
            </div>
            <p className="font-semibold text-foreground text-xs">Live Demo</p>
            <p className="text-muted-foreground text-[10px] text-center max-w-[200px]">
              Klik om de interactieve demonstratie te starten tijdens de presentatie.
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
