import { ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'O dietAI substitui o trabalho do nutricionista?',
      answer: 'Não. O dietAI é uma ferramenta de auxílio. Ele automatiza a parte burocrática e técnica (cálculos e montagem), permitindo que você foque na estratégia clínica e no atendimento ao paciente.'
    },
    {
      question: 'Eu posso editar e personalizar as dietas geradas?',
      answer: 'Com certeza! A IA gera um "esqueleto" ultra-preciso, mas você tem total liberdade para trocar alimentos, ajustar macros ou alterar horários conforme sua conduta.'
    },
    {
      question: 'O software serve para quem está começando agora?',
      answer: 'Sim! Ele é intuitivo o suficiente para quem está no início da carreira e robusto o bastante para profissionais veteranos que precisam de escala.'
    },
    {
      question: 'A inteligência artificial segue diretrizes nutricionais?',
      answer: 'Sim. Nosso algoritmo foi treinado com base em protocolos reconhecidos (como os da OMS e diretrizes esportivas internacionais) para garantir segurança e saúde.'
    },
    {
      question: 'Funciona para diferentes objetivos (ex: hipertrofia, emagrecimento)?',
      answer: 'Sim. Você define o objetivo do aluno (cutting, bulking, manutenção, performance) e a IA adapta toda a densidade calórica e distribuição de macros automaticamente.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Tudo o que você precisa saber para começar com confiança.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] border border-gray-100 overflow-hidden transition-all duration-300 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-gray-900 pr-8 group-hover:text-emerald-700 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed font-medium border-t border-gray-50 pt-6">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
