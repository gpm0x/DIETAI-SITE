import { useCallback, useEffect, useRef, useState } from 'react';
import { PRINT_LOJA } from './constantes';

export type Tela = {
  arquivo: string;
  titulo: string;
  texto: string;
  alt: string;
};

const INTERVALO = 4200;

/**
 * Carrossel de prints reais do app, em destaque central.
 * Rolagem nativa com scroll-snap (toque, trackpad e teclado). A tela mais
 * próxima do centro vira a ativa: fica maior, nítida e com a legenda grande
 * embaixo. Avanço automático com barra de progresso, que pausa na interação
 * e fora da tela.
 */
export default function Carrossel({ telas }: { telas: Tela[] }) {
  const trilho = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [naTela, setNaTela] = useState(false);
  const [menosMovimento, setMenosMovimento] = useState(false);

  useEffect(() => {
    setMenosMovimento(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // qual tela está mais perto do centro do trilho
  const medir = useCallback(() => {
    const el = trilho.current;
    if (!el) return;
    const centro = el.scrollLeft + el.clientWidth / 2;
    let melhor = 0;
    let menor = Infinity;
    Array.from(el.children).forEach((filho, i) => {
      const f = filho as HTMLElement;
      const d = Math.abs(f.offsetLeft + f.offsetWidth / 2 - centro);
      if (d < menor) {
        menor = d;
        melhor = i;
      }
    });
    setAtivo(melhor);
  }, []);

  const irPara = useCallback(
    (indice: number) => {
      const el = trilho.current;
      if (!el) return;
      const total = telas.length;
      const i = ((indice % total) + total) % total;
      const f = el.children[i] as HTMLElement | undefined;
      if (!f) return;
      el.scrollTo({
        left: f.offsetLeft + f.offsetWidth / 2 - el.clientWidth / 2,
        behavior: menosMovimento ? 'auto' : 'smooth',
      });
    },
    [telas.length, menosMovimento]
  );

  // só anda sozinho enquanto o carrossel está visível
  useEffect(() => {
    const el = trilho.current;
    if (!el || !('IntersectionObserver' in window)) {
      setNaTela(true);
      return;
    }
    const observador = new IntersectionObserver(([e]) => setNaTela(e.isIntersecting), {
      threshold: 0.4,
    });
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  // começa na segunda tela, para já mostrar vizinhos dos dois lados
  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    const f = el.children[1] as HTMLElement | undefined;
    if (f) el.scrollLeft = f.offsetLeft + f.offsetWidth / 2 - el.clientWidth / 2;
    medir();
  }, [medir]);

  const rodando = !menosMovimento && !pausado && naTela;

  useEffect(() => {
    if (!rodando) return;
    const id = window.setTimeout(() => irPara(ativo + 1), INTERVALO);
    return () => window.clearTimeout(id);
  }, [rodando, ativo, irPara]);

  const atual = telas[ativo];

  return (
    <div
      className="carrossel"
      data-rodando={rodando ? 'sim' : 'nao'}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
      onTouchStart={() => setPausado(true)}
    >
      <div className="halo" aria-hidden="true" />

      <div
        className="trilho"
        ref={trilho}
        onScroll={medir}
        tabIndex={0}
        role="group"
        aria-roledescription="carrossel"
        aria-label="Telas do dietAI. Use as setas do teclado ou role para o lado."
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') {
            e.preventDefault();
            irPara(ativo + 1);
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            irPara(ativo - 1);
          }
        }}
      >
        {telas.map((tela, i) => (
          <figure
            key={tela.arquivo}
            className={i === ativo ? 'ativo' : undefined}
            aria-current={i === ativo ? 'true' : undefined}
            onClick={() => i !== ativo && irPara(i)}
          >
            <div className="moldura" style={{ ['--tela' as string]: `url(/app/${tela.arquivo}.webp)` }}>
              <span className="status" aria-hidden="true">
                <i>9:41</i>
                <em />
              </span>
              <img
                src={`/app/${tela.arquivo}.webp`}
                width={PRINT_LOJA.largura}
                height={PRINT_LOJA.altura}
                alt={tela.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
        ))}
      </div>

      <div className="painel-info">
        <div className="legenda" aria-live="polite">
          <p className="mono contador">
            <b>{String(ativo + 1).padStart(2, '0')}</b> / {String(telas.length).padStart(2, '0')}
          </p>
          <div key={atual.arquivo} className="texto-ativo">
            <h3 className="h3">{atual.titulo}</h3>
            <p>{atual.texto}</p>
          </div>
        </div>

        <div className="controles">
          <button
            type="button"
            className="seta"
            onClick={() => irPara(ativo - 1)}
            aria-label="Tela anterior"
          >
            &#8592;
          </button>
          <button
            type="button"
            className="seta seta--cheia"
            onClick={() => irPara(ativo + 1)}
            aria-label="Próxima tela"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="pontos" role="tablist" aria-label="Escolher tela">
        {telas.map((tela, i) => (
          <button
            key={tela.arquivo}
            type="button"
            role="tab"
            aria-selected={i === ativo}
            aria-label={tela.titulo}
            className={i === ativo ? 'ativo' : undefined}
            onClick={() => irPara(i)}
          >
            <span key={i === ativo ? `${ativo}-on` : 'off'} style={{ animationDuration: `${INTERVALO}ms` }} />
          </button>
        ))}
      </div>
    </div>
  );
}
