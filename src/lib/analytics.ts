/**
 * Eventos de conversao da pagina de vendas.
 *
 * Cada clique em "Baixar na Play Store" dispara `click_play_store` com a
 * origem do botao (header, hero, meio, final), para medir qual CTA converte.
 *
 * Nao ha ferramenta de analytics instalada no projeto. O evento e empurrado
 * para `window.dataLayer` (GTM), repassado ao `gtag` (GA4) quando existir e
 * tambem emitido como CustomEvent, entao basta plugar a tag depois.
 */

export type OrigemCta = 'header' | 'hero' | 'meio' | 'final' | 'rodape';

type Janela = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
};

export function registrarCliquePlayStore(origem: OrigemCta): void {
  if (typeof window === 'undefined') return;

  const janela = window as Janela;
  const payload = { event: 'click_play_store', origem, destino: 'google_play' };

  janela.dataLayer = janela.dataLayer || [];
  janela.dataLayer.push(payload);

  if (typeof janela.gtag === 'function') {
    janela.gtag('event', 'click_play_store', { origem, destino: 'google_play' });
  }

  window.dispatchEvent(new CustomEvent('dietai:cta', { detail: payload }));
}
