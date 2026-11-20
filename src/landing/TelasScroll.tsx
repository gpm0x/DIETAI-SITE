import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Carrossel, { type Tela } from './Carrossel';
import { PRINT_LOJA } from './constantes';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/** Quanto de rolagem (em alturas de tela) cada troca de tela consome. */
const ROLAGEM_POR_TELA = 0.8;

/**
 * "Dentro do app" guiado pela rolagem (GSAP ScrollTrigger).
 *
 * A seção fica presa na tela enquanto a rolagem troca as telas do app,
 * uma por vez, com encaixe em cada tela. Ao lado, a lista das etapas acende
 * a tela atual e uma barra mostra o progresso.
 *
 * Com `prefers-reduced-motion: reduce`, mostra o carrossel comum.
 */
export default function TelasScroll({ telas, cabecalho }: { telas: Tela[]; cabecalho: ReactNode }) {
  const [semMovimento] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const raiz = useRef<HTMLDivElement>(null);
  const barra = useRef<HTMLSpanElement>(null);
  const gatilho = useRef<ScrollTrigger | null>(null);
  const ativoRef = useRef(0);
  const [ativo, setAtivo] = useState(0);
  const total = telas.length;

  useLayoutEffect(() => {
    if (semMovimento || !raiz.current) return;

    const ctx = gsap.context(() => {
      const quadros = gsap.utils.toArray<HTMLElement>('.ts-tela');
      gsap.set(quadros, { autoAlpha: 0, yPercent: 16, scale: 0.92 });
      gsap.set(quadros[0], { autoAlpha: 1, yPercent: 0, scale: 1 });

      const linha = gsap.timeline({
        defaults: { duration: 1, ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: raiz.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * ROLAGEM_POR_TELA * (total - 1)}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (total - 1),
            directional: false,
            duration: { min: 0.25, max: 0.7 },
            delay: 0.08,
            ease: 'power2.inOut',
          },
          onUpdate: (st) => {
            if (barra.current) barra.current.style.transform = `scaleX(${st.progress})`;
            const i = Math.round(st.progress * (total - 1));
            if (i !== ativoRef.current) {
              ativoRef.current = i;
              setAtivo(i);
            }
          },
        },
      });

      for (let i = 1; i < total; i++) {
        linha
          .to(quadros[i - 1], { autoAlpha: 0, yPercent: -12, scale: 0.92 }, i - 1)
          .to(quadros[i], { autoAlpha: 1, yPercent: 0, scale: 1 }, i - 1);
      }
      // o aparelho balança de leve enquanto as telas passam
      linha.fromTo(
        '.ts-aparelho',
        { rotate: -2.5 },
        { rotate: 2.5, duration: total - 1, ease: 'sine.inOut' },
        0
      );
      // luz de fundo acompanha
      linha.fromTo('.ts-halo', { xPercent: -8 }, { xPercent: 8, duration: total - 1, ease: 'none' }, 0);

      gatilho.current = linha.scrollTrigger ?? null;
    }, raiz);

    // fontes, imagens e o vídeo mudam a altura do que vem antes da seção:
    // sempre que a página muda de altura, recalcula onde o pin começa e termina
    let espera = 0;
    let ultimaAltura = document.documentElement.scrollHeight;
    const recalcular = () => {
      window.clearTimeout(espera);
      espera = window.setTimeout(() => {
        ultimaAltura = document.documentElement.scrollHeight;
        ScrollTrigger.refresh();
      }, 150);
    };
    const observador = new ResizeObserver(() => {
      if (document.documentElement.scrollHeight !== ultimaAltura) recalcular();
    });
    observador.observe(document.body);
    document.fonts?.ready.then(recalcular);
    window.addEventListener('load', recalcular);

    return () => {
      window.clearTimeout(espera);
      observador.disconnect();
      window.removeEventListener('load', recalcular);
      gatilho.current = null;
      ctx.revert();
    };
  }, [semMovimento, total]);

  const irPara = (i: number) => {
    const st = gatilho.current;
    if (!st) return;
    const destino = st.start + ((st.end - st.start) * i) / (total - 1);
    const passos = Math.abs(i - ativoRef.current);
    gsap.to(window, {
      scrollTo: destino,
      duration: Math.min(1.4, 0.45 + passos * 0.15),
      ease: 'power2.inOut',
      overwrite: true,
    });
  };

  if (semMovimento) {
    return (
      <div className="wrap">
        <div className="centro" style={{ maxWidth: '58ch', marginInline: 'auto' }}>
          {cabecalho}
        </div>
        <div style={{ marginTop: 'clamp(26px,3vw,40px)' }}>
          <Carrossel telas={telas} />
        </div>
      </div>
    );
  }

  const atual = telas[ativo];

  return (
    <div className="telas-scroll" ref={raiz}>
      <div className="ts-grade">
        <div className="ts-texto">
          {cabecalho}

          <ol className="ts-lista">
            {telas.map((tela, i) => (
              <li key={tela.arquivo} className={i === ativo ? 'ativo' : i < ativo ? 'passou' : undefined}>
                <button type="button" onClick={() => irPara(i)} aria-current={i === ativo ? 'step' : undefined}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="txt">
                    <b>{tela.titulo}</b>
                    <small>{tela.texto}</small>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="ts-palco">
          <div className="ts-halo" aria-hidden="true" />

          <div
            className="ts-aparelho"
            style={{ ['--tela' as string]: `url(/app/${atual.arquivo}.webp)` }}
          >
            <span className="status" aria-hidden="true">
              <i>9:41</i>
              <em />
            </span>
            <div className="ts-visor">
              {telas.map((tela, i) => (
                <img
                  key={tela.arquivo}
                  className="ts-tela"
                  src={`/app/${tela.arquivo}.webp`}
                  width={PRINT_LOJA.largura}
                  height={PRINT_LOJA.altura}
                  alt={tela.alt}
                  aria-hidden={i === ativo ? undefined : true}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>

          <div className="ts-rodape">
            <p className="mono ts-contador">
              <b>{String(ativo + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')}
            </p>
            <span className="ts-barra" aria-hidden="true">
              <span ref={barra} />
            </span>
          </div>

          {/* no celular a lista some; a legenda da tela atual fica aqui */}
          <div className="ts-legenda" aria-live="polite">
            <b key={atual.arquivo}>{atual.titulo}</b>
            <small>{atual.texto}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
