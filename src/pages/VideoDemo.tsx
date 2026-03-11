import { ArrowLeft, Sparkles, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function VideoDemo() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-950 text-white selection:bg-emerald-500/30">
            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Header */}
            <header className="relative z-50 px-6 py-6 flex items-center justify-between border-b border-white/5 bg-gray-950/50 backdrop-blur-xl">
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-all">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm tracking-wide">VOLTAR PARA SITE</span>
                </button>

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-xs text-white">IA</div>
                    <span className="font-outfit font-black tracking-tighter text-xl text-white">dietAI</span>
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-all"
                >
                    <X className="w-5 h-5" />
                </button>
            </header>

            {/* Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black tracking-[0.2em] mb-6">
                        <Sparkles className="w-4 h-4" />
                        VÍDEO DE DEMONSTRAÇÃO
                    </div>
                    <h1 className="font-outfit text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                        Veja a Revolução da <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Inteligência Artificial</span>
                    </h1>
                    <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto font-medium">
                        Assista como o dietAI gera planejamentos nutricionais completos com precisão cirúrgica em tempo recorde.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl group"
                >
                    <div className="relative aspect-video rounded-[32px] overflow-hidden bg-black shadow-[0_0_100px_-20px_rgba(16,185,129,0.3)] border border-white/10">
                        <video
                            className="w-full h-full object-contain bg-black"
                            poster="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=2070"
                            controls
                            playsInline
                        >
                            <source src="/dietAI.mp4" type="video/mp4" />
                            Seu navegador não suporta o elemento de vídeo.
                        </video>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-8 w-full">
                        {[
                            { title: "Precisão de 99%", desc: "Cálculos testados e validados cientificamente." },
                            { title: "Interface Intuitiva", desc: "Fácil de usar, não precisa de treinamento." },
                            { title: "Suporte 24/7", desc: "Nossa equipe está sempre pronta para ajudar." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors"
                            >
                                <h3 className="text-emerald-400 font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-sm font-medium">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 pt-12 border-t border-white/5 w-full flex flex-col items-center"
                >
                    <button
                        onClick={() => navigate('/')}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)]"
                    >
                        QUERO TESTAR AGORA GRATUITAMENTE
                    </button>
                    <p className="mt-6 text-gray-500 font-medium">Não requer cartão de crédito • 7 dias grátis</p>
                </motion.div>
            </main>
        </div>
    );
}
