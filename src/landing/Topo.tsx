import { useEffect, useState } from 'react';
import BotaoPlayStore from './BotaoPlayStore';

const SECOES = [
  ['#como-funciona', 'Como funciona'],
  ['#dentro-do-app', 'Dentro do app'],
  ['#feedback', 'Feedback'],
  ['#fundadores', 'Fundadores'],
  ['#duvidas', 'Dúvidas'],
];

export default function Topo() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false);
    };
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [aberto]);

  return (
    <header className="dietai-topo" data-rolou={rolou ? 'sim' : 'nao'}>
      <div className="barra">
        <a className="marca" href="#inicio" onClick={() => setAberto(false)}>
          <span className="ponto" aria-hidden="true" />
          diet<span className="ai">AI</span>
        </a>

        <nav aria-label="Seções da página">
          {SECOES.map(([href, titulo]) => (
            <a key={href} href={href}>
              {titulo}
            </a>
          ))}
        </nav>

        <div className="acoes-topo">
          <BotaoPlayStore origem="header" variante="principal" tamanho="pequeno" />

          <button
            type="button"
            className={`hamburguer${aberto ? ' aberto' : ''}`}
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={`menu-mobile${aberto ? ' aberto' : ''}`} hidden={!aberto}>
        <nav aria-label="Seções da página, menu compacto">
          {SECOES.map(([href, titulo], i) => (
            <a key={href} href={href} style={{ transitionDelay: `${0.04 * i}s` }} onClick={() => setAberto(false)}>
              {titulo}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
