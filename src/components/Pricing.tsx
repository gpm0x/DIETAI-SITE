import { Check, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Grátis',
      description: 'Ideal para quem está começando agora.',
      highlight: false,
      features: ['Criação de até 5 dietas/mês', 'Acesso à IA básica', 'Suporte via Chatbot', 'Exportação em PDF simples'],
      cta: 'Começar Agora',
      badge: ''
    },
    {
      name: 'Pro Evolution',
      price: '59,90',
      description: 'Para profissionais que buscam escala e precisão.',
      highlight: true,
      features: ['Dietas Ilimitadas', 'IA de Alta Precisão (99.2%)', 'Ajustes Inteligentes Automáticos', 'Gestão de Alunos (até 50)', 'Suporte Prioritário'],
      cta: 'Assinar Plano Pro',
      badge: 'MAIS ESCOLHIDO'
    },
    {
      name: 'Partnership',
      price: '145,90',
      description: 'Para clínicas e grandes academias.',
      highlight: false,
      features: ['Gestão Ilimitada de Alunos', 'Múltiplos Perfis Profissionais', 'API de Integração', 'Relatórios Customizados', 'Whitelabel (Em breve)'],
      cta: 'Falar com Consultor',
      badge: 'MELHOR CUSTO-BENEFÍCIO'
    }
  ];

  return (
    <section id="precos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 font-outfit">
            Plano ideal para o seu momento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Transparência total. Cancele quando quiser, sem letras miúdas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[40px] p-10 flex flex-col h-full transition-all duration-300 ${plan.highlight
                  ? 'bg-gray-900 text-white shadow-2xl shadow-emerald-200 ring-4 ring-emerald-600 relative lg:scale-105 z-10'
                  : 'bg-gray-50 border border-gray-100'
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`font-outfit text-2xl font-bold mb-2 ${plan.highlight ? 'text-emerald-400' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-medium ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold opacity-60">R$</span>
                  <span className="text-5xl font-black">{plan.price}</span>
                  {plan.price !== 'Grátis' && <span className="text-lg font-bold opacity-60">/mês</span>}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all mb-10 ${plan.highlight
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/50'
                    : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-emerald-600 hover:text-emerald-600'
                  }`}
              >
                {plan.cta}
              </motion.button>

              <div className="space-y-4 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span className={`text-sm font-bold ${plan.highlight ? 'text-gray-300' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-12 border-t border-gray-100 pt-12"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <span className="font-bold text-gray-600">Garantia total de 7 dias</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-emerald-600" />
            <span className="font-bold text-gray-600">Cancelamento instantâneo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
