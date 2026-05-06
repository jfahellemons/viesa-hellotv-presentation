'use client'

import { useState } from 'react'
import { Handshake, TrendingUp, Wallet, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const offers = [
  {
    fte: '10',
    label: '10 FTE (Minimaal scenario)',
    saving: '€ 550.000,-',
    impact: 'De veilige basis: digitalisering van data-entry en uitsluiten van dubbel werk.',
  },
  {
    fte: '20',
    label: '20 FTE',
    saving: '€ 1.100.000,-',
    impact: 'Geoptimaliseerde logistiek en geautomatiseerde ritplanning.',
  },
  {
    fte: '30',
    label: '30 FTE (Verwacht Target)',
    saving: '€ 1.650.000,-',
    impact: 'Volledige ketenintegratie: een compleet schaalbare back-office.',
  },
  {
    fte: '40',
    label: '40 FTE',
    saving: '€ 2.200.000,-',
    impact: 'Maximale efficiëntie over alle filialen, incl. AI-marketing.',
  },
  {
    fte: '50',
    label: '50 FTE',
    saving: '€ 2.750.000,-',
    impact: 'Toekomstbestendig framework bij uitbreiding naar >25 filialen.',
  },
]

export default function KostenBesparingSlide() {
  const [index, setIndex] = useState(2) // Default to 30 FTE
  const currentOffer = offers[index]

  return (
    <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-5xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-primary">
          <TrendingUp size={18} />
          <span className="text-sm font-semibold uppercase tracking-widest">
            Business Case & ROI
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
          Impact op de Organisatie
        </h2>
        <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
      </div>

      <div className="flex flex-col gap-10 mt-2">
        {/* Slider Section */}
        <div className="flex flex-col gap-6 bg-card rounded-2xl border border-border p-8 shadow-sm">
          <div className="flex justify-between items-end">
            <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
              Besparing in Tijd / FTE
            </label>
            <motion.span 
              key={currentOffer.fte}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-black text-viesa-teal tabular-nums"
            >
              {currentOffer.label.split(' ')[0]} <span className="text-lg font-bold text-muted-foreground">FTE</span>
            </motion.span>
          </div>
          
          <div className="relative pt-4 pb-4">
            <input
              type="range"
              min="0"
              max={offers.length - 1}
              step="1"
              value={index}
              onChange={(e) => setIndex(parseInt(e.target.value))}
              className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-viesa-teal focus:outline-none"
            />
            <div className="flex justify-between mt-6">
              {offers.map((offer, i) => (
                <button
                  key={offer.fte}
                  onClick={() => setIndex(i)}
                  className="flex flex-col items-center gap-2 group outline-none"
                >
                  <motion.div 
                    animate={{ 
                      scale: index === i ? 1.4 : 1,
                      backgroundColor: index === i ? 'var(--color-viesa-teal)' : 'rgba(0,0,0,0.1)'
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${index === i ? '' : 'group-hover:bg-viesa-teal/30'}`} 
                  />
                  <span className={`text-xs font-bold transition-colors ${index === i ? 'text-viesa-teal' : 'text-muted-foreground'}`}>
                    {offer.fte}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Display Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {/* Savings Card */}
            <motion.div 
              key={`saving-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-primary rounded-2xl p-8 flex flex-col gap-4 shadow-xl relative overflow-hidden group min-h-[180px]"
            >
              <div className="absolute -top-4 -right-4 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Wallet size={160} />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-primary-foreground">
                <Wallet size={24} />
              </div>
              <div>
                <p className="text-primary-foreground/70 text-xs font-semibold uppercase tracking-widest">
                  Jaarlijkse Kostenbesparing
                </p>
                <p className="text-primary-foreground font-black text-4xl mt-3 tracking-tight">
                  {currentOffer.saving}
                </p>
              </div>
            </motion.div>

            {/* Impact Card */}
            <motion.div 
              key={`impact-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-4 shadow-sm relative overflow-hidden group min-h-[180px]"
            >
              <div className="absolute -top-4 -right-4 p-4 opacity-5 group-hover:scale-110 transition-transform">
                <Zap size={160} />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
                  Impact op de Organisatie
                </p>
                <p className="text-foreground font-bold text-xl mt-4 leading-snug">
                  {currentOffer.impact}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer info */}
        <div className="bg-secondary/30 rounded-xl border border-border/50 p-6 flex items-center gap-6">
          <div className="h-12 w-12 rounded-full bg-viesa-teal/10 flex items-center justify-center text-viesa-teal shrink-0">
            <Handshake size={24} />
          </div>
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            "Wij bouwen niet alleen een systeem, we realiseren een schaalbare basis voor de toekomstige groei van HelloTV."
          </p>
        </div>
      </div>
    </div>
  )
}


