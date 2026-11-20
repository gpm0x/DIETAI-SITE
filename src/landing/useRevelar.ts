import { useEffect } from 'react';

/**
 * Movimento ao rolar.
 *
 * - `.rev` (e variantes `.rev-esq`, `.rev-dir`, `.rev-zoom`): o elemento entra
 *   quando ~12% dele já está na tela, para que a animação seja vista.
 * - `.rev-grupo`: os filhos diretos entram em cascata (atraso automático).
 * - `--rolagem` no <html>: progresso da página (0 a 1), usado na barra do topo.
 * - `--palco` no hero: progresso do palco pela tela, usado na inclinação 3D.
 *
 * O conteúdo nasce visível: a classe `js-reveal` só entra no <html> quando há
 * JavaScript e o usuário não pediu menos movimento.
 */
export default function useRevelar() {
  useEffect(() => {
    const raiz = document.documentElement;
    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---------- progresso de rolagem (barra + palco)
    const palco = document.querySelector<HTMLElement>('.palco');
    let pedido = 0;
    const atualizar = () => {
      pedido = 0;
      const max = raiz.scrollHeight - window.innerHeight;
      raiz.style.setProperty('--rolagem', String(max > 0 ? Math.min(1, window.scrollY / max) : 0));
      if (palco && !menosMovimento) {
        const caixa = palco.getBoundingClientRect();
        // 0 quando o topo do palco está no pé da tela, 1 quando chega à metade
        const meio = window.innerHeight / 2;
        const p = 1 - Math.min(1, Math.max(0, (caixa.top - meio * 0.6) / (window.innerHeight - meio * 0.6)));
        palco.style.setProperty('--palco', p.toFixed(3));
      }
    };
    const aoRolar = () => {
      if (!pedido) pedido = requestAnimationFrame(atualizar);
    };
    atualizar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);

    const limparRolagem = () => {
      cancelAnimationFrame(pedido);
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRolar);
    };

    if (menosMovimento || !('IntersectionObserver' in window)) return limparRolagem;

    // ---------- cascata automática nos grupos
    document.querySelectorAll<HTMLElement>('.rev-grupo').forEach((grupo) => {
      Array.from(grupo.children).forEach((filho, i) => {
        (filho as HTMLElement).style.setProperty('--i', String(i));
      });
    });

    const alvos = Array.from(
      document.querySelectorAll<HTMLElement>('.rev, .rev-esq, .rev-dir, .rev-zoom, .rev-grupo')
    );
    raiz.classList.add('js-reveal');

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observador.unobserve(entrada.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.01 }
    );
    alvos.forEach((alvo) => observador.observe(alvo));

    return () => {
      limparRolagem();
      observador.disconnect();
      raiz.classList.remove('js-reveal');
    };
  }, []);
}
