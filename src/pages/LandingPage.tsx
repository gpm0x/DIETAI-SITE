import { useEffect } from 'react';
import '../styles/landing.css';

import Topo from '../landing/Topo';
import BotaoPlayStore, { SeloPlayStore } from '../landing/BotaoPlayStore';
import VideoDemonstracao from '../landing/VideoDemonstracao';
import TelasScroll from '../landing/TelasScroll';
import Rodape from '../landing/Rodape';
import useRevelar from '../landing/useRevelar';
import usePalco from '../landing/usePalco';
import {
  FEEDBACKS,
  FUNDADORES,
  PERGUNTAS,
  PRINT_LOJA,
  TELAS_DO_APP,
} from '../landing/constantes';

function Pendente({ children }: { children: string }) {
  return <span className="pendente">{children}</span>;
}

function Rotulo({ children }: { children: string }) {
  return <p className="mono" style={{ color: 'var(--mint-texto)' }}>{children}</p>;
}

/** Quebra o texto em palavras animadas uma a uma (o leitor de tela lê o aria-label do H1). */
function Palavras({ texto, inicio = 0 }: { texto: string; inicio?: number }) {
  const palavras = texto.split(' ');
  return (
    <>
      {palavras.map((palavra, i) => (
        <span key={i} className="palavra" style={{ ['--i' as string]: inicio + i }}>
          {palavra}
          {i < palavras.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </>
  );
}

const CAPITULOS = [
  ['0:00', 'Cadastro'],
  ['0:48', 'Questionário, três etapas'],
  ['1:18', 'Plano pronto na tela'],
  ['2:14', 'Plano do dia, refeição por refeição'],
  ['3:02', 'Hábitos, água e progresso'],
  ['5:02', 'Dieta reescrita depois do ajuste'],
];

const TIRA = [
  'Questionário em 3 etapas',
  'Plano dividido por refeição',
  'Macros em cada refeição',
  'Ajuste por conversa com a IA',
  'Registro de água e de peso',
  'Sequência de hábitos',
  'Android, na Play Store',
];

/** Links internos (#secao) com rolagem suave via JS, sem `scroll-behavior` no CSS (que atrapalha o ScrollTrigger). */
function useAncorasSuaves() {
  useEffect(() => {
    const clique = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href')!.slice(1);
      const alvo = id ? document.getElementById(id) : null;
      if (!alvo) return;
      e.preventDefault();
      const menos = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      alvo.scrollIntoView({ behavior: menos ? 'auto' : 'smooth' });
      history.replaceState(null, '', `#${id}`);
    };
    document.addEventListener('click', clique);
    return () => document.removeEventListener('click', clique);
  }, []);
}

export default function LandingPage() {
  useRevelar();
  useAncorasSuaves();
  const palco = usePalco();

  return (
    <div className="dietai" id="inicio">
      <div className="progresso" aria-hidden="true" />
      <Topo />

      <main>
        {/* ====================================================== HERO */}
        <section className="hero">
          <div className="brilho" aria-hidden="true" />

          <div className="wrap">
            <div className="topo-texto">
              <p className="etiqueta entra entra-1">
                <b>Android</b>
                <span>Disponível na Google Play</span>
              </p>

              <h1 className="h1" aria-label="Dieta montada em minutos. Decisão clínica continua sua.">
                <span aria-hidden="true">
                  <Palavras texto="Dieta montada em minutos." />{' '}
                  <span className="apagado">
                    <Palavras texto="Decisão clínica continua sua." inicio={4} />
                  </span>
                </span>
              </h1>

              <p className="lead entra entra-3">
                O dietAI faz os cálculos e monta a primeira versão do plano. Você revisa, ajusta e
                assina. Mais tempo de consulta, menos tempo em planilha.
              </p>

              <div className="acoes entra entra-4">
                <BotaoPlayStore origem="hero" texto="Testar no Android" comSeta />
                <a className="btn btn--vazio" href="#como-funciona">
                  Ver como funciona
                </a>
              </div>

              <div className="micro entra entra-5">
                <SeloPlayStore origem="hero" />
                <span className="nota">
                  <Pendente>[PREENCHER: o que é grátis / se pede cartão]</Pendente>
                </span>
              </div>
            </div>
          </div>

          <div className="wrap">
            <div className="palco entra entra-6" ref={palco}>
              <div className="painel">
                <div className="grade" aria-hidden="true" />
                <div className="aro" aria-hidden="true" />

                <div className="vitrine">
                  <div className="aparelho aparelho--esq" style={{ ['--tela' as string]: 'url(/app/resumo-diario.webp)' }}>
                    <span className="status" aria-hidden="true">
                      <i>9:41</i>
                      <em />
                    </span>
                    <img
                      src="/app/resumo-diario.webp"
                      width={PRINT_LOJA.largura}
                      height={PRINT_LOJA.altura}
                      alt="Resumo diário do dietAI com refeições concluídas, hidratação e peso atual"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="aparelho aparelho--centro" style={{ ['--tela' as string]: 'url(/app/plano-do-dia.webp)' }}>
                    <span className="status" aria-hidden="true">
                      <i>9:41</i>
                      <em />
                    </span>
                    <img
                      src="/app/plano-do-dia.webp"
                      width={PRINT_LOJA.largura}
                      height={PRINT_LOJA.altura}
                      alt="Tela inicial do dietAI com perfil, IMC, altura, peso e o plano do dia dividido em quatro refeições"
                      {...{ fetchpriority: 'high' }}
                      decoding="async"
                    />
                  </div>

                  <div className="aparelho aparelho--dir" style={{ ['--tela' as string]: 'url(/app/progresso-metas.webp)' }}>
                    <span className="status" aria-hidden="true">
                      <i>9:41</i>
                      <em />
                    </span>
                    <img
                      src="/app/progresso-metas.webp"
                      width={PRINT_LOJA.largura}
                      height={PRINT_LOJA.altura}
                      alt="Tela de progresso do dietAI com peso atual, meta de peso, altura e IMC"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <p className="ficha ficha--a">
                    <span className="ic" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                    </span>
                    <span>
                      <b>Plano com horário e porção</b>
                      <small>4 refeições no dia</small>
                    </span>
                  </p>
                  <p className="ficha ficha--b">
                    <span className="ic" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                    </span>
                    <span>
                      <b>Você revisa antes de aprovar</b>
                      <small>nada vira conduta sozinho</small>
                    </span>
                  </p>
                </div>
              </div>

              <p className="legenda-painel">
                <span className="pt" aria-hidden="true" />
                <b>Prints reais do app</b>
                <span>Versão Android publicada na Google Play, consultada em 19/11/2026</span>
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================== TIRA */}
        <div className="tira" aria-hidden="true">
          <div className="pista">
            {[0, 1].map((volta) => (
              <div key={volta} style={{ display: 'flex' }}>
                {TIRA.map((item) => (
                  <span className="item" key={`${volta}-${item}`}>
                    <i>&#9679;</i>
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ====================================== A IA MONTA, VOCÊ DECIDE */}
        <section className="sec">
          <div className="wrap">
            <div className="centro rev" style={{ maxWidth: '58ch', marginInline: 'auto' }}>
              <Rotulo>01 / Antes de tudo</Rotulo>
              <h2 className="h2" style={{ marginTop: '14px' }}>
                A IA monta. <span className="risco" style={{ color: 'var(--mint-texto)' }}>Você decide.</span>
              </h2>
              <p className="lead" style={{ marginTop: '18px' }}>
                A primeira versão sai em segundos. Ela é um rascunho técnico, não uma prescrição.
                Quem confere e assina é você.
              </p>
            </div>

            <div className="bento rev-grupo" style={{ marginTop: 'clamp(32px,4vw,52px)' }}>
              <article className="cartao cartao--escuro cartao--largo">
                <p className="selo-num">01</p>
                <h3 className="h3">Sua conduta continua sua</h3>
                <p>
                  O app sugere refeições, horários e quantidades. Você troca o que não serve,
                  corrige a porção e aprova. Nada vira conduta antes da sua revisão. O próprio app
                  avisa isso no fim de cada plano:
                </p>
                <div className="recorte">
                  <img
                    src="/app/aviso-ia.webp"
                    width={362}
                    height={125}
                    alt="Aviso dentro do app: este plano foi gerado automaticamente pela IA com base nas suas informações e objetivos, e você pode ajustar as refeições depois no app"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>

              <article className="cartao cartao--estreito">
                <p className="selo-num">02</p>
                <h3 className="h3">Menos trabalho braçal</h3>
                <p>
                  Cálculo de necessidade energética, distribuição de macros e montagem das refeições
                  saem prontos. Sobra tempo para anamnese, vínculo e retorno.
                </p>
              </article>

              <article className="cartao cartao--mint cartao--meio">
                <p className="selo-num">03</p>
                <h3 className="h3">Diretrizes como base</h3>
                <p>
                  <Pendente>
                    [PREENCHER: quais diretrizes a IA usa como referência, por exemplo DRIs e Guia
                    Alimentar para a População Brasileira]
                  </Pendente>
                </p>
              </article>

              <article className="cartao cartao--meio">
                <p className="selo-num">04</p>
                <h3 className="h3">O que o app não faz</h3>
                <p>
                  Não avalia exame, não diagnostica e não substitui consulta. O questionário atual
                  não pergunta patologia, alergia ou medicamento em uso.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================== COMO FUNCIONA */}
        <section className="sec" id="como-funciona" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="centro rev" style={{ maxWidth: '54ch', marginInline: 'auto' }}>
              <Rotulo>02 / Como funciona</Rotulo>
              <h2 className="h2" style={{ marginTop: '14px' }}>
                Três passos, um plano na tela.
              </h2>
            </div>

            <div className="passos rev-grupo" style={{ marginTop: 'clamp(32px,4vw,52px)' }}>
              <article className="passo-cartao">
                <div className="cabeca">
                  <span className="bola" aria-hidden="true">
                    1
                  </span>
                  <h3 className="h3">Conte o caso</h3>
                </div>
                <p className="nota" style={{ fontSize: '0.97rem' }}>
                  Idade, peso, altura, gênero, nível de atividade e objetivo. São três telas curtas,
                  e o app mostra uma revisão dos dados antes de gerar qualquer coisa.
                </p>
                <div className="tela">
                  <img
                    src="/app/passo-1-dados.webp"
                    width={362}
                    height={400}
                    alt="Etapa 2 de 3 do formulário do dietAI, com gênero feminino, nível moderadamente ativo e objetivo ganhar massa muscular preenchidos"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>

              <article className="passo-cartao">
                <div className="cabeca">
                  <span className="bola" aria-hidden="true">
                    2
                  </span>
                  <h3 className="h3">Receba a primeira versão</h3>
                </div>
                <p className="nota" style={{ fontSize: '0.97rem' }}>
                  O plano volta dividido por refeição, com horário, itens e os macros de cada uma. É
                  daí que você parte, em vez de partir da planilha em branco.
                </p>
                <div className="tela">
                  <img
                    src="/app/passo-2-plano.webp"
                    width={362}
                    height={520}
                    alt="Plano de refeições gerado pela IA: café da manhã às 7h30 e almoço às 12h30, cada um com itens e o total de proteínas, carboidratos e gorduras"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>

              <article className="passo-cartao">
                <div className="cabeca">
                  <span className="bola" aria-hidden="true">
                    3
                  </span>
                  <h3 className="h3">Ajuste e acompanhe</h3>
                </div>
                <p className="nota" style={{ fontSize: '0.97rem' }}>
                  Paciente não toma leite? Você pede a troca em conversa com a IA, lê o plano novo
                  item a item e só então confirma a atualização.
                </p>
                <div className="tela">
                  <img
                    src="/app/passo-3-ajuste.webp"
                    width={362}
                    height={345}
                    alt="A IA pergunta se o plano novo está de acordo e oferece os botões atualizar dieta e gerar outra dieta"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            </div>

            <p className="nota rev" style={{ marginTop: '30px', maxWidth: '70ch' }}>
              Medido no vídeo desta página: do início do cadastro até o plano na tela, 1 min 18 s.{' '}
              <Pendente>
                [CONFIRMAR: se esse número pode ir ao ar e em que condições foi medido]
              </Pendente>
            </p>
          </div>
        </section>

        {/* ===================================================== VÍDEO */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="video-cartao rev-zoom">
              <div className="conteudo">
                <div>
                  <p className="mono" style={{ color: 'var(--mint)' }}>
                    03 / Demonstração
                  </p>
                  <h2 className="h2" style={{ marginTop: '14px' }}>
                    O fluxo inteiro, sem corte.
                  </h2>
                  <p className="lead" style={{ marginTop: '18px' }}>
                    Gravação de tela do app em Android: cadastro, questionário, plano gerado, ajuste
                    por conversa e acompanhamento. 5 min 33 s. O vídeo só começa a baixar quando
                    você clica.
                  </p>

                  <ul className="capitulos">
                    {CAPITULOS.map(([tempo, titulo]) => (
                      <li key={tempo}>
                        <span>{tempo}</span>
                        <b>{titulo}</b>
                      </li>
                    ))}
                  </ul>

                  <p className="nota" style={{ marginTop: '22px', color: '#8E9A97' }}>
                    O logo que aparece dentro do app é diferente do ícone publicado na Play Store e
                    da marca usada neste site.{' '}
                    <Pendente>[CONFIRMAR: qual identidade é a oficial]</Pendente>
                  </p>
                </div>

                <VideoDemonstracao />
              </div>
            </div>
          </div>
        </section>

        {/* =============================================== COMPARATIVO */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="centro rev" style={{ maxWidth: '54ch', marginInline: 'auto' }}>
              <Rotulo>04 / Comparativo</Rotulo>
              <h2 className="h2" style={{ marginTop: '14px' }}>
                Planilha e dietAI, lado a lado.
              </h2>
            </div>

            <div
              className="cartao rev"
              style={{ marginTop: 'clamp(32px,4vw,48px)', padding: 'clamp(10px,2vw,22px)' }}
            >
              <table className="tabela">
                <thead>
                  <tr>
                    <th scope="col">Etapa</th>
                    <th scope="col">Na planilha</th>
                    <th scope="col">No dietAI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Primeira versão do plano</th>
                    <td>Você monta do zero, refeição por refeição.</td>
                    <td className="destaque">Sai pronta em segundos, com horário e itens por refeição.</td>
                  </tr>
                  <tr>
                    <th scope="row">Cálculo de macros</th>
                    <td>Fórmula digitada à mão, uma célula por vez.</td>
                    <td className="destaque">Calculado pelo app. Você confere na tela.</td>
                  </tr>
                  <tr>
                    <th scope="row">Troca de alimento</th>
                    <td>Refaz a conta e a linha inteira.</td>
                    <td className="destaque">Você pede a troca e revisa o que mudou antes de confirmar.</td>
                  </tr>
                  <tr>
                    <th scope="row">Onde o plano fica</th>
                    <td>PDF ou foto da planilha, no WhatsApp.</td>
                    <td className="destaque">Salvo no app, no celular de quem respondeu o questionário.</td>
                  </tr>
                  <tr>
                    <th scope="row">Acompanhamento</th>
                    <td>Depende do paciente mandar notícia.</td>
                    <td className="destaque">O app registra refeições concluídas, água e peso.</td>
                  </tr>
                  <tr>
                    <th scope="row">Responsabilidade técnica</th>
                    <td>Sua.</td>
                    <td className="destaque">Sua. O plano é sugestão até você revisar.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="nota rev" style={{ marginTop: '18px', maxWidth: '70ch' }}>
              Comparação feita com a versão Android publicada na Play Store, consultada em 19 de
              novembro de 2026, e com a gravação de tela desta página.
            </p>
          </div>
        </section>

        {/* ============================================ DENTRO DO APP */}
        <section className="sec" id="dentro-do-app" style={{ paddingTop: 0 }}>
          <TelasScroll
            telas={TELAS_DO_APP}
            cabecalho={
              <div className="ts-cabeca rev">
                <Rotulo>05 / Dentro do app</Rotulo>
                <h2 className="h2" style={{ marginTop: '14px' }}>
                  O que acontece <span className="risco">depois que o plano sai.</span>
                </h2>
                <p className="lead" style={{ marginTop: '16px' }}>
                  O plano não termina na consulta. Quem recebeu o plano marca as refeições feitas,
                  registra água e atualiza o peso.
                </p>
              </div>
            }
          />

          <div className="wrap">
            <p className="nota centro rev" style={{ marginTop: '28px', maxWidth: '74ch', marginInline: 'auto' }}>
              Hoje o dietAI é um app de uso individual: cada pessoa responde o questionário no
              próprio celular. Não existe painel para o profissional acompanhar vários pacientes em
              um só lugar.{' '}
              <Pendente>[CONFIRMAR: se e quando um painel profissional entra no roteiro]</Pendente>
            </p>
          </div>
        </section>

        {/* ================================================== FEEDBACK */}
        <section className="sec" id="feedback" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="centro rev" style={{ maxWidth: '58ch', marginInline: 'auto' }}>
              <Rotulo>06 / Feedback do app</Rotulo>
              <h2 className="h2" style={{ marginTop: '14px' }}>
                O que diz <span className="risco">quem já testou.</span>
              </h2>
              <p className="lead" style={{ marginTop: '16px' }}>
                Mensagens enviadas por pessoas que baixaram o dietAI e usaram o app no próprio
                celular. Texto do jeito que chegou, sem nome, para preservar quem escreveu.
              </p>
            </div>

            <div className="feedback rev" style={{ marginTop: 'clamp(30px,4vw,48px)' }}>
              {[FEEDBACKS, [...FEEDBACKS].reverse()].map((itens, linha) => (
                <div
                  className={linha === 0 ? 'fila' : 'fila fila--volta'}
                  key={linha}
                  aria-hidden={linha === 1 ? true : undefined}
                >
                  {[0, 1].map((volta) => (
                    <div key={volta} aria-hidden={volta === 1 ? true : undefined}>
                      {itens.map((texto, i) => {
                        const tom = (i + linha) % 3;
                        return (
                          <figure
                            key={`${volta}-${i}`}
                            className={`balao${tom === 1 ? ' balao--escuro' : tom === 2 && i % 2 === 0 ? ' balao--mint' : ''}`}
                          >
                            <blockquote>{texto}</blockquote>
                            <figcaption>
                              <span className="av" aria-hidden="true">
                                {i + 1}
                              </span>
                              Usuário do dietAI · Android
                            </figcaption>
                          </figure>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="nota centro rev" style={{ marginTop: '22px' }}>
              Relatos de usuários do app, não de profissionais de saúde.{' '}
              <Pendente>[PREENCHER: nota na Play Store, número de avaliações e data da consulta]</Pendente>
            </p>
          </div>
        </section>

        {/* ===================================================== PREÇO */}
        <section className="sec" id="preco" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="centro rev" style={{ maxWidth: '50ch', marginInline: 'auto' }}>
              <Rotulo>07 / Preço</Rotulo>
              <h2 className="h2" style={{ marginTop: '14px' }}>
                Quanto custa.
              </h2>
            </div>

            <div
              className="bloco-pendente rev"
              style={{ marginTop: 'clamp(26px,3vw,40px)', maxWidth: '74ch', marginInline: 'auto' }}
            >
              <Pendente>[PREENCHER: o que é gratuito]</Pendente>
              <Pendente>[PREENCHER: o que é pago e quanto custa]</Pendente>
              <Pendente>[PREENCHER: como funciona o teste e por quanto tempo]</Pendente>
              <p className="nota">
                Enquanto o plano comercial não estiver fechado, a página não anuncia valor. Baixar
                na Play Store continua sendo o caminho para testar.
              </p>
            </div>

            <p className="centro rev" style={{ marginTop: '28px' }}>
              <BotaoPlayStore origem="meio" comSeta />
            </p>
          </div>
        </section>

        {/* ================================================ FUNDADORES */}
        <section className="sec" id="fundadores" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="centro rev" style={{ maxWidth: '58ch', marginInline: 'auto' }}>
              <Rotulo>08 / Quem faz</Rotulo>
              <h2 className="h2" style={{ marginTop: '14px' }}>
                Os fundadores <span className="risco">do dietAI.</span>
              </h2>
              <p className="lead" style={{ marginTop: '16px' }}>
                O dietAI foi criado por Eliel Nicolas e Gabriel Mota. São eles que respondem pelo
                produto, leem o feedback que chega e decidem o que entra na próxima versão.
              </p>
            </div>

            <div className="fundadores" style={{ marginTop: 'clamp(30px,4vw,48px)' }}>
              {FUNDADORES.map((f, i) => (
                <article key={f.nome} className={`fundador ${i === 0 ? 'rev-esq' : 'rev-dir'}`}>
                  <div className={`retrato retrato--${f.recorte ? 'recorte' : 'foto'}`}>
                    <img
                      src={f.foto}
                      width={f.dimensoes[0]}
                      height={f.dimensoes[1]}
                      alt={`Foto de ${f.nome}, ${f.papel} do dietAI`}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="identidade">
                      <p className="mono papel">{f.papel}</p>
                      <h3 className="h3">{f.nome}</h3>
                    </div>
                  </div>
                  <div className="corpo">
                    <p>{f.bio.startsWith('[') ? <Pendente>{f.bio}</Pendente> : f.bio}</p>
                    {f.tags.length > 0 && (
                      <div className="tags">
                        {f.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="manifesto rev">
              <p className="mono" style={{ color: 'var(--mint-texto)', fontSize: 'var(--t-mini)' }}>
                Por que existe
              </p>
              <p>
                Montar a primeira versão de uma dieta não deveria levar uma tarde de planilha. O
                dietAI faz essa parte para sobrar tempo para o que precisa de gente.
              </p>
              <Pendente>[CONFIRMAR: a história da empresa]</Pendente>
            </div>
          </div>
        </section>

        {/* =================================================== DÚVIDAS */}
        <section className="sec" id="duvidas" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="centro rev" style={{ maxWidth: '54ch', marginInline: 'auto' }}>
              <Rotulo>09 / Dúvidas</Rotulo>
              <h2 className="h2" style={{ marginTop: '14px' }}>
                Perguntas que chegam antes do download.
              </h2>
            </div>

            <div
              className="faq rev-grupo"
              style={{ marginTop: 'clamp(28px,3vw,42px)', marginInline: 'auto' }}
            >
              {PERGUNTAS.map((item, indice) => (
                <details key={item.id} open={indice === 0}>
                  <summary>
                    {item.pergunta}
                    <span className="cruz" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="resposta">
                    {item.resposta.map((paragrafo) => (
                      <p key={paragrafo}>
                        {paragrafo.startsWith('[') ? <Pendente>{paragrafo}</Pendente> : paragrafo}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= CTA FINAL */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="cta rev-zoom">
              <div className="conteudo">
                <div>
                  <p className="mono" style={{ color: 'var(--mint)' }}>
                    10 / Testar
                  </p>
                  <h2 className="h2" style={{ marginTop: '14px' }}>
                    Teste com seu próximo paciente.
                  </h2>
                  <p className="lead" style={{ marginTop: '18px' }}>
                    Monte um plano de verdade em minutos e decida se vale a pena. Leva o tempo de
                    uma anamnese curta.
                  </p>

                  <div className="acoes">
                    <BotaoPlayStore origem="final" texto="Baixar na Play Store" comSeta />
                    <SeloPlayStore origem="final" />
                  </div>

                  <p className="nota" style={{ marginTop: '22px', color: '#8E9A97' }}>
                    Disponível para Android.{' '}
                    <Pendente>[CONFIRMAR: previsão de iOS para publicar "iOS em breve"]</Pendente>
                  </p>
                </div>

                <img
                  className="fone-cta"
                  src="/app/itens-refeicao.webp"
                  width={PRINT_LOJA.largura}
                  height={PRINT_LOJA.altura}
                  alt="Tela de registro de refeição do dietAI com os itens da refeição e as calorias de cada um"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}
