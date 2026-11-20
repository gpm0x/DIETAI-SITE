import '../styles/landing.css';
import Topo from '../landing/Topo';
import Rodape from '../landing/Rodape';

export default function PrivacyPolicy() {
  return (
    <div className="dietai">
      <Topo />

      <main className="sec">
        <div className="wrap">
          <p className="rotulo mini">
            <span>Documento</span>
            <span>dietAI</span>
          </p>

          <h1 className="serif h2">Política de Privacidade</h1>

          <div className="texto-legal">
            <p>
              A sua privacidade é importante para nós. É política do dietAI respeitar a sua
              privacidade em relação a qualquer informação sua que possamos coletar no site
              dietai-pearl.vercel.app e no aplicativo dietAI.
            </p>
            <p>
              Solicitamos informações pessoais apenas quando precisamos delas para fornecer um
              serviço. Fazemos isso por meios justos e legais, com o seu conhecimento e
              consentimento, informando por que estamos coletando e como a informação será usada.
            </p>
            <p>
              Retemos as informações coletadas apenas pelo tempo necessário para fornecer o
              serviço solicitado. Quando armazenamos dados, protegemos dentro de meios
              comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação,
              cópia, uso ou modificação não autorizados.
            </p>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com
              terceiros, exceto quando exigido por lei.
            </p>
            <p>
              O site e o aplicativo podem ter links para serviços externos que não são operados
              por nós. Não temos controle sobre o conteúdo e as práticas desses serviços e não
              podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
            <p>
              Você é livre para recusar a solicitação de informações pessoais, entendendo que
              talvez não possamos fornecer alguns dos serviços desejados.
            </p>
            <p>
              O uso continuado do site e do aplicativo será considerado como aceitação das
              práticas em torno de privacidade e informações pessoais. Em caso de dúvida sobre
              como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
            </p>

            <h2 className="serif h3" style={{ marginTop: '34px' }}>
              Pendências desta política
            </h2>
            <p>
              <span className="pendente">
                [PREENCHER: texto revisado pelo jurídico, cobrindo base legal do tratamento
                (LGPD), quais dados o app coleta, onde ficam armazenados, por quanto tempo, com
                quem são compartilhados, como solicitar exclusão e o contato do encarregado de
                dados]
              </span>
            </p>
          </div>
        </div>
      </main>

      <Rodape />
    </div>
  );
}
