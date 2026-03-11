import { ArrowRight, Sparkles, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gray-900 rounded-[64px] p-12 lg:p-24 relative overflow-hidden shadow-2xl"
        >
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-600/20 to-transparent -z-0"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500 rounded-full blur-[100px]"
          ></motion.div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-black mb-8 border border-emerald-500/20 tracking-widest uppercase"
            >
              <Sparkles className="w-4 h-4" />
              Sua carreira merece essa evolução
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1]"
            >
              Pare de perder tempo com <br />
              <span className="text-emerald-500">dietas manuais.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-300 mb-12 font-medium leading-relaxed"
            >
              Comece agora a usar inteligência artificial a seu favor e escale seus atendimentos com profissionalismo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-8 justify-center items-center"
            >

              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.dietia.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-6 rounded-[24px] font-black text-xl transition-all transform flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/40"
                >
                  Baixar na Play Store
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/dietal_oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-10 py-6 rounded-[24px] font-black text-xl transition-all transform flex items-center justify-center gap-3 border border-white/20"
                >
                  <Instagram className="w-6 h-6" />
                  Siga no Instagram
                </motion.a>
              </div>

            </motion.div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm font-bold uppercase tracking-widest">
              {['Sem cartão de crédito', 'Acesso instantâneo', '99.2% de satisfação'].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
