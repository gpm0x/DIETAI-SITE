
import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER } from '../../constants';
import { Quote, Eye, Zap, Target, BrainCircuit, Microscope, Trophy, MessageCircle, Instagram } from 'lucide-react';
import { Timeline } from '../components/ui/timeline';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const DiscordIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const About: React.FC = () => {
  const timelineData = [
    {
      title: "2021",
      content: (
        <div className="relative group/card">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-20 group-hover/card:opacity-40 transition-opacity" />
          <div className="relative p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
            {/* Technical Header */}
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <code className="text-[10px] text-purple-500 font-mono tracking-widest">2021</code>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <h4 className="text-white font-syne font-bold text-2xl uppercase tracking-tight">Fundação da equipe Shadows</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed border-l-2 border-purple-500/30 pl-4">
                Fundação oficial. Início da trajetória competitiva na <strong>LBFF – Série C</strong>, marcando nossa entrada no ecossistema profissional com um esquadrão tático de alta performance.
              </p>
              <p className="text-gray-400 text-sm font-light leading-relaxed border-l-2 border-purple-500/30 pl-4">
                * Participação na LBFF – Série C (Split 2021) – Liga Brasileira de Free Fire
              </p>
            </div>
            {/* Decor Elements */}
            <div className="absolute top-0 right-0 p-2 opacity-50">
              <div className="w-2 h-2 border-t border-r border-white/30" />
            </div>
            <div className="absolute bottom-0 left-0 p-2 opacity-50">
              <div className="w-2 h-2 border-b border-l border-white/30" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="relative group/card">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-20 group-hover/card:opacity-40 transition-opacity" />
          <div className="relative p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <code className="text-[10px] text-purple-500 font-mono tracking-widest">2022</code>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <h4 className="text-white font-syne font-bold text-2xl uppercase tracking-tight">* Participação na LBFF – Série C (Split 2022) – Liga Brasileira de Free Fire
              </h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed border-l-2 border-purple-500/30 pl-4">
                * Criação do Time Emulador de Free Fire.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="relative group/card">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-20 group-hover/card:opacity-40 transition-opacity" />
          <div className="relative p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <code className="text-[10px] text-purple-500 font-mono tracking-widest">2023</code>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <h4 className="text-white font-syne font-bold text-2xl uppercase tracking-tight">Diversidade</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed border-l-2 border-purple-500/30 pl-4">
                Criação do Time Mobile Feminino de Free Fire.
              </p>
              <p className="text-gray-400 text-sm font-light leading-relaxed border-l-2 border-purple-500/30 pl-4">
                Reformulação do Time Mobile Masculino.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="relative group/card">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-20 group-hover/card:opacity-40 transition-opacity" />
          <div className="relative p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <code className="text-[10px] text-purple-500 font-mono tracking-widest">2024</code>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <h4 className="text-white font-syne font-bold text-2xl uppercase tracking-tight">Shadows E-Sport</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed border-l-2 border-purple-500/30 pl-4">
                Evolução da identidade: de Shadows 333 para Shadows E-Sports.
              </p>
              <p className="text-gray-400 text-sm font-light leading-relaxed border-l-2 border-purple-500/30 pl-4">
                * Parceria com a Associação Maxx Bombeiro Civil
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="relative group/card">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/40 to-emerald-500/40 rounded-2xl blur opacity-30 group-hover/card:opacity-50 transition-opacity animate-pulse" />
          <div className="relative p-8 bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500 transition-colors shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <code className="text-[10px] text-purple-500 font-mono tracking-widest">2025</code>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <h4 className="text-white font-syne font-bold text-2xl uppercase tracking-tight">Identidade <span className="text-gray-500">&</span> Domínio Global</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed border-l-2 border-purple-500 pl-4">
                Participação massiva nas ligas de elite: LAFF (Liga Ascensão de Free Fire (Série b)), Liga Play Games, LPE (Liga Paulista de Free Fire), TEG (Torneio Estudantil), 4v4 Suzano. Uma nova identidade visual reafirma nossa onipresença no cenário competitivo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-30 <Zap size={10} />" />
                <h5 className="text-purple-400 font-mono font-bold text-[10px] uppercase tracking-widest mb-3">Protocolos Ativos</h5>
                <ul className="text-gray-400 text-[10px] font-mono space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> LAFF - Liga Ascensão</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> LPE - Liga Paulista</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> TEG - Torneio Estudantil</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> Liga Play Games</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> 4v4 Suzano</li>
                </ul>
              </div>
            </div>
            {/* Holographic Scanline */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none animate-scan" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#020205]"
    >
      {/* Immersive Hero / Cinematic Manifesto */}
      <section className="relative pt-60 pb-40 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-syne font-black text-white/[0.02] tracking-tighter select-none whitespace-nowrap pointer-events-none">
          PERFORMANCE VISIONÁRIA
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="max-w-4xl" {...fadeIn}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
              <span className="text-purple-500 font-bold tracking-[0.5em] uppercase text-[10px] block">Manifesto de Fundação</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-syne font-bold mb-12 leading-[1] tracking-tighter">
              A VITÓRIA É <br />UMA <span className="text-purple-500 italic font-medium">ARQUITETURA.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed mb-16 max-w-3xl">
              Na Shadows E-Sport, não jogamos por sorte. Desconstruímos o caos do jogo para reconstruir a vitória através de inteligência aplicada e disciplina inabalável.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-black/20 border-y border-white/5">
        <Timeline data={timelineData} />
      </section>

      {/* Performance Philosophy - The Process */}
      <section className="py-40 bg-white/[0.015] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-syne font-bold mb-8 uppercase tracking-tight">FILOSOFIA <br />DE <span className="text-gray-500">DOMÍNIO</span></h2>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-12">
                Nossa metodologia integra o que há de mais avançado em ciência esportiva aplicada aos e-sports. O atleta Shadows é forjado em três eixos fundamentais:
              </p>
              <div className="space-y-10">
                {[
                  { icon: BrainCircuit, title: 'Inteligência Cognitiva', text: 'Treinamento de velocidade de processamento e tomada de decisão sob pressão extrema.' },
                  { icon: Microscope, title: 'Análise Quantitativa', text: 'Cada movimento é rastreado e transformado em dados para otimização tática perpétua.' },
                  { icon: Zap, title: 'Execução Mecânica', text: 'Refinamento biomecânico para garantir que o input físico seja tão rápido quanto o pensamento.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-syne font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-light leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="space-y-6 pt-12">
                <div className="aspect-[4/5] rounded-[30px] overflow-hidden border border-white/10 group cursor-crosshair">
                  <img src="/image/qg.png" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="aspect-square rounded-[30px] bg-purple-600/10 border border-purple-500/20 flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-3xl font-syne font-bold text-white mb-2">30ms</div>
                  <div className="text-[9px] font-bold text-purple-400 uppercase tracking-widest leading-tight">Média de reação Shadows</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-square rounded-[30px] bg-white/[0.03] border border-white/5 flex flex-col items-center justify-center p-8 text-center">
                  <Target className="text-purple-500 mb-4" size={32} />
                  <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-tight">Precisão de Drop</div>
                </div>
                <div className="aspect-[4/5] rounded-[30px] overflow-hidden border border-white/10 group cursor-crosshair">
                  <img src="/image/giuliano.png" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight - Visionary Leadership */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 aspect-[3/4.2] rounded-[60px] overflow-hidden border border-purple-500/20 group shadow-[0_0_50px_rgba(168,85,247,0.15)]">
                <img
                  src='/image/giuliano.png'
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                {/* Trophy Badge Overlay */}
                <div className="absolute top-8 right-8 bg-purple-500/20 backdrop-blur-xl border border-purple-500/30 w-16 h-16 rounded-2xl flex items-center justify-center animate-bounce shadow-lg">
                  <Trophy size={32} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
              </div>

              {/* Floating ID Card */}
              <div className="absolute -bottom-10 -left-10 md:left-auto md:-right-10 p-10 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[40px] z-20 shadow-2xl">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Eye size={18} className="text-purple-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Perfil de Liderança</span>

                  </div>
                  <div className="h-px bg-white/10 w-full" />
                  <div>
                    <h4 className="text-white font-syne font-bold text-xl uppercase tracking-tighter">{FOUNDER.name}</h4>
                    <p className="text-purple-500 text-[9px] font-bold uppercase tracking-widest mt-1">{FOUNDER.title}</p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                      <a href={FOUNDER.socials.instagram_shadows} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors">
                        <Instagram size={18} />
                      </a>
                      <a href={FOUNDER.socials.discord} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5865F2] transition-colors">
                        <DiscordIcon size={18} />
                      </a>
                      <a href={FOUNDER.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
                        <WhatsAppIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-purple-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Liderança Estratégica</span>
              <h2 className="text-4xl md:text-6xl font-syne font-bold mb-10 leading-[1.1] tracking-tighter">O VISIONÁRIO <br />POR TRÁS <span className="text-purple-500 italic">DA SHADOWS.</span></h2>

              <div className="space-y-10 text-gray-400 text-base md:text-xl leading-relaxed font-light">
                <p className="font-bold text-white text-2xl tracking-tight leading-tight border-l-4 border-purple-500 pl-8">
                  "{FOUNDER.bio}"
                </p>
                <p className="text-lg">
                  {FOUNDER.story}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mt-16">
                <div className="flex-1 p-10 bg-white/[0.02] border border-white/5 rounded-[40px] relative overflow-hidden group">
                  <Quote size={80} className="absolute -top-4 -right-4 text-white/[0.03] rotate-180 group-hover:text-purple-500/5 transition-colors" />
                  <p className="text-white italic text-lg md:text-xl font-light relative z-10 leading-relaxed">
                    "Na Shadows, não estamos construindo apenas uma equipe de e-sports; estamos construindo um legado de excelência."
                  </p>
                </div>

                <a
                  href="https://wa.me/5511943764593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Pillars - Bento Style */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-purple-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Nossos Alicerces</span>
          <h2 className="text-3xl md:text-5xl font-syne font-bold uppercase tracking-tighter">CULTURA <span className="text-gray-500 font-medium">DE ELITE</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'DISCIPLINA', desc: 'A rotina é o que nos separa dos amadores. Treinamos como elite, pensamos como campeões.' },
            { title: 'INOVAÇÃO', desc: 'Utilizamos tecnologia de ponta e análise de dados massiva para otimizar cada segundo in-game.' },
            { title: 'LEALDADE', desc: 'A Shadows é um ecossistema de suporte mútuo e fidelidade absoluta entre atletas e staff.' },
          ].map((pilar, i) => (
            <motion.div
              key={i}
              className="p-14 bg-white/[0.02] border border-white/5 rounded-[48px] text-center hover:bg-purple-500/[0.05] hover:border-purple-500/30 transition-all duration-500 group"
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-3xl bg-purple-500/10 group-hover:bg-purple-500/20 flex items-center justify-center text-purple-500 font-syne font-bold text-2xl mx-auto mb-10 transition-colors shadow-inner">
                0{i + 1}
              </div>
              <h3 className="text-2xl font-syne font-bold uppercase mb-6 tracking-widest">{pilar.title}</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{pilar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
