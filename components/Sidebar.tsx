'use client'

import Image from 'next/image'
import { X } from 'lucide-react'

export interface SlideItem {
  id: number
  label: string
  sublabel: string
}

interface SidebarProps {
  slides: SlideItem[]
  currentSlide: number
  onSlideChange: (index: number) => void
  mobileOpen: boolean
  onMobileClose: () => void
}

export default function Sidebar({
  slides,
  currentSlide,
  onSlideChange,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={[
          'fixed inset-y-0 left-0 z-30 flex w-72 flex-col bg-viesa-teal-dark transition-transform duration-300 ease-in-out',
          'md:relative md:translate-x-0 md:z-auto',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
        aria-label="Presentatie navigatie"
      >
        {/* Logo area */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <Image
              src="/viesa-logo.png"
              alt="VIESA Automations logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <p className="text-sidebar-foreground font-semibold text-sm leading-tight">
                VIESA
              </p>
              <p className="text-sidebar-foreground/90 text-xs leading-tight">
                Automations
              </p>
            </div>
          </div>
          <button
            onClick={onMobileClose}
            className="md:hidden text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors p-1 rounded"
            aria-label="Sluit navigatie"
          >
            <X size={18} />
          </button>
        </div>

        {/* Slide list */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <p className="px-3 pb-3 text-sidebar-foreground/40 text-[10px] font-semibold uppercase tracking-widest">
            Presentatie
          </p>
          <ul className="flex flex-col gap-1">
            {slides.map((slide, index) => {
              const isActive = currentSlide === index
              return (
                <li key={slide.id}>
                  <button
                    onClick={() => {
                      onSlideChange(index)
                      onMobileClose()
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'w-full flex items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200',
                      isActive
                        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground',
                    ].join(' ')}
                  >
                    {/* Slide number badge */}
                    <span
                      className={[
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold transition-colors',
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-sidebar-border text-sidebar-foreground/90',
                      ].join(' ')}
                    >
                      {slide.id}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-tight truncate">
                        {slide.label}
                      </p>
                      <p
                        className={[
                          'text-xs leading-tight truncate mt-0.5',
                          isActive
                            ? 'text-sidebar-accent-foreground/80'
                            : 'text-sidebar-foreground/70',
                        ].join(' ')}
                      >
                        {slide.sublabel}
                      </p>
                    </div>
                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-primary-foreground/80" />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-sidebar-border">
          <p className="text-sidebar-foreground/30 text-xs">
            &copy; {new Date().getFullYear()} VIESA Automations
          </p>
        </div>
      </aside>
    </>
  )
}
