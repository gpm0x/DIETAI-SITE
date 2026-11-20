import { PLAY_STORE_URL } from './constantes';
import { registrarCliquePlayStore, type OrigemCta } from '../lib/analytics';

type Props = {
  origem: OrigemCta;
  texto?: string;
  variante?: 'mint' | 'principal' | 'vazio';
  tamanho?: 'normal' | 'pequeno';
  comSeta?: boolean;
};

/** CTA primário da página. Todo clique é medido com a origem do botão. */
export default function BotaoPlayStore({
  origem,
  texto = 'Baixar na Play Store',
  variante = 'mint',
  tamanho = 'normal',
  comSeta = false,
}: Props) {
  const classe = ['btn', `btn--${variante}`, tamanho === 'pequeno' ? 'btn--pequeno' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <a
      className={classe}
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={origem}
      onClick={() => registrarCliquePlayStore(origem)}
    >
      {texto}
      {comSeta && (
        <span className="bolha" aria-hidden="true">
          &#8594;
        </span>
      )}
    </a>
  );
}

/** Selo oficial da Google Play, servido localmente. */
export function SeloPlayStore({ origem }: { origem: OrigemCta }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={`${origem}-selo`}
      onClick={() => registrarCliquePlayStore(origem)}
      aria-label="Baixar o dietAI na Google Play"
    >
      <img
        className="selo"
        src="/badge-google-play.webp"
        width={388}
        height={150}
        alt="Disponível no Google Play"
        loading="lazy"
      />
    </a>
  );
}
