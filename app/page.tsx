'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react'

import PresentationLayout from '@/components/PresentationLayout'
import Sidebar, { SlideItem } from '@/components/Sidebar'
import SlideContent from '@/components/SlideContent'

import IntroSlide from '@/components/slides/IntroSlide'
import AboutSlide from '@/components/slides/AboutSlide'
import ProbleemSlide from '@/components/slides/ProbleemSlide'
import OplossingsSlide from '@/components/slides/OplossingsSlide'
import TechniekSlide from '@/components/slides/TechniekSlide'
import WinstSlide from '@/components/slides/WinstSlide'
import AfhankelijkhedenSlide from '@/components/slides/AfhankelijkhedenSlide'
import RoadmapSlide from '@/components/slides/RoadmapSlide'
import KostenBesparingSlide from '@/components/slides/KostenBesparingSlide'
import InvesteringSlide from '@/components/slides/InvesteringSlide'

const SLIDES: SlideItem[] = [
  { id: 1, label: 'Introductie', sublabel: 'VIESA Automations' },
  { id: 2, label: 'Over ons', sublabel: 'Het team' },
  { id: 3, label: 'Probleem', sublabel: 'Huidige situatie' },
  { id: 4, label: 'Oplossing', sublabel: 'Ons prototype' },
  { id: 5, label: 'Techniek', sublabel: 'Architectuur' },
  { id: 6, label: 'Winst & ROI', sublabel: 'Wat levert het op' },
  { id: 7, label: 'Afhankelijkheden', sublabel: 'Wat we nodig hebben' },
  { id: 8, label: 'Roadmap', sublabel: 'Planning per fase' },
  { id: 9, label: 'Kosten besparing', sublabel: 'Business Case & ROI' },
  { id: 10, label: 'Het Aanbod', sublabel: 'Investering & ROI' },
]

const SLIDE_COMPONENTS = [
  <IntroSlide key={0} />,
  <AboutSlide key={1} />,
  <ProbleemSlide key={2} />,
  <OplossingsSlide key={3} />,
  <TechniekSlide key={4} />,
  <WinstSlide key={5} />,
  <AfhankelijkhedenSlide key={6} />,
  <RoadmapSlide key={7} />,
  <KostenBesparingSlide key={8} />,
  <InvesteringSlide key={9} />,
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setCurrentSlide(index)
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToSlide(currentSlide + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToSlide(currentSlide - 1)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentSlide, goToSlide])

  const isFirst = currentSlide === 0
  const isLast = currentSlide === SLIDES.length - 1

  return (
    <PresentationLayout
      sidebar={
        <Sidebar
          slides={SLIDES}
          currentSlide={currentSlide}
          onSlideChange={goToSlide}
          mobileOpen={mobileMenuOpen}
          onMobileClose={() => setMobileMenuOpen(false)}
        />
      }
    >
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card shrink-0">
        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-background text-foreground hover:bg-muted transition-colors"
          aria-label="Open navigatie"
        >
          <Menu size={18} />
        </button>

        {/* Slide title */}
        <div className="hidden md:flex items-center gap-2 min-w-0">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Slide {currentSlide + 1} / {SLIDES.length}
          </span>
          <span className="text-muted-foreground/40 text-xs">—</span>
          <span className="text-sm font-semibold text-foreground truncate">
            {SLIDES[currentSlide].label}
          </span>
        </div>

        {/* Mobile: slide counter only */}
        <div className="md:hidden flex items-center gap-1">
          <span className="text-xs font-semibold text-muted-foreground">
            {currentSlide + 1} / {SLIDES.length}
          </span>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slide voortgang">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentSlide}
              aria-label={`Ga naar slide ${i + 1}`}
              onClick={() => goToSlide(i)}
              className={[
                'rounded-full transition-all duration-200',
                i === currentSlide
                  ? 'w-5 h-2 bg-primary'
                  : 'w-2 h-2 bg-border hover:bg-primary/40',
              ].join(' ')}
            />
          ))}
        </div>
      </header>

      {/* Slide area */}
      <SlideContent slideKey={currentSlide}>
        {SLIDE_COMPONENTS[currentSlide]}
      </SlideContent>

      {/* Navigation footer */}
      <footer className="flex items-center justify-between px-6 py-4 border-t border-border bg-card shrink-0">
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={isFirst}
          className={[
            'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all',
            isFirst
              ? 'text-muted-foreground/40 cursor-not-allowed'
              : 'text-foreground bg-background border border-border hover:bg-muted hover:shadow-sm',
          ].join(' ')}
          aria-label="Vorige slide"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Vorige</span>
        </button>

        {/* Slide label */}
        <p className="text-sm text-muted-foreground font-medium hidden sm:block">
          {SLIDES[currentSlide].sublabel}
        </p>

        <button
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={isLast}
          className={[
            'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all',
            isLast
              ? 'text-muted-foreground/40 cursor-not-allowed'
              : 'bg-primary text-primary-foreground hover:opacity-90 shadow-sm',
          ].join(' ')}
          aria-label="Volgende slide"
        >
          <span className="hidden sm:inline">Volgende</span>
          <ChevronRight size={16} />
        </button>
      </footer>
    </PresentationLayout>
  )
}
