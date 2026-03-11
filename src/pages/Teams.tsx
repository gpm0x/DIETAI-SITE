
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TEAMS } from '../../constants';
import { ArrowUpRight, Shield, Zap, Target, Users, Activity, Crosshair, BarChart3, Globe } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
};

const TeamDivisionCard: React.FC<{ team: typeof TEAMS[0], idx: number }> = ({ team, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
      className="group relative h-[750px] rounded-[4rem] overflow-hidden border border-white/5 bg-black"
    >
      {/* Imagem agora com brilho natural (brightness-100) por padrão */}
      <img
        src={team.banner}
        alt={team.game}
        className="w-full h-full object-cover brightness-100 group-hover:scale-110 transition-all duration-1000 ease-out"
      />

      {/* Gradiente sutil apenas na base para leitura do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-0 p-12 md:p-16 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center backdrop-blur-xl group-hover:border-purple-500/50 transition-colors">
              <Shield size={20} className="text-purple-500" />
            </div>
            <div>
              <div className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[9px]">Protocolo Ativo</div>
              <div className="text-white font-syne font-bold text-xs uppercase tracking-tight">Divisão Tier-1</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-gray-500 font-bold uppercase tracking-widest text-[8px] mb-1">Status de Rede</div>
            <div className="flex items-center gap-2 justify-end">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest">Sincronizado</span>
            </div>
          </div>
        </div>

        <div className="transform transition-all duration-700">
          <h2 className="text-6xl md:text-[80px] font-syne font-bold text-white uppercase tracking-tighter mb-10 leading-[0.85]">
            {team.game.split(' ')[0]} <br />
            <span className="text-purple-500 italic">{team.game.split(' ').slice(1).join(' ') || 'DIVISION'}</span>
          </h2>

          <div className="grid grid-cols-2 gap-8 mb-12 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="p-6 rounded-3xl bg-black/60 border border-white/5 backdrop-blur-xl">
              <Users size={18} className="text-purple-400 mb-4" />
              <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-1">Corpo de Atletas</div>
              <div className="text-white font-syne font-bold text-lg">{team.lineup.length} OPERADORES</div>
            </div>
            <div className="p-6 rounded-3xl bg-black/60 border border-white/5 backdrop-blur-xl">
              <BarChart3 size={18} className="text-purple-400 mb-4" />
              <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-1">Winrate Geral</div>
              <div className="text-white font-syne font-bold text-lg">92.4%</div>
            </div>
          </div>

          <Link to={`/times/${team.id}`} className="block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-7 bg-white text-black font-bold uppercase tracking-[0.5em] text-[11px] rounded-3xl flex items-center justify-center gap-4 relative overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center gap-3">Explorar a Equipe Completa <ArrowUpRight size={18} /></span>
              <div className="absolute inset-0 bg-purple-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Teams: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-40 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-40 text-center max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-10">
              <Target size={14} className="text-purple-400" />
              <span className="text-purple-400 font-bold tracking-[0.5em] uppercase text-[10px]">Estratégia Multiclã</span>
            </div>
            <h1 className="text-6xl md:text-[120px] font-syne font-bold text-white tracking-tighter leading-[0.8] mb-12 uppercase">
              DOMÍNIO <br /><span className="text-purple-500 italic">GLOBAL.</span>
            </h1>
            <p className="text-gray-500 text-xl font-light leading-relaxed mb-16">
              Nossas divisões não são apenas times; são unidades operacionais de alta performance. Através de dados e disciplina, redefinimos o que significa vencer em cada modalidade.
            </p>
            <div className="flex justify-center gap-12 text-gray-600 font-bold uppercase tracking-[0.4em] text-[9px]">
              <div className="flex items-center gap-3"><Globe size={14} /> Presença Mundial</div>
              <div className="flex items-center gap-3"><Activity size={14} /> Latência Zero</div>
              <div className="flex items-center gap-3"><Crosshair size={14} /> Precisão Absoluta</div>
            </div>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {TEAMS.map((team, idx) => (
            <TeamDivisionCard key={team.id} team={team} idx={idx} />
          ))}

          <motion.div
            {...fadeIn}
            className="h-[750px] rounded-[4rem] border-2 border-dashed border-white/5 bg-white/[0.01] flex flex-col items-center justify-center p-16 text-center group hover:bg-white/[0.02] hover:border-purple-500/20 transition-all duration-700"
          >
            <div className="w-24 h-24 rounded-[2.5rem] bg-black border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <Zap size={40} className="text-gray-700 group-hover:text-purple-500 transition-colors" />
            </div>
            <h3 className="text-3xl font-syne font-bold text-gray-700 uppercase tracking-widest mb-6">Próxima <br />Divisão</h3>
            <p className="text-gray-800 text-[10px] font-bold uppercase tracking-[0.4em] max-w-xs leading-relaxed">
              Mapeamento de cenários competitivos ativo. Valorant e CS2 em fase de triagem estratégica.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Teams;
