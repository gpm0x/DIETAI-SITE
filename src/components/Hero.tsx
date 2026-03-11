import { ArrowRight, CheckCircle2, Star, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-green-100/40 rounded-full blur-[100px]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Nova era da Nutrição com IA
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-outfit text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Crie Dietas <br />
              <span className="text-emerald-600">Profissionais</span> <br />
              em Segundos.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-medium">
              A ferramenta definitiva para nutricionistas e personal trainers escalarem seus atendimentos com inteligência artificial de alta precisão.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="https://www.instagram.com/dietal_oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-emerald-200 flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <Instagram className="w-5 h-5" />
                Siga-nos no Instagram
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
              <a href="https://play.google.com/store/apps/details?id=com.dietia.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="transition-all hover:opacity-80 active:scale-95">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Disponível no Google Play"
                  className="h-10 w-auto"
                />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Teste sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span>Cancele quando quiser</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                  />
                ))}
                <div className="w-12 h-12 rounded-full bg-emerald-600 border-4 border-white flex items-center justify-center text-white font-bold text-xs">
                  +12k
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-bold text-gray-900 ml-1">4.8/5</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Avaliado por +12.000 profissionais reais
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:block"
          >
            <div className="relative z-10 scale-110 lg:scale-110 group">
              {/* Premium Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src="/hero-dashboard.jpg"
                  alt="dietAI App Interface"
                  className="w-full h-auto drop-shadow-[0_30px_60px_rgba(16,185,129,0.25)] rounded-[32px] border border-white/20"
                />
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-8 glass p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold">
                    IA
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium italic">Gerando dieta...</p>
                    <p className="text-sm font-bold text-gray-900">Em 3 segundos</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-4 glass p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Precisão</p>
                    <p className="text-sm font-bold text-gray-900">99.2% Assertiva</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full -z-10 blur-3xl opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
