
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TEAMS } from '../../constants';
import { Player } from '../../types';
import {
  ArrowLeft, Instagram, Twitter, Twitch,
  Smartphone, Headphones,
  Map, Radio, Timer, Globe, Brain, Terminal, Dumbbell,
  Target, Users, Trophy, Shield, Zap
} from 'lucide-react';

const fadeInSlide = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as any }
};

const AttributeRadar: React.FC<{ radar: any }> = ({ radar }) => {
  if (!radar) return null;
  const points = [
    { label: 'Agressão', val: radar.aggression, x: 50, y: 10 },
    { label: 'Tática', val: radar.tactical, x: 90, y: 40 },
    { label: 'Mecânica', val: radar.mechanics, x: 75, y: 85 },
    { label: 'Mapa', val: radar.mapControl, x: 25, y: 85 },
    { label: 'Teamwork', val: radar.teamwork, x: 10, y: 40 },
  ];

  const centerX = 50;
  const centerY = 50;
  const polygonPoints = points.map(p => {
    const scale = p.val / 100;
    const dx = p.x - centerX;
    const dy = p.y - centerY;
    return `${centerX + dx * scale},${centerY + dy * scale}`;
  }).join(' ');

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square bg-white/[0.02] rounded-full border border-white/5 p-12 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        {[0.2, 0.4, 0.6, 0.8, 1].map(s => (
          <polygon
            key={s}
            points={points.map(p => `${centerX + (p.x - centerX) * s},${centerY + (p.y - centerY) * s}`).join(' ')}
            className="fill-none stroke-white/10"
            strokeWidth="0.5"
          />
        ))}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          points={polygonPoints}
          className="fill-purple-500/20 stroke-purple-500"
          strokeWidth="1"
        />
        {points.map(p => (
          <text
            key={p.label}
            x={p.x > 50 ? p.x + 8 : p.x - 8}
            y={p.y > 50 ? p.y + 8 : p.y - 8}
            textAnchor={p.x > 50 ? 'start' : 'end'}
            className="fill-gray-500 font-bold text-[3px] uppercase tracking-widest"
          >
            {p.label}
          </text>
        ))}
      </svg>
    </div>
  );
};

