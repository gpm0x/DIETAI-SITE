export const SITE_URL = 'https://dietai-pearl.vercel.app';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.dietia.app';

export const INSTAGRAM_URL = 'https://www.instagram.com/dietal_oficial/';

/** Dimensões reais dos prints, usadas em width/height para evitar CLS. */
export const PRINT_LOJA = { largura: 720, altura: 1458 };
export const PRINT_VIDEO = { largura: 382, altura: 786 };

export type TelaDoApp = {
  arquivo: string;
  titulo: string;
  texto: string;
  alt: string;
};

/** Prints publicados pelo dietAI na Google Play, consultados em 19/11/2026. */
export const TELAS_DO_APP: TelaDoApp[] = [
  {
    arquivo: 'plano-do-dia',
    titulo: 'Plano do dia',
    texto: 'Perfil, IMC e as refeições do dia, uma a uma.',
    alt: 'Tela inicial do dietAI com perfil, IMC, altura, peso e o plano do dia em quatro refeições',
  },
  {
    arquivo: 'resumo-diario',
    titulo: 'Resumo diário',
    texto: 'Refeições concluídas, hidratação e peso atual.',
    alt: 'Resumo diário do dietAI com refeições concluídas, hidratação de 3 litros e peso atual',
  },
  {
    arquivo: 'chat-ia',
    titulo: 'Ajuste por conversa',
    texto: 'O paciente conta o que come e a IA reescreve o plano.',
    alt: 'Conversa dentro do dietAI em que a IA pergunta quais alimentos a pessoa tem em casa',
  },
  {
    arquivo: 'itens-refeicao',
    titulo: 'Registro de refeição',
    texto: 'Cada refeição marcada, com as calorias do que foi comido.',
    alt: 'Lista de itens de refeições concluídas no dietAI, cada uma com o total de calorias',
  },
  {
    arquivo: 'alimentos-sugeridos',
    titulo: 'Alimentos sugeridos',
    texto: 'Sugestões com proteína, carboidrato e gordura de cada item.',
    alt: 'Tela de alimentos sugeridos do dietAI com frango grelhado e arroz integral e seus macros',
  },
  {
    arquivo: 'resumo-nutricional',
    titulo: 'Resumo nutricional',
    texto: 'Soma de calorias e macros do que foi registrado.',
    alt: 'Resumo nutricional do dietAI somando calorias, proteínas e carboidratos do dia',
  },
  {
    arquivo: 'habitos-agua',
    titulo: 'Hábitos e água',
    texto: 'Dias seguidos cumpridos e registro de água em um toque.',
    alt: 'Tela do dietAI com sequência de hábitos e registro rápido de água em 250, 500 e 750 mililitros',
  },
  {
    arquivo: 'progresso-metas',
    titulo: 'Metas e IMC',
    texto: 'Peso atual, meta, altura e IMC, com o quanto falta.',
    alt: 'Tela de progresso do dietAI com peso atual, meta de peso, altura e IMC',
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
      '[PREENCHER: o que é gratuito, o que é pago, valor de cada plano e o que entra em cada um]',
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
  iniciais: string;
  papel: string;
  bio: string;
  tags: string[];
};

export const FUNDADORES: Fundador[] = [
  {
    nome: 'Gabriel Mota',
    iniciais: 'GM',
    papel: 'Cofundador',
    bio: '[PREENCHER: bio curta do Gabriel — formação, o que faz no dietAI e por que começou o projeto]',
    tags: [],
  },
  {
    nome: 'Eliel Nicolas',
    iniciais: 'EN',
    papel: 'Cofundador',
    bio: '[PREENCHER: bio curta do Eliel — formação, o que faz no dietAI e por que começou o projeto]',
    tags: [],
  },
];
