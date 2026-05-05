import { Handshake, Clock, Euro, Wrench, Shield } from 'lucide-react'

export default function AanbodSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <Handshake size={18} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Investering
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
          Ons Aanbod
        </h2>
        <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
      </div>

      {/* Main pricing cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Project card */}
        <div className="bg-primary rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-primary-foreground">
            <Wrench size={20} />
          </div>
          <div>
            <p className="text-primary-foreground/70 text-xs font-semibold uppercase tracking-widest">
              Project
            </p>
            <p className="text-primary-foreground font-bold text-2xl mt-1">
              €55.500
            </p>
            <p className="text-primary-foreground/60 text-xs mt-0.5">excl. btw</p>
          </div>
          <div className="border-t border-white/20 pt-3 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <Clock size={14} />
              <span>500 uur totale inspanning</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <Euro size={14} />
              <span>€111 per uur</span>
            </div>
          </div>
        </div>

        {/* Maintenance card */}
        <div className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Shield size={20} />
          </div>
          <div>
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
              Onderhoud
            </p>
            <p className="text-foreground font-bold text-2xl mt-1">
              €10.000
            </p>
            <p className="text-muted-foreground text-xs mt-0.5">per maand, excl. btw</p>
          </div>
          <div className="border-t border-border pt-3 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Shield size={14} />
              <span>Servicecontract</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Clock size={14} />
              <span>~0,5 FTE inzet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary note */}
      <div className="bg-card rounded-xl border border-border p-5 shadow-sm flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
          <Handshake size={16} />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Na implementatie verzorgen wij het onderhoud via een{' '}
          <strong className="text-foreground">servicecontract</strong>. Zo bent u
          verzekerd van continue beschikbaarheid, updates en snelle support bij
          eventuele problemen.
        </p>
      </div>
    </div>
  )
}