const PlayerProfile: React.FC<{ player: Player, idx: number }> = ({ player, idx }) => {
  return (
    <motion.div
      {...fadeInSlide}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className="bg-white/[0.02] border border-white/5 rounded-[40px] overflow-hidden group hover:bg-white/[0.04] transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-2/5 aspect-[3/4] md:aspect-auto overflow-hidden relative">
          {/* Removido "grayscale" - Fotos agora coloridas por padrão */}
          <img
            src={player.image}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            alt={player.nick}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
          <div className="absolute bottom-6 left-6">
            <div className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[8px] mb-1">{player.role}</div>
          </div>
        </div>

        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <div className="text-purple-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-2">Nickname</div>
            <h3 className="text-4xl md:text-5xl font-syne font-bold text-white uppercase tracking-tighter leading-none mb-6">
              {player.nick}
            </h3>

            <div className="space-y-6">
              <div>
                <div className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-1">Nome Completo</div>
                <div className="text-white font-bold text-lg tracking-tight">{player.name}</div>
              </div>

              <div className="flex gap-12">
                <div>
                  <div className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-1">Idade</div>
                  <div className="text-white font-bold text-lg tracking-tight">{player.age || '22'} Anos</div>
                </div>
                <div>
                  <div className="text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-1">Status</div>
                  <div className="text-emerald-500 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Ativo
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex gap-4">
            {player.socials?.instagram && (
              <a href={player.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-purple-600 transition-all">
                <Instagram size={20} />
              </a>
            )}
            {player.socials?.twitter && (
              <a href={player.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-500 transition-all">
                <Twitter size={20} />
              </a>
            )}
            {player.socials?.twitch && (
              <a href={player.socials.twitch} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-purple-800 transition-all">
                <Twitch size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamDetail: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const team = TEAMS.find(t => t.id === teamId);

  if (!team) return <div className="pt-60 text-center text-gray-500 uppercase tracking-widest">Protocolo Inválido.</div>;

  const gameParts = team.game?.split(' ') || ['DIVISION'];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-32">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Banner com brilho natural */}
        <img src={team.banner} className="absolute inset-0 w-full h-full object-cover brightness-100" alt={team.game} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-black/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <Link to="/times" className="inline-flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-12 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar ao Hub
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-purple-500" />
            <span className="text-purple-500 font-bold tracking-[0.6em] uppercase text-[12px]">Dossiê Shadows</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-syne font-bold text-white tracking-tighter leading-none mb-10">
            {gameParts[0]} <br />
            <span className="text-purple-500 italic">{gameParts.slice(1).join(' ') || 'OPERATIONS'}</span>
          </h1>
          <p className="max-w-2xl text-white text-lg font-light leading-relaxed drop-shadow-md">
            {team.history}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Tech Ecosystem */}
        <section className="py-32 border-b border-white/5">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInSlide}>
              <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Performance Stack</span>
              <h2 className="text-3xl md:text-5xl font-syne font-bold text-white mb-8 uppercase tracking-tighter">INFRAESTRUTURA <span className="text-gray-500 italic">DE ELITE.</span></h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                Hardware otimizado para garantir que o tempo de resposta entre o pensamento do atleta e a ação in-game seja nulo.
              </p>
              <div className="space-y-4">
                {team.gear?.device && (
                  <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl flex gap-6">
                    <Smartphone className="text-purple-500" size={24} />
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Mobile Core</h4>
                      <p className="text-gray-500 text-sm font-light">{team.gear.device}</p>
                    </div>
                  </div>
                )}
                {team.gear?.headset && (
                  <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl flex gap-6">
                    <Headphones className="text-purple-500" size={24} />
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-1">Aural Response</h4>
                      <p className="text-gray-500 text-sm font-light">{team.gear.headset}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div {...fadeInSlide} transition={{ delay: 0.2 }}>
              {team.radar && <AttributeRadar radar={team.radar} />}
            </motion.div>
          </div>
        </section>

        {/* Lineup - Refined Cards */}
        <section className="py-32">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="text-center md:text-left">
              <span className="text-purple-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Roster Oficial</span>
              <h2 className="text-4xl md:text-6xl font-syne font-bold text-white uppercase tracking-tighter">AGENTES <span className="text-purple-500 italic">ATIVOS.</span></h2>
            </div>
            <div className="flex items-center gap-4 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-purple-400 font-bold text-[11px] uppercase tracking-widest">
              <Users size={16} /> {team.lineup.length} OPERADORES
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {team.lineup.map((player, idx) => (
              <PlayerProfile key={player.id} player={player} idx={idx} />
            ))}
          </div>
        </section>

        {/* Timeline Achievements */}
        <section className="py-32">
          <div className="flex items-center gap-4 mb-16">
            <Trophy size={24} className="text-purple-500" />
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-white uppercase tracking-tighter leading-none">REGISTROS DE <span className="text-gray-500">GLÓRIA.</span></h2>
          </div>
          <div className="space-y-6">
            {team.timeline && team.timeline.map((item, i) => (
              <motion.div
                key={i}
                {...fadeInSlide}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-black/40 border border-white/5 rounded-[40px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div>
                  <span className="text-purple-500 font-syne font-bold text-sm tracking-[0.4em] uppercase">{item.year}</span>
                  <h3 className="text-xl font-syne font-bold text-white uppercase tracking-tight mt-2">{item.event}</h3>
                  <p className="text-gray-500 text-sm font-light mt-2">{item.detail}</p>
                </div>
                <span className="px-6 py-2 bg-white/5 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10">
                  {item.rank}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <section className="py-32 bg-purple-600/5 border-t border-white/5 relative mt-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Zap size={32} className="text-purple-500 mx-auto mb-10" />
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-white mb-8 tracking-tighter uppercase leading-none">VOCÊ É A <br /><span className="italic">PRÓXIMA SOMBRA?</span></h2>
          <Link to="/contato">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-14 py-6 bg-purple-600 text-white font-bold uppercase tracking-[0.4em] text-[11px] rounded-full"
            >
              Aplicar para Divisão
            </motion.button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default TeamDetail;
