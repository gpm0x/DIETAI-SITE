
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, } from 'framer-motion';
import Hero from '../components/Hero';
import { Trophy, ChevronRight, ChevronLeft, Globe, Gamepad2, Monitor, Wifi, HardDrive, Mic2, Phone, Mail, Terminal, Send, Users, ShieldCheck, ArrowUpRight, Target, Zap, Activity, Binary, Brain, Share2, Instagram, Flame, ArrowRight, Fingerprint, Lock, Sparkles, Handshake, ExternalLink, Rocket, BadgeCheck, Cpu, Crosshair, Swords, Crown, Medal, Skull } from 'lucide-react';
import { Link } from 'react-router-dom';
import { title } from 'process';


// Componente de Carrossel de Parceiros Premium
const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    {
      name: "SoftTech Inovations",
      title: "Tecnlogia & Design & Inovação & IA",
      description: "Empresa de tecnologia especializada na criação de landing pages, sites e sistemas sob medida, integrando design estratégico e inteligência artificial para gerar resultados reais.",
      imageUrl: "/image/logo-soft.png",
      instagram: "https://www.instagram.com/softtechinovations",
      themeColor: "280 60% 50%"
    },
    {
      name: "ASSOCIAÇÃO MAXX",
      title: "Tactical Safety & Training Alliance",
      description: "Especialistas em salvamento e disciplina civil. A Associação MAXX traz o rigor do treinamento de bombeiros civis para o ecossistema Shadows, forjando a mentalidade resiliente indispensável para o topo do pódio.",
      imageUrl: "/image/logo-maxx.png",
      instagram: "https://www.instagram.com/associacaomaxx",
      themeColor: "200 70% 40%"
    }
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % partners.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);

  const current = partners[currentIndex];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative">
      {/* Desktop Layout */}
      <div className="hidden md:flex relative items-center min-h-[600px] justify-center">
        {/* Partner Image Container */}
        <div className="w-[580px] h-[580px] rounded-[56px] overflow-hidden bg-white/5 border border-white/10 flex-shrink-0 relative group z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <img
                src={current.imageUrl}
                alt={current.name}
                className="w-full h-full object-cover brightness-[0.8] group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent mix-blend-overlay" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-12 left-12">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">SoftTech Inovations</span>
            </div>
          </div>
        </div>

        {/* Info Card - Ajustado ml-[-120px] para mover o card mais para a direita (em relação ao container da imagem) */}
        {/* Note: In absolute positioning/flex terms, reducing the negative margin moves the overlapping card further RIGHT relative to the image anchor. */}
        <div className="bg-[#0a0a0f]/95 backdrop-blur-3xl border border-white/10 rounded-[48px] p-14 ml-[-20px] z-10 max-w-xl flex-1 shadow-[0_50px_100px_rgba(0,0,0,0.9)] relative overflow-hidden group/card transition-all duration-500 hover:border-purple-500/30">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-[80px] rounded-full group-hover/card:bg-purple-500/20 transition-all duration-700" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-purple-500" />
                  <h3 className="text-purple-500 font-mono font-bold text-[10px] uppercase tracking-[0.6em]">
                    {current.title}
                  </h3>
                </div>
                <h2 className="text-5xl lg:text-6xl font-syne font-bold text-white mb-6 uppercase tracking-tighter italic leading-none">
                  {current.name}
                </h2>
              </div>

              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                {current.description}
              </p>

              <div className="flex items-center gap-6">
                <a
                  href={current.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-5 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-purple-600 hover:border-purple-400 transition-all duration-500 shadow-xl"
                >
                  <Instagram className="w-6 h-6 text-white" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white">Ver o instagram</span>
                </a>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-500 transition-colors cursor-pointer">
                    <ExternalLink size={20} />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-500 transition-colors cursor-pointer">
                    <Target size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-8">
        <div className="w-full aspect-square rounded-[32px] overflow-hidden border border-white/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.imageUrl}
              src={current.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
        <div className="text-center px-4">
          <h2 className="text-3xl font-syne font-bold text-white uppercase mb-4">{current.name}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">{current.description}</p>
          <a
            href={current.instagram}
            target="_blank"
            className="w-full py-6 purple-gradient rounded-2xl flex items-center justify-center gap-4 text-white font-bold uppercase tracking-widest text-xs"
          >
            INSTAGRAM <Instagram size={18} />
          </a>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-10 mt-20">
        <button
          onClick={handlePrev}
          className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all group shadow-lg"
        >
          <ChevronLeft className="w-8 h-8 text-white group-active:scale-75 transition-transform" />
        </button>

        <div className="flex gap-4">
          {partners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-700 ${idx === currentIndex ? 'w-16 bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]' : 'w-4 bg-white/10 hover:bg-white/20'
                }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:border-purple-400 transition-all group shadow-lg"
        >
          <ChevronRight className="w-8 h-8 text-white group-active:scale-75 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const StatusTag = ({ label, color = "purple" }: { label: string, color?: string }) => (
  <div className={`flex items-center gap-2 px-3 py-1 bg-${color}-500/10 border border-${color}-500/20 rounded-full w-fit`}>
    <div className={`w-1.5 h-1.5 rounded-full bg-${color}-500 animate-pulse`} />
    <span className={`text-${color}-400 font-mono text-[9px] font-bold uppercase tracking-widest`}>{label}</span>
  </div>
);

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as any }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const HUDCorner = ({ position = "top-left" }: { position?: string }) => {
  const posClasses = {
    "top-left": "top-0 left-0 border-t-2 border-l-2",
    "top-right": "top-0 right-0 border-t-2 border-r-2",
    "bottom-left": "bottom-0 left-0 border-b-2 border-l-2",
    "bottom-right": "bottom-0 right-0 border-b-2 border-r-2"
  }[position];

  return <div className={`absolute w-6 h-6 border-purple-500/30 ${posClasses} pointer-events-none`} />;
};


const Home: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPct = (clientX / innerWidth) - 0.5;
    const yPct = (clientY / innerHeight) - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const textX = useSpring(useTransform(mouseX, [-0.5, 0.5], [30, -30]), { stiffness: 100, damping: 30 });
  const textY = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 2000);
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative bg-background" onMouseMove={handleMouseMove}>
      <Hero />
      <section className="relative py-24 z-20 bg-black/40 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { label: 'Modalidades Ativas', val: '1', icon: Globe, detail: 'Em crescimento' },
              { label: 'Atletas Ativos', val: '6', icon: Users, detail: 'Em crescimento' },
              { label: 'Rotinas Estruturadas', val: '100%', icon: Trophy, detail: 'TREINOS & ANÁLISE' },
              { label: 'Comunidade', val: '+100 pessoas', icon: Target, detail: 'Em crescimento' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="relative p-10 group border border-white/5 bg-white/[0.01] rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500">
                <stat.icon className="text-purple-500/40 mb-8 group-hover:text-purple-500 transition-colors group-hover:scale-110 duration-500" size={24} />
                <div className="text-5xl font-rajdhani font-bold text-white mb-2 italic tracking-tighter group-hover:text-glow-purple transition-all">
                  {stat.val}
                </div>
                <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-[0.4em] mb-4">{stat.label}</div>
                <div className="text-[8px] font-mono text-gray-600 tracking-widest uppercase">{stat.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* MANIFESTO */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-purple-500" />
              <span className="text-purple-500 font-bold tracking-[0.5em] uppercase text-[10px]">Quem Somos</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-syne font-bold text-white tracking-tighter leading-none mb-12">
              MAIS QUE UM TIME, <br />UMA <span className="text-purple-500 italic">MÁQUINA.</span>
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-10">
              A Shadows E-Sport é uma organização focada em performance competitiva, criada para desenvolver talentos e construir equipes sólidas no e-sport moderno.
            </p>
            <Link to="/sobre">
              <motion.button
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-white font-bold uppercase tracking-[0.4em] text-[10px]"
              >
                NOSSA HISTÓRIA COMPLETA <ArrowUpRight size={16} className="text-purple-500" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div {...fadeIn} className="relative aspect-square">

            {/* INTELLIGENCE HUB */}
            <div className="absolute inset-0 bg-purple-600/5 rounded-full blur-[120px]" />
            <div className="relative rounded-[60px] overflow-hidden border border-white/5 aspect-square bg-white/[0.01]">
              <img
                src="/image/qg.png"
                alt="Shadows Operation"
                className="w-full h-full object-cover opacity-50 hover:opacity-80 transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12">
                <div className="text-[9px] font-bold text-purple-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> HQ São Paulo
                </div>
                <div className="text-3xl font-syne font-bold text-white uppercase tracking-tighter">PROTOCOLO ATIVO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-24 text-center md:text-left">
            <motion.div {...fadeIn} className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <div className="w-12 h-[1px] bg-purple-500/50" />
              <span className="text-purple-500 font-mono font-bold uppercase tracking-[0.5em] text-[10px]">Shadows_Performance_Lab</span>
            </motion.div>
            <motion.h2 {...fadeIn} className="text-5xl md:text-8xl font-rajdhani font-bold text-white uppercase italic tracking-tighter leading-[0.85] mb-10">
              METODOLOGIA DE <br /><span className="text-transparent bg-clip-text bg-elite-gradient">ALTO RENDIMENTO.</span>
            </motion.h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'NEURO-GAMING',
                icon: Brain,
                desc: 'Treinamento cognitivo focado em reduzir tempo de reação e aprimorar a tomada de decisão em ambientes de alta pressão.',
                stats: 'Foco Cognitivo Avançado'
              },
              {
                title: 'MACRO ESTRATÉGIA',
                icon: Target,
                desc: 'Estudo de mapas, padrões de jogo e leitura de adversários com base em revisão tática contínua.',
                stats: 'Visão Tática Estruturada'
              },
              {
                title: 'BIO-FEEDBACK',
                icon: Activity,
                desc: 'Acompanhamento físico e mental para sustentar performance consistente durante treinos e competições.',
                stats: 'Performance Sustentável'
              }

            ].map((lab, i) => (
              <motion.div
                key={i} {...fadeIn} transition={{ delay: i * 0.1 }}
                className="group p-10 glass rounded-[40px] border-white/5 hover:border-purple-500/30 transition-all duration-700 relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 transition-transform">
                  <lab.icon size={24} />
                </div>
                <h3 className="text-2xl font-rajdhani font-bold text-white uppercase italic tracking-tight mb-4">{lab.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">{lab.desc}</p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-purple-400 font-mono text-[9px] font-bold uppercase tracking-widest">{lab.stats}</span>
                  <Gamepad2 size={14} className="text-purple-500/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 🔹 SHADOWS ECOSYSTEM */}
      <section className="py-40 bg-[#050508] relative border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn}>
              <span className="text-purple-500 font-mono font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Infraestrutura</span>
              <h2 className="text-5xl md:text-7xl font-rajdhani font-bold text-white uppercase italic tracking-tighter leading-none mb-10">ECOSSISTEMA <br /><span className="text-gray-600 italic">SHADOWS.</span></h2>
              <div className="space-y-10">
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">Estamos construindo conexões entre Gaming Houses e talentos com uma infraestrutura pensada para apoiar o crescimento competitivo.</p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <div className="text-purple-500 font-rajdhani font-bold text-3xl mb-1 italic">Conexão Estável</div>
                    <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Ambiente Controlado</div>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <div className="text-purple-500 font-rajdhani font-bold text-3xl mb-1 italic">Streaming Estruturado</div>
                    <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Em Evolução</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="relative p-10 glass rounded-[50px] border-white/10">
              <div className="space-y-8">
                {[
                  { label: 'Gaming House', val: 'Taboão da Serra', icon: Monitor },
                  { label: 'Conectividade', val: 'Infraestrutura em Expansão', icon: Wifi },
                  { label: 'Equipamentos', val: 'Setup Gamer Profissional', icon: HardDrive },
                  { label: 'Streaming', val: 'Operação Inicial', icon: Mic2 }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-purple-500 transition-all">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-white font-rajdhani font-bold text-lg uppercase italic tracking-tight">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 p-6 bg-purple-600 rounded-full shadow-[0_0_40px_rgba(157,80,187,0.4)]">
                <Trophy size={28} className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* SEÇÃO DE PARCEIROS */}
      <section className="py-48 relative overflow-hidden bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-32">
            <StatusTag label="Alianças_Estratégicas" />
            <h2 className="text-5xl md:text-[100px] font-syne font-bold text-white uppercase tracking-tighter italic leading-none mt-8">PARCEIROS <span className="text-gray-600">TECH.</span></h2>
          </header>
          <PartnerCarousel />
        </div>
      </section>
      {/* 🔹 CONTACT - COMMAND CENTER (COMPACT VERSION) */}
      <section className="relative py-40 px-6 bg-[#020205] overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            <motion.div className="lg:col-span-5 space-y-12" {...fadeIn}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-purple-500">
                  <Terminal size={22} />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.5em]">Conexão_Shadows_HQ</span>
                </div>
                <h2 className="text-6xl md:text-[80px] font-rajdhani font-bold text-white tracking-tighter uppercase leading-[0.8] italic">
                  CENTRO DE <br /><span className="text-purple-500">COMANDO.</span>
                </h2>
                <div className="flex items-center gap-3 bg-purple-500/5 p-4 border border-purple-500/10 rounded-2xl w-fit">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-purple-400 font-mono text-[9px] font-bold uppercase tracking-widest">Aguardando Sinal_</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: 'E-mail Operacional', val: 'shadowssport@gmail.com', icon: Mail, color: 'text-purple-500' },
                  { label: 'Comando de Voz', val: '+55 11 94376-4593', icon: Phone, color: 'text-green-500' },
                  { label: 'Sinal Social', val: '@shadows.esportsofc', icon: Instagram, color: 'text-pink-500' }
                ].map((chan, i) => (
                  <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center gap-6 p-8 glass rounded-[35px] group border-white/5 hover:border-purple-500/20 transition-all">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${chan.color} group-hover:scale-110 transition-all`}>
                      <chan.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-rajdhani font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{chan.label}</h4>
                      <p className="text-gray-400 text-sm font-light">{chan.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="lg:col-span-7" {...fadeIn}>
              <div className="relative p-10 md:p-16 glass rounded-[50px] border-white/10 shadow-2xl">
                <HUDCorner position="top-right" />
                <HUDCorner position="bottom-left" />

                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 space-y-8">
                      <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
                        <ShieldCheck size={48} className="text-green-500" />
                      </div>
                      <h3 className="text-4xl font-rajdhani font-bold text-white uppercase tracking-tighter italic">SINAL ENVIADO.</h3>
                      <p className="text-gray-400 text-base max-w-xs mx-auto font-light leading-relaxed">Sua transmissão foi recebida pelo HQ. Em breve entraremos em contato via canal de elite.</p>
                      <button onClick={() => setFormStatus('idle')} className="text-purple-400 font-mono font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors underline decoration-purple-500/50 underline-offset-8">Nova Mensagem_</button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <div className="space-y-4">
                        <h3 className="text-4xl font-rajdhani font-bold text-white uppercase tracking-tighter italic leading-none">RECRUTAMENTO & PARCERIAS</h3>
                        <p className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.4em]">Preencha os vetores para iniciar o protocolo de conexão.</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-4">Codinome_Nick</label>
                          <input required type="text" className="w-full bg-black/70 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-purple-500/50 text-white text-sm transition-all" placeholder="SEU NOME" />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-4">Canal_Retorno</label>
                          <input required type="email" className="w-full bg-black/70 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-purple-500/50 text-white text-sm transition-all" placeholder="E-MAIL" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-4">Objetivo_Missão</label>
                        <select className="w-full bg-black/70 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-purple-500/50 text-gray-400 text-sm appearance-none cursor-pointer">
                          <option className="bg-[#050505]">Parceria Comercial / Patrocínio</option>
                          <option className="bg-[#050505]">Recrutamento de Atletas (Tier-1)</option>
                          <option className="bg-[#050505]">Assuntos de Imprensa / Mídia</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-4">Relatório_Detalhes</label>
                        <textarea required rows={4} className="w-full bg-black/70 border border-white/10 rounded-[30px] px-10 py-8 focus:outline-none focus:border-purple-500/50 text-white text-sm resize-none transition-all" placeholder="DESCREVA SUA PROPOSTA..."></textarea>
                      </div>

                      <motion.button
                        type="submit" disabled={formStatus === 'sending'}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(157, 80, 187, 0.4)" }}
                        className={`w-full py-8 rounded-[2rem] font-rajdhani font-bold uppercase tracking-[0.6em] text-[11px] text-white flex items-center justify-center gap-6 transition-all ${formStatus === 'sending' ? 'bg-purple-900 animate-pulse' : 'purple-gradient'}`}
                      >
                        {formStatus === 'sending' ? "PROCESSANDO_SINAL..." : <>CONECTAR AO HQ <Send size={18} /></>}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div >
  );
};

export default Home;
