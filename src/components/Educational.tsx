import { ShieldCheck, Zap, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Educational() {
    const points = [
        {
            icon: UserCheck,
            title: 'A IA não substitui o profissional',
            description: 'Sua experiência clínica é insubstituível. A IA atua como um assistente de alta performance.'
        },
        {
            icon: Zap,
            title: 'Acelera o que é manual',
            description: 'Automatize cálculos e montagem de esqueletos de dieta em milissegundos.'
        },
        {
            icon: ShieldCheck,
            title: 'Você mantém o controle',
            description: 'Edite, revise e personalize qualquer sugestão da IA. A palavra final é sempre sua.'
        }
    ];

    return (
        <section className="py-24 bg-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-[48px] p-12 lg:p-20 shadow-xl border border-emerald-100 relative overflow-hidden"
                >
                    {/* Decorative pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-32 -mt-32"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-outfit text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
                            >
                                Tecnologia para potencializar sua expertise, <br />
                                <span className="text-emerald-600 font-outfit"> não para substituí-la.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-gray-600 max-w-2xl mx-auto font-medium"
                            >
                                O dietAI foi desenhado para ser o braço direito do profissional de saúde moderno.
                            </motion.p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {points.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-200"
                                    >
                                        <point.icon className="w-8 h-8" />
                                    </motion.div>
                                    <h3 className="font-outfit text-xl font-bold text-gray-900 mb-4">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {point.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
