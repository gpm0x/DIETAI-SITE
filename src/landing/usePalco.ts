import { useEffect, useRef } from 'react';

/**
 * Paralaxe leve nos tres aparelhos do hero: eles acompanham o ponteiro
 * alguns pixels, em profundidades diferentes. O CSS compoe o deslocamento
 * com a rotacao de cada aparelho atraves das variaveis --px e --py.
 * So no mouse e so quando o usuario nao pediu menos movimento.
 */
export default function usePalco() {
  const palco = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = palco.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const telas = Array.from(el.querySelectorAll<HTMLElement>('.vitrine .aparelho'));
    let pedido = 0;

    const aplicar = (x: number, y: number) => {
      telas.forEach((tela, i) => {
        const forca = i === 1 ? 14 : 8;
        tela.style.setProperty('--px', `${(-x * forca).toFixed(1)}px`);
        tela.style.setProperty('--py', `${(-y * forca * 0.6).toFixed(1)}px`);
      });
    };

    const mover = (evento: PointerEvent) => {
      cancelAnimationFrame(pedido);
      pedido = requestAnimationFrame(() => {
        const caixa = el.getBoundingClientRect();
        aplicar(
          (evento.clientX - caixa.left) / caixa.width - 0.5,
          (evento.clientY - caixa.top) / caixa.height - 0.5
        );
      });
    };

    const sair = () => {
      cancelAnimationFrame(pedido);
      aplicar(0, 0);
    };

    el.addEventListener('pointermove', mover);
    el.addEventListener('pointerleave', sair);
    return () => {
      cancelAnimationFrame(pedido);
      el.removeEventListener('pointermove', mover);
      el.removeEventListener('pointerleave', sair);
    };
  }, []);

  return palco;
}
