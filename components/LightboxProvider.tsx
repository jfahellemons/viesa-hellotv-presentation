'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LightboxContextType {
  openLightbox: (src: string, alt?: string) => void
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined)

export function useLightbox() {
  const context = useContext(LightboxContext)
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider')
  }
  return context
}

export default function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt?: string } | null>(null)

  const openLightbox = (src: string, alt?: string) => {
    setActiveImage({ src, alt })
  }

  const closeLightbox = () => {
    setActiveImage(null)
  }

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt || 'Geselecteerde afbeelding'}
                className="max-w-full max-h-full object-contain shadow-2xl rounded-sm select-none"
              />
              {activeImage.alt && (
                <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                  <span className="text-white/70 text-sm font-medium tracking-wide">
                    {activeImage.alt}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}
