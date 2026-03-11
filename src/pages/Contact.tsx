
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, Briefcase, Camera, Globe, Instagram, Phone } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
};

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const DiscordIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const Contact: React.FC = () => {
  const socials = [
    { name: 'Instagram', href: 'https://www.instagram.com/shadows.esportsofc/', icon: Instagram },
    { name: 'Discord', href: 'https://discord.gg/qxV8fmrUvM', icon: DiscordIcon },
    { name: 'WhatsApp', href: 'https://wa.me/5511943764593', icon: WhatsAppIcon },
    { name: 'E-mail', href: 'mailto:shadowssport@gmail.com', icon: Mail },
  ];

  const contactMethods = [
    { label: 'E-mail Principal', val: 'shadowssport@gmail.com', icon: Mail, color: 'text-purple-500' },
    { label: 'Linha Direta CEO', val: '(11) 94376-4593', icon: WhatsAppIcon, color: 'text-emerald-500', href: 'https://wa.me/5511943764593' },
    { label: 'Comunidade Oficial', val: 'Entrar no Discord', icon: DiscordIcon, color: 'text-[#5865F2]', href: 'https://discord.gg/qxV8fmrUvM' },
    { label: 'Sede Principal', val: 'São Paulo, Brasil', icon: MapPin, color: 'text-blue-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#020205] pt-60 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-20 mb-40">
          {/* Main Interface - Contact Form */}
          <div className="lg:col-span-7">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[1px] bg-purple-500" />
                <span className="text-purple-500 font-bold tracking-[0.5em] uppercase text-[10px]">Centro de Comando</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-syne font-bold mb-12 tracking-tighter leading-none">VAMOS <br /><span className="text-purple-500 italic">DOMINAR JUNTOS.</span></h1>
              
              <div className="p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[48px] backdrop-blur-xl relative overflow-hidden">
                <form className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500 px-4">Identidade</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/[0.03] border border-white/5 rounded-[24px] px-8 py-5 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all text-sm font-light placeholder:text-gray-700" 
                        placeholder="Nome Completo" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500 px-4">Comunicação</label>
                      <input 
                        type="email" 
                        className="w-full bg-white/[0.03] border border-white/5 rounded-[24px] px-8 py-5 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all text-sm font-light placeholder:text-gray-700" 
                        placeholder="E-mail Corporativo" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500 px-4">Objetivo</label>
                    <div className="relative">
                      <select className="w-full bg-white/[0.03] border border-white/5 rounded-[24px] px-8 py-5 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all appearance-none text-sm font-light text-gray-400">
                        <option className="bg-[#050505]">Patrocínio / Parceria Estratégica</option>
                        <option className="bg-[#050505]">Imprensa & Mídia Especializada</option>
                        <option className="bg-[#050505]">Recrutamento de Talentos Pro</option>
                        <option className="bg-[#050505]">Investimento</option>
                      </select>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                         <Send size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-500 px-4">Briefing / Mensagem</label>
                    <textarea 
                      rows={5} 
                      className="w-full bg-white/[0.03] border border-white/5 rounded-[32px] px-8 py-6 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all resize-none text-sm font-light placeholder:text-gray-700" 
                      placeholder="Detalhes da sua proposta ou dúvida..."
                    ></textarea>
                  </div>

                  <button className="w-full py-6 purple-gradient rounded-[24px] font-bold uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:scale-[1.02] active:scale-95 duration-300">
                    TRANSMITIR MENSAGEM <Send size={16} />
                  </button>
                </form>

                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 blur-[60px] rounded-full pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Quick Info & Global Reach */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              {...fadeIn}
              className="p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[48px]"
            >
              <div className="flex items-center gap-3 mb-10">
                <Globe size={18} className="text-purple-500" />
                <h3 className="font-syne font-bold text-xs uppercase tracking-widest text-white">Canais Oficiais</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {contactMethods.map((item, i) => (
                  <motion.a 
                    key={i}
                    href={item.href || '#'}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className="group p-6 bg-black/40 border border-white/5 rounded-[24px] flex items-center gap-6 hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-1">{item.label}</div>
                      <div className="text-sm font-bold text-white tracking-wide">{item.val}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="p-10 md:p-14 bg-purple-600/5 border border-purple-500/10 rounded-[48px] relative overflow-hidden group"
            >
              <h3 className="text-xl font-syne font-bold text-white mb-6 tracking-tight">Presença Global</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                Operamos com infraestrutura descentralizada, conectando atletas e parceiros em múltiplos fusos horários para garantir excelência 24/7.
              </p>
              <div className="flex items-center gap-4 text-purple-400 font-bold text-[10px] uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Servidores Online
              </div>
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-purple-500/5 blur-[80px] rounded-full group-hover:bg-purple-500/10 transition-colors" />
            </motion.div>
          </div>
        </div>

        {/* Support Section - Social Links */}
        <section className="text-center pt-20 border-t border-white/5">
           <motion.div {...fadeIn}>
              <h3 className="text-xl font-syne font-bold uppercase tracking-[0.5em] mb-12">CONECTE-SE</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {socials.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-white/[0.03] border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white hover:border-purple-500 transition-all flex items-center gap-3 group"
                  >
                    <social.icon size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" /> {social.name}
                  </a>
                ))}
              </div>
           </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
