import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VideoShowcase() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold mb-6">
                        <Sparkles className="w-4 h-4" />
                        DEMONSTRAÇÃO REAL
                    </div>
                    <h2 className="font-outfit text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 font-outfit">
                        Veja o <span className="text-emerald-600">dietAI</span> em ação
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        Descubra como transformar horas de trabalho manual em minutos de alta performance.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    {/* Video Container Frame */}
                    <div className="relative mx-auto max-w-5xl aspect-video rounded-[32px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-4 border-white/50 bg-gray-900 group-hover:shadow-emerald-200/50 transition-all duration-700">
                        <video
                            className="w-full h-full object-contain bg-black"
                            poster="/image.png"
                            controls
                            playsInline
                        >
                            <source src="/dietAI.mp4" type="video/mp4" />
                            Seu navegador não suporta o elemento de vídeo.
                        </video>

                        {/* Floating Info Badges - Only visible on desktop/hover */}
                        <div className="hidden lg:block absolute bottom-8 left-8 p-6 glass rounded-2xl border border-white/20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 pointer-events-none">
                            <p className="text-white font-bold text-lg mb-1">Passo a Passo</p>
                            <p className="text-emerald-100/80 text-sm font-medium">Veja como criar sua primeira dieta</p>
                        </div>

                        <div className="hidden lg:block absolute bottom-8 right-8 p-6 glass rounded-2xl border border-white/20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 pointer-events-none">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-emerald-500 bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">
                                            User
                                        </div>
                                    ))}
                                </div>
                                <p className="text-white text-sm font-bold">Assistindo agora</p>
                            </div>
                        </div>
                    </div>

                    {/* Glowing background behind image */}
                    <div className="absolute -inset-4 bg-emerald-500/10 blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </motion.div>
            </div>
        </section>
    );
}
