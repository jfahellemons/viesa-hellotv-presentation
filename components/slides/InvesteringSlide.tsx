'use client'

import { Handshake, Euro, Calculator, CheckCircle2, TrendingUp, Wallet, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function InvesteringSlide() {
  return (
    <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <Handshake size={18} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Het Aanbod
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
          De Investering in de Toekomst
        </h2>
        <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-2">
        {/* Investment Side */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="text-viesa-teal" size={24} />
            Investering (Kosten)
          </h3>
          
          <div className="flex flex-col gap-4">
            {/* Setup */}
            <div className="bg-card rounded-xl border border-border p-5 flex justify-between items-center shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-foreground">Setup & Implementatie</span>
                <span className="text-xs text-muted-foreground italic">Eenmalig project</span>
              </div>
              <span className="text-xl font-black text-primary">€ 69.500,-</span>
            </div>

            {/* Monthly */}
            <div className="bg-card rounded-xl border border-border p-5 flex justify-between items-center shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-foreground">Licentie, Hosting & Support</span>
                <span className="text-xs text-muted-foreground italic">€ 9.500,- per maand</span>
              </div>
              <span className="text-xl font-black text-primary">€ 114.000,- <span className="text-xs font-normal text-muted-foreground">/jaar</span></span>
            </div>

            {/* Bonus */}
            <div className="bg-viesa-teal/5 rounded-xl border border-viesa-teal/20 p-5 flex justify-between items-center shadow-sm group hover:bg-viesa-teal/10 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-viesa-teal">Strategische Innovatiebonus</span>
                  <Sparkles size={14} className="text-viesa-teal animate-pulse" />
                </div>
                <span className="text-xs text-muted-foreground italic">Eenmalige incentive voor partnership</span>
              </div>
              <span className="text-xl font-black text-viesa-teal">€ 11.000,-</span>
            </div>

            {/* Total Year 1 */}
            <div className="bg-primary rounded-xl p-6 flex justify-between items-center shadow-lg mt-2">
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold text-primary-foreground">Totale investering jaar 1</span>
                <span className="text-xs text-primary-foreground/60 italic">Alles inclusief, excl. BTW</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-black text-primary-foreground">ca. € 194.500,-</span>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Side */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="text-viesa-teal" size={24} />
            Kostenbesparing (ROI)
          </h3>

          <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
            <div className="flex flex-col gap-3">
              {[
                { label: 'Minimum (10 FTE)', value: '€ 550.000,-', highlight: false },
                { label: 'Bij 20 FTE', value: '€ 1.100.000,-', highlight: false },
                { label: 'Target (30 FTE)', value: '€ 1.650.000,-', highlight: true },
                { label: 'Bij 40 FTE', value: '€ 2.200.000,-', highlight: false },
                { label: 'Maximaal (50 FTE)', value: '€ 2.750.000,-', highlight: false },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`flex justify-between items-center p-3 rounded-lg transition-all ${
                    item.highlight 
                      ? 'bg-viesa-teal text-white shadow-md scale-105' 
                      : 'bg-card/50 border border-border/50'
                  }`}
                >
                  <span className={`text-sm font-bold ${item.highlight ? 'text-white' : 'text-foreground'}`}>
                    {item.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className={`font-black ${item.highlight ? 'text-white text-lg' : 'text-primary'}`}>
                      {item.value}
                    </span>
                    {item.highlight && <CheckCircle2 size={18} />}
                  </div>
                </div>
              ))}
            </div>

            {/* Payback note */}
            <div className="mt-6 p-4 bg-white/50 rounded-xl border border-dashed border-viesa-teal/30 text-center">
              <p className="text-sm text-muted-foreground">
                Terugverdientijd van de jaarlijkse investering: <strong className="text-viesa-teal">minder dan 3 maanden</strong> in het Target scenario.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto bg-card rounded-xl border border-border p-6 shadow-sm flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <Handshake size={20} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold text-foreground">Laten we samen bouwen aan de toekomst van HelloTV.</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            VIESA Automations staat klaar om deze transformatie te realiseren. Onze focus ligt op betrouwbaarheid, schaalbaarheid en directe impact op de winstgevendheid van uw organisatie.
          </p>
        </div>
      </div>
    </div>
  )
}
