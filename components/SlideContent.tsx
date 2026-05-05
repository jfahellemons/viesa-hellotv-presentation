'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideContentProps {
  children: ReactNode
  slideKey: number
}

export default function SlideContent({ children, slideKey }: SlideContentProps) {
  return (
    <div className="relative flex-1 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slideKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="absolute inset-0 overflow-y-auto"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
