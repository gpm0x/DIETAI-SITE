export const SITE_URL = 'https://dietai-pearl.vercel.app';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.dietia.app';

export const INSTAGRAM_URL = 'https://www.instagram.com/dietal_oficial/';

/** Dimensões reais dos prints, usadas em width/height para evitar CLS. */
export const PRINT_LOJA = { largura: 720, altura: 1527 };
export const PRINT_VIDEO = { largura: 382, altura: 786 };

export type TelaDoApp = {
  arquivo: string;
  titulo: string;
  texto: string;
  alt: string;
};

/** Telas do novo design do app (prints de 20/11/2026, em public/app). */
export const TELAS_DO_APP: TelaDoApp[] = [
  {
    arquivo: 'login',
    titulo: 'Entrada',
    texto: 'Acesso com e-mail ou com a conta Google.',
    alt: 'Tela de boas-vindas do dietAI com login por e-mail e senha e o botão continuar com Google',
  },
  {
    arquivo: 'cadastro',
    titulo: 'Criar conta',
    texto: 'Cadastro em três passos, com o que o app entrega logo no topo.',
    alt: 'Tela de criar conta do dietAI, passo 1 de 3, com plano personalizado, acompanhamento, IA e hidratação',
  },
  {
    arquivo: 'dados-pessoais',
    titulo: 'Dados do perfil',
    texto: 'Nome, idade, peso e altura para calcular o plano.',
    alt: 'Etapa vamos começar do dietAI pedindo nome completo, idade, peso e altura',
  },
  {
    arquivo: 'nivel-atividade',
    titulo: 'Gênero e atividade',
    texto: 'Do sedentário ao atleta, para acertar o gasto do dia.',
    alt: 'Etapa quase lá do dietAI com escolha de gênero e nível de atividade, de sedentário a atleta',
  },
  {
    arquivo: 'inicio',
    titulo: 'Plano de hoje',
    texto: 'Próxima refeição, calorias do dia e a semana em sequência.',
    alt: 'Tela inicial do dietAI com o plano de hoje, próxima refeição, calorias, progresso da semana e jornada',
  },
  {
    arquivo: 'refeicoes',
    titulo: 'Refeições e macros',
    texto: 'Calorias do dia e quanto falta de proteína, carboidrato e gordura.',
    alt: 'Tela de refeições do dietAI com calorias de hoje, macronutrientes e os botões buscar alimento e manual',
  },
  {
    arquivo: 'chat-ia',
    titulo: 'Ajuste por conversa',
    texto: 'Mudou a rotina ou o orçamento? A IA reescreve o plano.',
    alt: 'Assistente nutricional do dietAI com resumo do dia e sugestões rápidas de perguntas para a IA',
  },
  {
    arquivo: 'progresso',
    titulo: 'Progresso e IMC',
    texto: 'Peso atual, meta, quanto falta e a faixa saudável.',
    alt: 'Tela de progresso do dietAI com peso de hoje, meta de peso, porcentagem da meta e IMC',
  },
  {
    arquivo: 'configuracoes',
    titulo: 'Perfil e lembretes',
    texto: 'Conta, sequência de dias e lembretes de refeição e água.',
    alt: 'Tela de configurações do dietAI com perfil, sequência, hidratação e lembretes de refeição e água',
  },
];

export type Pergunta = {
  id: string;
  pergunta: string;
  resposta: string[];
};

