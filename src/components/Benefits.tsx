import { Clock, TrendingUp, Target, Heart, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Economize horas por semana',
      description: 'Livre-se do trabalho manual e use seu tempo para o que realmente importa: o atendimento humano.'
    },
    {
      icon: TrendingUp,
      title: 'Atenda mais alunos com menos esforço',
      description: 'Escale sua consultoria sem precisar contratar uma equipe enorme. A IA faz o trabalho pesado.'
    },
    {
      icon: Target,
      title: 'Dietas mais precisas',
      description: 'Algoritmos avançados garantem que cada caloria e macro esteja exatamente onde deveria estar.'
    },
    {
      icon: Heart,
      title: 'Menos erro humano',
      description: 'Elimine falhas de cálculo e esquecimentos. Segurança total para você e seu aluno.'
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600 blur-[120px] -z-0"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold mb-6">
            Ganhos Reais para sua Carreira
          </h2>
          <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto font-medium">
            Não é sobre tecnologia, é sobre a liberdade e os resultados que ela proporciona.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-outfit text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-emerald-100/60 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 p-12 rounded-[48px] bg-gradient-to-br from-emerald-600 to-green-700 shadow-2xl shadow-emerald-900/40 text-center"
        >
          <h3 className="font-outfit text-3xl font-extrabold mb-6">
            Pronto para transformar sua rotina?
          </h3>
          <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto font-medium">
            Junte-se a milhares de nutricionistas e personal trainers que já automatizaram seus processos com o dietAI.
          </p>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
             className="flex flex-col gap-8 justify-center items-center"
           >
             <motion.a
               href="https://www.instagram.com/dietal_oficial/"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="w-full sm:w-auto bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white px-10 py-6 rounded-[24px] font-black text-xl transition-all transform flex items-center justify-center gap-3 shadow-xl shadow-purple-900/40"
             >
               <Instagram className="w-6 h-6" />
               Siga no Instagram para dicas
             </motion.a>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
