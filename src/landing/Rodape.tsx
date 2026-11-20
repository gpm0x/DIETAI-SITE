import { Link } from 'react-router-dom';
import { INSTAGRAM_URL } from './constantes';

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="wrap">
        <div className="colunas">
          <div>
            <p className="marca" style={{ marginBottom: '12px' }}>
              diet<span className="ai">AI</span>
            </p>
            <p className="nota" style={{ maxWidth: '44ch' }}>
              App que monta a primeira versão do plano alimentar. A revisão e a conduta são do
              nutricionista.
            </p>
          </div>

          <nav className="links" aria-label="Links do rodapé">
            <Link to="/privacidade">Privacidade</Link>
            <span className="nota">
              Termos <span className="pendente">[PREENCHER: link]</span>
            </span>
            <span className="nota">
              Contato <span className="pendente">[PREENCHER: e-mail]</span>
            </span>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </nav>
        </div>

        <p className="aviso">
          O plano gerado pelo dietAI é uma sugestão automática a partir dos dados informados. Não
          é diagnóstico nem prescrição: precisa ser revisado por nutricionista, que responde pela
          conduta. Os dados pessoais são tratados conforme a LGPD.{' '}
          <span className="pendente">[PREENCHER: texto revisado por jurídico e CRN]</span>
        </p>

        <p className="nota" style={{ marginTop: '18px' }}>
          © {ano} dietAI
        </p>
      </div>
    </footer>
  );
}
