import Image from 'next/image'
import { AlertTriangle, Clock, FileSpreadsheet, TrendingDown } from 'lucide-react'

const painPoints = [
    {
        icon: Clock,
        title: 'Tijdverlies',
        description: 'Verouderd systeem vereist meerdere handmatige stappen per taak.',
    },
    {
        icon: FileSpreadsheet,
        title: 'Spreadsheets',
        description: 'Dagelijkse werkzaamheden verlopen via losse, foutgevoelige spreadsheets.',
    },
    {
        icon: TrendingDown,
        title: 'Inefficiëntie',
        description: 'Verhoogde kans op fouten en onnodig tijdverlies per filiaal.',
    },
]

export default function ProbleemSlide() {
    return (
        <div className="flex flex-col h-full px-8 py-10 gap-8 max-w-5xl mx-auto w-full">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-destructive/80">
                    <AlertTriangle size={18} />
                    <span className="text-sm font-semibold uppercase tracking-widest">
                        Huidige situatie
                    </span>
                </div>
                <h2 className="text-4xl font-bold text-foreground tracking-tight text-balance">
                    Het Probleem
                </h2>
                <div className="w-10 h-0.5 rounded-full bg-viesa-teal mt-1" />
            </div>

            {/* Description block */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                <p className="text-foreground/80 text-base leading-relaxed">
                    Momenteel gaat er veel tijd verloren door het gebruik van een{' '}
                    <strong className="text-foreground font-semibold">verouderd systeem</strong>{' '}
                    binnen de filialen van HelloTV. Dagelijkse werkzaamheden vereisen meerdere
                    handmatige stappen en spreadsheets. Dit leidt tot inefficiëntie, verhoogde
                    kans op fouten en onnodig tijdverlies.
                </p>
            </div>

            {/* Pain points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {painPoints.map(({ icon: Icon, title, description }) => (
                    <div
                        key={title}
                        className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Icon size={20} />
                        </div>
                        <div>
                            <p className="font-semibold text-foreground text-sm">{title}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Images section */}
            <div className="flex gap-4 mt-auto h-150 w-full">
                <div className="relative h-full aspect-[9/16] rounded-xl overflow-hidden border border-border shadow-md bg-muted">
                    <Image
                        src="/problem-bookmarks.jpg"
                        alt="Handmatige bookmarks"
                        fill
                        className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                        <span className="text-[10px] text-white font-medium uppercase tracking-wider">Handmatige tools</span>
                    </div>
                </div>
                <div className="relative h-full flex-1 rounded-xl overflow-hidden border border-border shadow-md bg-muted">
                    <Image
                        src="/problem-dashboard.jpg"
                        alt="Verouderd dashboard"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                        <span className="text-[10px] text-white font-medium uppercase tracking-wider">Huidige systemen</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
