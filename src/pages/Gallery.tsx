
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_MOMENTS } from '../constants';
import { Camera, Calendar, ArrowUpRight, Instagram, X, MapPin, Zap, Info, ChevronLeft, ChevronRight, Layers, Activity } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
};

const GalleryCard: React.FC<{ moment: typeof GALLERY_MOMENTS[0], idx: number, onOpen: (moment: typeof GALLERY_MOMENTS[0]) => void }> = ({ moment, idx, onOpen }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const images = moment?.images || [];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length === 0) return;
    setCurrentImg((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length === 0) return;
    setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
      onClick={() => onOpen(moment)}
      className={`group relative overflow-hidden rounded-[3rem] border border-white/5 bg-black/40 backdrop-blur-md cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
        }`}
    >
      <div className="aspect-[4/5] md:aspect-auto h-full w-full relative">
        <AnimatePresence mode="wait">
          {images.length > 0 && (
            <motion.img
              key={currentImg}
              src={images[currentImg]}
              alt={moment.title}
              initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full object-cover brightness-100 group-hover:scale-110 transition-all duration-1000 ease-out"
            />
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {images.length > 1 && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
            <button
              onClick={prevImage}
              className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-600 transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-600 transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute top-10 left-10 flex gap-2 z-20">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${i === currentImg ? 'w-8 bg-purple-500' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute top-10 right-10 z-20 px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-mono font-bold text-white uppercase tracking-widest">
            File_{currentImg + 1} / {images.length}
          </div>
        )}

        <div className="absolute inset-0 p-10 flex flex-col justify-end transition-all duration-700 translate-y-6 group-hover:translate-y-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-purple-500 font-bold uppercase tracking-[0.4em] text-[8px] bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20 backdrop-blur-md">
              {moment.category}
            </span>
            <span className="text-white text-[8px] font-mono uppercase tracking-widest flex items-center gap-2 drop-shadow-md">
              <Calendar size={12} className="text-purple-500" /> {moment.date}
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-syne font-bold text-white uppercase tracking-tighter mb-4 leading-none transition-all duration-500 group-hover:text-glow-purple drop-shadow-lg">
            {moment.title}
          </h3>
          <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-transparent transition-all duration-700 mb-4" />
          <p className="text-gray-200 text-xs font-light max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 drop-shadow-md">
            Dossiê de arquivo contendo {images.length} registros visuais da operação. Clique para expandir detalhes.
          </p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none">
          <Layers size={200} className="text-white" />
        </div>
      </div>
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedMoment, setSelectedMoment] = useState<typeof GALLERY_MOMENTS[0] | null>(null);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  const categories = ['Todos', 'Torneio', 'HQ', 'Lifestyle'];

  const filteredMoments = filter === 'Todos'
    ? GALLERY_MOMENTS
    : GALLERY_MOMENTS.filter(m => m.category === filter);

  const openModal = (moment: typeof GALLERY_MOMENTS[0]) => {
    setSelectedMoment(moment);
    setModalImgIndex(0);
  };

  const nextModalImg = () => {
    if (selectedMoment && selectedMoment.images) {
      setModalImgIndex((prev) => (prev + 1) % selectedMoment.images.length);
    }
  };

  const prevModalImg = () => {
    if (selectedMoment && selectedMoment.images) {
      setModalImgIndex((prev) => (prev - 1 + selectedMoment.images.length) % selectedMoment.images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-48 pb-40 relative bg-background"
    >
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-purple-600/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <header className="mb-32 text-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-purple-500/5 border border-purple-500/10 rounded-full mb-10 backdrop-blur-sm">
              <Camera size={14} className="text-purple-400" />
              <span className="text-purple-400 font-mono font-bold tracking-[0.5em] uppercase text-[10px]">Shadows_Intelligence_Archive</span>
            </div>
            <h1 className="text-7xl md:text-[140px] font-syne font-bold text-white tracking-tighter leading-[0.8] mb-12 uppercase">
              MEMÓRIA <br /><span className="text-purple-500 italic">ETÉREA.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-gray-500 text-xl font-light leading-relaxed">
              O registro criptografado de cada triunfo tático. Onde o passado se torna o código genético do nosso futuro dominante.
            </p>
          </motion.div>
        </header>

        <div className="flex justify-center mb-24">
          <div className="inline-flex p-2 bg-white/5 border border-white/10 rounded-[2rem] gap-2 backdrop-blur-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-4 rounded-[1.5rem] text-[10px] font-mono font-bold uppercase tracking-widest transition-all ${filter === cat
                  ? 'bg-purple-600 text-white shadow-xl shadow-purple-600/30'
                  : 'text-gray-500 hover:text-gray-300'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-[450px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {filteredMoments.map((moment, idx) => (
              <GalleryCard key={moment.id} moment={moment} idx={idx} onOpen={openModal} />
            ))}
          </motion.div>
        </AnimatePresence>

        <section className="mt-60 text-center py-32 bg-white/[0.02] border border-white/5 rounded-[5rem] backdrop-blur-3xl overflow-hidden relative group">
          <div className="relative z-10">
            <span className="text-purple-500 font-mono font-bold uppercase tracking-[0.6em] text-[10px] mb-8 block">Fluxo Constante</span>
            <h2 className="text-5xl md:text-7xl font-syne font-bold mb-10 uppercase tracking-tighter text-white">REDE DE <br /><span className="text-purple-500">TRANSMISSÃO</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16 font-light">
              Para capturas instantâneas e registros em tempo real do nosso cotidiano operacional, conecte-se à nossa rede principal.
            </p>
            <a
              href="https://www.instagram.com/shadows.esportsofc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(168, 85, 247, 0.3)" }}
                className="px-16 py-7 purple-gradient text-white rounded-full font-bold uppercase tracking-[0.5em] text-[11px] shadow-2xl transition-all"
              >
                Seguir @shadows.esportsofc
              </motion.button>
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-0 group-hover:opacity-[0.05] transition-opacity duration-1000 pointer-events-none">
            <Instagram size={600} className="text-purple-500" />
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedMoment && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMoment(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-7xl bg-[#050505] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-auto md:aspect-[16/9]"
            >
              <button
                onClick={() => setSelectedMoment(null)}
                className="absolute top-8 right-8 z-50 p-4 bg-white/5 hover:bg-purple-600 border border-white/10 rounded-full text-white transition-all active:scale-90"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-3/5 h-[40vh] md:h-auto overflow-hidden relative group/modal">
                <AnimatePresence mode="wait">
                  {selectedMoment.images && selectedMoment.images.length > 0 && (
                    <motion.img
                      key={modalImgIndex}
                      src={selectedMoment.images[modalImgIndex]}
                      initial={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
                      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, x: -100, filter: 'blur(20px)' }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover"
                      alt={selectedMoment.title}
                    />
                  )}
                </AnimatePresence>

                {selectedMoment.images && selectedMoment.images.length > 1 && (
                  <>
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-10 z-20 pointer-events-none">
                      <button
                        onClick={(e) => { e.stopPropagation(); prevModalImg(); }}
                        className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 transition-all pointer-events-auto active:scale-90"
                      >
                        <ChevronLeft size={32} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextModalImg(); }}
                        className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 transition-all pointer-events-auto active:scale-90"
                      >
                        <ChevronRight size={32} />
                      </button>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                      {selectedMoment.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setModalImgIndex(i); }}
                          className={`h-2 rounded-full transition-all duration-500 ${i === modalImgIndex ? 'w-12 bg-purple-500' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                <div className="absolute top-10 left-10 z-20 px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl text-[10px] font-mono font-bold text-white uppercase tracking-[0.3em]">
                  Operational_Capture_{modalImgIndex + 1}
                </div>
              </div>

              <div className="w-full md:w-2/5 p-12 md:p-20 overflow-y-auto bg-black flex flex-col">
                <div className="inline-flex items-center gap-4 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-10 w-fit">
                  <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">{selectedMoment.category}</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-syne font-bold text-white mb-10 uppercase tracking-tighter leading-[0.9]">
                  {selectedMoment.title}
                </h2>

                <div className="grid grid-cols-2 gap-10 mb-12">
                  <div>
                    <div className="flex items-center gap-3 text-gray-500 text-[9px] font-mono font-bold uppercase tracking-[0.4em] mb-3">
                      <Calendar size={14} className="text-purple-500" /> Registro_Data
                    </div>
                    <div className="text-white text-base font-bold tracking-tight">{selectedMoment.date}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-gray-500 text-[9px] font-mono font-bold uppercase tracking-[0.4em] mb-3">
                      <MapPin size={14} className="text-purple-500" /> Coordenadas
                    </div>
                    <div className="text-white text-base font-bold tracking-tight">Shadows HQ Central</div>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full mb-12" />

                <div className="space-y-10 flex-grow">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <Info size={20} className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold text-[10px] uppercase tracking-[0.4em] mb-3">Dossiê_Contexto</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {selectedMoment.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <Zap size={20} className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold text-[10px] uppercase tracking-[0.4em] mb-3">Impacto_Operacional</h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        Este registro marca um ponto crítico na trajetória da organização, consolidando nossa hegemonia visual e tática perante o cenário global.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-8 bg-purple-600/5 border border-purple-500/20 rounded-[2.5rem] relative overflow-hidden group">
                  <p className="relative z-10 text-[11px] text-purple-400 font-mono font-bold uppercase tracking-[0.2em] leading-relaxed italic">
                    "Nas sombras, a luz da vitória é o único registro que importa." — Protocolo Zero
                  </p>
                  <Activity className="absolute -bottom-10 -right-10 text-purple-500/5 group-hover:text-purple-500/10 transition-colors" size={150} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