export const PERGUNTAS: Pergunta[] = [
  {
    id: 'substitui',
    pergunta: 'O dietAI substitui o nutricionista?',
    resposta: [
      'Não. O app monta uma sugestão de plano a partir dos dados informados. A avaliação clínica, a prescrição dietética e a responsabilidade técnica continuam com o nutricionista.',
      'No Brasil, a prescrição dietética é, em regra, atividade privativa do nutricionista.',
    ],
  },
  {
    id: 'editar',
    pergunta: 'Posso editar as dietas geradas?',
    resposta: [
      'Sim. Dentro do app você conversa com a IA para pedir ajustes (trocar um alimento, mudar a quantidade, remover algo) e revisa o plano novo antes de confirmar a atualização.',
      '[CONFIRMAR: se existe edição manual item a item, além do ajuste por conversa]',
    ],
  },
  {
    id: 'preco',
    pergunta: 'Quanto custa?',
    resposta: [
      'Há dois planos: mensal, por R$ 19,99 por mês, e anual, por R$ 239 por ano (o equivalente a R$ 19,92 por mês).',
      '[PREENCHER: o que é gratuito e o que entra nos planos pagos]',
    ],
  },
  {
    id: 'lgpd',
    pergunta: 'Os dados dos meus pacientes ficam seguros (LGPD)?',
    resposta: [
      '[PREENCHER: texto revisado pelo jurídico. Precisa dizer onde os dados ficam armazenados, por quanto tempo, quem tem acesso, qual a base legal do tratamento, como pedir exclusão e qual o contato do encarregado de dados.]',
      'A política de privacidade publicada hoje está em /privacidade.',
    ],
  },
  {
    id: 'responsabilidade',
    pergunta: 'Quem responde pelo plano?',
    resposta: [
      'O profissional que revisa e aprova. O próprio app avisa na tela que o plano foi gerado automaticamente a partir das informações e dos objetivos declarados, e que as refeições podem ser ajustadas depois.',
      '[PREENCHER: redação final revisada pelo jurídico e pelo CRN]',
    ],
  },
  {
    id: 'patologias',
    pergunta: 'Funciona para pacientes com patologias?',
    resposta: [
      'O questionário da versão atual pergunta idade, peso, altura, gênero, nível de atividade e objetivo. Não há campo para patologia, alergia ou medicamento em uso.',
      'Nesses casos, trate o resultado como rascunho: a adequação clínica depende da sua revisão. [CONFIRMAR: se existe campo de restrição em outra tela do app]',
    ],
  },
  {
    id: 'diretrizes',
    pergunta: 'A IA segue quais diretrizes?',
    resposta: [
      '[PREENCHER: quais referências a IA usa como base do cálculo e da montagem. Por exemplo: DRIs, Guia Alimentar para a População Brasileira, consensos de sociedades. Enquanto não estiver confirmado, esta resposta não vai ao ar.]',
    ],
  },
  {
    id: 'ios',
    pergunta: 'Tem iOS?',
    resposta: [
      'Ainda não. Hoje o dietAI está publicado só na Play Store, para Android.',
      '[CONFIRMAR: se existe previsão de iOS, para a página poder dizer "iOS em breve"]',
    ],
  },
];

/**
 * Feedback enviado por usuários do app (mesmos textos publicados no site
 * anterior). Sem nome nem nota: a página não inventa autor nem estrelas.
 */
export const FEEDBACKS: string[] = [
  'Minha experiência com o app foi muito boa. Ele é bem claro na proposta de ajudar pessoas em dieta, oferecendo suporte para quem quer perder peso, ganhar peso ou manter o peso ideal. Gostei bastante das funções de definir metas, registrar o que consumimos no dia a dia e pesquisar alimentos.',
  'Muito interativo. Gostei das perguntas que o app fez antes de começar e principalmente dessa inteligência artificial. Ela gerou um plano de dieta com tudo que eu tenho em casa e que cabe no meu orçamento.',
  'Muito top, parabéns aos desenvolvedores.',
  'Gostei da ideia do app, bem clean e simples de entender.',
  'Achei muito daora, nunca vi uma IA que te dá uma dieta personalizada. O layout do app é muito bonito.',
  'Seu aplicativo é show para pessoas que não têm condições de pagar ou não querem pagar um personal.',
];

export type Fundador = {
  nome: string;
  papel: string;
  foto: string;
  /** largura x altura reais do arquivo, para evitar salto de layout */
  dimensoes: [number, number];
  /** foto recortada (fundo transparente): recebe o fundo de estúdio por CSS */
  recorte?: boolean;
  bio: string;
  tags: string[];
};

export const FUNDADORES: Fundador[] = [
  {
    nome: 'Eliel Nicolas',
    papel: 'CEO e cofundador',
    foto: '/app/fundador-eliel.webp',
    dimensoes: [340, 473],
    recorte: true,
    bio: 'Cuida da direção do produto e de quem usa o app. É quem lê o feedback que chega e transforma em prioridade para a próxima versão.',
    tags: ['Produto', 'Parcerias', 'Comunidade'],
  },
  {
    nome: 'Gabriel Mota',
    papel: 'CTO e cofundador',
    foto: '/app/fundador-gabriel.webp',
    dimensoes: [800, 1034],
    bio: 'Responde pela tecnologia por trás do app, da IA que monta o plano ao design das telas, e por levar cada melhoria do código até a Play Store.',
    tags: ['Tecnologia', 'IA', 'Design do app'],
  },
];
