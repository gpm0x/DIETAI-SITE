import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    text: string
    href?: string
  }>
  className?: string
}

const testimonialsData = [
  {
    text: "Olá, boa noite! Minha experiência com o app foi muito boa. Ele é bem claro na proposta de ajudar pessoas em dieta, oferecendo suporte para quem quer perder peso, ganhar peso ou manter o peso ideal. Gostei bastante das funções de definir metas, registrar o que consumimos no dia a dia e pesquisar alimentos, pois isso ajuda muito no controle da alimentação e traz mais consciência sobre as escolhas.",
  },
  {
    text: "Baixei aqui. Minha versão sobre o aplicativo: muito interativo, eu gostei das perguntas que o app ele fez antes de começar. E principalmente gostei dessa inteligência artificial. Ela gerou um plano de dieta com tudo que eu tenho em casa é que cabe no meu orçamento.",
  },
  {
    text: "Muito top, parabéns aos desenvolvedores.",
  },
  {
    text: "Gostei da ideia do app, bem clean e simples de entender.",
  },
  {
    text: "Achei muito daora, nunca vi uma IA que te dá uma dieta personalizada. O layout do app é muito bonito.",
  },
  {
    text: "Bom assim seu aplicativo é show para pessoas que não tem condições de pagar ou não querem pagar um personal.",
  },
];

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-white text-gray-900",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="font-outfit max-w-[720px] text-4xl font-extrabold leading-tight sm:text-5xl sm:leading-tight text-gray-900">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:30s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`set1-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`set2-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-white sm:block" />
        </div>
      </div>
    </section>
  )
}

export default function Testimonials() {
  return (
    <TestimonialsSection
      title="Histórias de Sucesso Reais"
      description="Profissionais que escalaram suas carreiras e transformaram a vida de seus alunos com o dietAI."
      testimonials={testimonialsData}
    />
  )
}
