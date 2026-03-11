import { ClipboardList, Sparkles, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Informe o Objetivo',
      description: 'Insira os dados do aluno, metas de peso, restrições e preferências alimentares.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Sparkles,
      title: 'A IA Cria a Dieta',
      description: 'Nossa inteligência artificial processa milhares de combinações para gerar o plano perfeito em segundos.',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: LineChart,
      title: 'Acompanhe Resultados',
      description: 'Ajuste conforme a evolução do aluno e gere relatórios automáticos de progresso.',
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Como funciona o dietAI?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Sua consultoria automatizada em 3 passos simples.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-12"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-3xl ${step.color} shadow-lg flex items-center justify-center mb-8 relative z-10 transform group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10" />
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center font-black text-gray-900 text-lg">
                    {index + 1}
                  </div>
                </div>

                <h3 className="font-outfit text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-2xl shadow-sm border-emerald-100">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500"></span>
            <p className="text-lg font-bold text-emerald-800">
              Tudo isso em menos de 2 minutos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
