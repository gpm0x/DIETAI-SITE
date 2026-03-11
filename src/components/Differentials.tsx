import { Zap, Users, BarChart3, Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Differentials() {
  const differentials = [
    {
      icon: Database,
      title: 'Menos Planilhas',
      description: 'Diga adeus ao preenchimento manual de tabelas complexas no Excel.'
    },
    {
      icon: Zap,
      title: 'Mais Automação',
      description: 'Gere dietas completas com base em protocolos científicos em segundos.'
    },
    {
      icon: Users,
      title: 'Escala seu Trabalho',
      description: 'Atenda 5x mais alunos com o mesmo esforço e mantendo a qualidade.'
    },
    {
      icon: BarChart3,
      title: 'IA que Aprende',
      description: 'O sistema entende os feedbacks do aluno e sugere ajustes automáticos.'
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 font-outfit">
            A evolução do método tradicional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Por que profissionais de elite estão migrando para o dietAI?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Comparison Side */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 0.6, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[32px] bg-red-50 border border-red-100"
            >
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">✕</span>
                Método Tradicional
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-red-800 font-medium">
                  Horas montando uma única planilha
                </li>
                <li className="flex items-center gap-3 text-red-800 font-medium">
                  Cálculos manuais propensos a erros
                </li>
                <li className="flex items-center gap-3 text-red-800 font-medium">
                  Dificuldade em escalar atendimentos
                </li>
                <li className="flex items-center gap-3 text-red-800 font-medium">
                  Acompanhamento lento e burocrático
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[32px] bg-emerald-50 border-2 border-emerald-200 shadow-xl shadow-emerald-100/50"
            >
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3 font-outfit">
                <span className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">✓</span>
                Com o dietAI
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-emerald-900 font-bold">
                  Dietas profissionais em menos de 2 min
                </li>
                <li className="flex items-center gap-3 text-emerald-900 font-bold">
                  IA with precisão de 99.2% nos cálculos
                </li>
                <li className="flex items-center gap-3 text-emerald-900 font-bold">
                  Painel de gestão para centenas de alunos
                </li>
                <li className="flex items-center gap-3 text-emerald-900 font-bold">
                  Ajustes inteligentes em tempo real
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Grid Side */}
          <div className="grid sm:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-emerald-200 hover:bg-white transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-outfit text-xl font-extrabold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h4>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
