import { useState } from 'react';
import { PRINT_VIDEO } from './constantes';

/**
 * O MP4 tem 23 MB. Ele só é requisitado depois do clique:
 * antes disso a página carrega apenas o poster em WebP (20 KB).
 */
export default function VideoDemonstracao() {
  const [tocando, setTocando] = useState(false);

  return (
    <div className="video-moldura">
      {tocando ? (
        <video
          className="video-peca"
          src="/dietAI.mp4"
          poster="/app/video-poster.webp"
          width={PRINT_VIDEO.largura}
          height={PRINT_VIDEO.altura}
          controls
          autoPlay
          playsInline
        >
          Seu navegador não reproduz vídeo. O arquivo está em /dietAI.mp4.
        </video>
      ) : (
        <button
          type="button"
          className="video-capa"
          onClick={() => setTocando(true)}
          aria-label="Reproduzir a gravação de tela do dietAI, 5 minutos e 33 segundos"
        >
          <img
            className="video-peca"
            src="/app/video-poster.webp"
            width={PRINT_VIDEO.largura}
            height={PRINT_VIDEO.altura}
            alt="Tela do dietAI com o plano de refeições já gerado, dividido por horário"
            loading="lazy"
            decoding="async"
          />
          <span className="video-play" aria-hidden="true">
            &#9654;
          </span>
        </button>
      )}
    </div>
  );
}
