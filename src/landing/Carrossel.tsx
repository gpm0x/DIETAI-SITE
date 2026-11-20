import { useCallback, useEffect, useRef, useState } from 'react';
import { PRINT_LOJA } from './constantes';

export type Tela = {
  arquivo: string;
  titulo: string;
  texto: string;
  alt: string;
};

/**
 * Carrossel de prints reais do app.
 * Rolagem nativa com scroll-snap (funciona no toque e no teclado),
 * setas para o mouse e avanço automático que pausa na interação.
 */
export default function Carrossel({ telas }: { telas: Tela[] }) {
  const trilho = useRef<HTMLDivElement>(null);
  const [inicio, setInicio] = useState(true);
  const [fim, setFim] = useState(false);
  const [pausado, setPausado] = useState(false);

  const medir = useCallback(() => {
    const el = trilho.current;
    if (!el) return;
    setInicio(el.scrollLeft < 8);
    setFim(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  const mover = useCallback(
    (direcao: 1 | -1) => {
      const el = trilho.current;
      if (!el) return;
      const passo = el.querySelector('figure')?.clientWidth ?? 260;
      el.scrollBy({ left: direcao * (passo + 14), behavior: 'smooth' });
    },
    []
  );

  // só anda sozinho enquanto o carrossel está na tela
  const [naTela, setNaTela] = useState(false);
  useEffect(() => {
    const el = trilho.current;
    if (!el || !('IntersectionObserver' in window)) {
      setNaTela(true);
      return;
    }
    const observador = new IntersectionObserver(
      ([entrada]) => setNaTela(entrada.isIntersecting),
      { threshold: 0.35 }
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    medir();
    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (menosMovimento || pausado || !naTela) return;

    const id = window.setInterval(() => {
      const el = trilho.current;
      if (!el) return;
      const acabou = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (acabou) el.scrollTo({ left: 0, behavior: 'smooth' });
      else mover(1);
    }, 3800);

    return () => window.clearInterval(id);
  }, [medir, mover, pausado, naTela]);

  return (
    <div
      className="carrossel"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
      onTouchStart={() => setPausado(true)}
    >
      <div
        className="trilho"
        ref={trilho}
        onScroll={medir}
        tabIndex={0}
        role="group"
        aria-label="Telas do dietAI, role para o lado para ver todas"
      >
        {telas.map((tela) => (
          <figure key={tela.arquivo}>
            <img
              src={`/app/${tela.arquivo}.webp`}
              width={PRINT_LOJA.largura}
              height={PRINT_LOJA.altura}
              alt={tela.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <b>{tela.titulo}</b>
              {tela.texto}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="controles" style={{ marginTop: '18px' }}>
        <button
          type="button"
          className="seta"
          onClick={() => mover(-1)}
          disabled={inicio}
          aria-label="Ver telas anteriores"
        >
          &#8592;
        </button>
        <button
          type="button"
          className="seta"
          onClick={() => mover(1)}
          disabled={fim}
          aria-label="Ver próximas telas"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
