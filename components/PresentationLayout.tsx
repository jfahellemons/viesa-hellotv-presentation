'use client'

import { ReactNode } from 'react'

interface PresentationLayoutProps {
  sidebar: ReactNode
  children: ReactNode
}

export default function PresentationLayout({
  sidebar,
  children,
}: PresentationLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {sidebar}
      <main className="flex-1 overflow-hidden flex flex-col min-w-0">
        {children}
      </main>
    </div>
  )
}
