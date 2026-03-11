import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
    name: string
    handle: string
    image: string
}

interface TestimonialCardProps {
    author?: TestimonialAuthor
    text: string
    href?: string
}

export function TestimonialCard({ text }: TestimonialCardProps) {
    return (
        <div className={cn(
            "flex w-[400px] flex-col justify-center rounded-3xl border border-white/10 bg-white p-8 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 group min-h-[120px]"
        )}>
            <div className="flex flex-col gap-4">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                </div>
                <p className="text-gray-600 font-medium leading-relaxed italic">
                    "{text}"
                </p>
            </div>
        </div>
    )
}
