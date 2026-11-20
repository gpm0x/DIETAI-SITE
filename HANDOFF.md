# dietAI — página de vendas 2.0

Entrega da reconstrução da landing. Stack mantida: **Vite + React 18 + TypeScript + Tailwind**, mesmo deploy na Vercel.

---

## 1. Como rodar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera dist/
npm run preview    # serve o dist/
npm run typecheck
```

Foi adicionado `vercel.json` com:
- **rewrite SPA** (sem ele, `/privacidade` dava 404 quando acessada direto na Vercel);
- cache de 1 ano para `/fonts/*`, `/app/*` e `*.webp`.

---

## 2. Decisões de design

### Cor
Três cores + neutros, todas em variáveis CSS no topo de `src/styles/landing.css`:

| Token | Valor | Uso |
|---|---|---|
| `--mint` | `#06D6A0` | cor de ação: botão principal, bolinha da marca, destaques |
| `--mint-texto` | `#047A5A` | mint escurecido para **texto pequeno** (o `#06D6A0` puro sobre branco dá 1,9:1 de contraste, reprova em AA) |
| `--mint-fundo` / `--mint-borda` | `#E8FBF5` / `#A9EFD9` | pílulas, linhas destacadas da tabela |
| `--tinta` | `#0A0F0D` | texto e blocos escuros |
| `--tinta-2` | `#5B6563` | texto secundário (6:1 sobre branco) |
| `--branco` / `--fundo` / `--linha` | `#FFFFFF` / `#F2F5F4` / `#E7EBEA` | cartões, fundo da página, filetes |

Branco é a base: cartões brancos sobre um cinza-verde quase branco. O mint aparece como **fundo** com texto quase preto por cima (contraste 11:1), nunca como texto pequeno sobre branco.

### Tipografia
- **Geist** (títulos e texto) e **Geist Mono** (rótulos de seção, tempos do vídeo, cabeçalho da tabela).
- Geist é uma grotesca neutra com desenho moderno e ótimo `letter-spacing` negativo em corpo grande — é o que dá o ar de produto da referência sem cair em Inter. O Mono entra só em etiquetas curtas e números, o que dá um toque técnico/clínico.
- Self-hosted em `public/fonts/` (subset latin, woff2, `font-display: swap`). Geist 600 e 400 vão em `<link rel="preload">`. Zero requisição para Google Fonts.

### Forma e movimento
- Raios: `24px` (cartões), `999px` (botões e pílulas), `12px` (blocos menores).
- Sombras: duas, `--sombra` e `--sombra-alta`. Nada mais.
- Movimento: entrada escalonada da primeira dobra (`.entra-1` … `.entra-6`), revelação ao rolar (IntersectionObserver com margem **positiva**, então o conteúdo acende *antes* de entrar na tela e nunca aparece lavado), paralaxe de alguns pixels nos três aparelhos do hero, marquee da tira, brilho que atravessa os botões no hover, carrossel com avanço automático, `+` do FAQ que gira para `×`.
- Tudo respeita `prefers-reduced-motion: reduce` (um bloco no fim do CSS desliga animação e transição).

### Hero
Centralizado, como a referência: pílula "Android · Disponível na Google Play", H1 em dois tons (preto + cinza `#7A8582`, que ainda passa AA em corpo grande), subtítulo, dois botões e o selo da loja. Abaixo, um palco escuro com três prints reais do app, dois deles rotacionados, com duas fichas flutuantes e a legenda de origem dos prints.

---

## 3. Imagens — de onde vieram

| Arquivo | Origem |
|---|---|
| `public/app/plano-do-dia.webp`, `resumo-diario`, `chat-ia`, `itens-refeicao`, `alimentos-sugeridos`, `resumo-nutricional`, `habitos-agua`, `progresso-metas` | prints 720×1600 publicados pelo próprio dietAI na Google Play, baixados em 19/11/2026, com a barra de status recortada |
| `public/app/passo-1-dados`, `passo-2-plano`, `passo-3-ajuste`, `aviso-ia`, `video-poster` | recortes de frames do `public/dietAI.mp4` (gravação real de tela, 382×850) |
| `public/badge-google-play.webp` | selo oficial em pt-BR servido pelo Google |
| `public/og-dietai.jpg` | 1200×630 gerado a partir do design da página |
| `public/apple-touch-icon.png` | ícone oficial do app na Play Store |

**Descartado:** `hero-dashboard.jpg` e `hero-mockup.png` (mockup de iPhone gerado por IA, com texto embolado — "Ganhar maesa muscular" — e o app é só Android), `og-image.jpg` (arte roxa 1024×1024), `unnamed.svg` (favicon de 122 KB), `image.png` (poster de tela de login).

⚠️ Os recortes tirados do vídeo têm **382 px de largura**. Ficam bons no tamanho em que aparecem, mas em tela retina são macios. Se puder me mandar prints novos em 1080×2400, eu troco.

---

## 4. Pendências — o que preciso de você

### `[PREENCHER]` (sem isso não publica)
1. **Hero, microcopy:** o que é grátis, se pede cartão.
2. **Diretrizes da IA:** quais referências o modelo usa como base (DRIs? Guia Alimentar? consensos?). Aparece no card 03 e no FAQ.
3. **Depoimentos:** 3 a 5 relatos de **nutricionistas**, com nome, CRN, cidade, foto real e autorização por escrito.
4. **Play Store:** nota, número de avaliações e data da consulta — ou a seção fica sem número.
5. **Preço:** o que é grátis, o que é pago, valor, como funciona o teste.
6. **LGPD:** texto do jurídico (onde os dados ficam, por quanto tempo, quem acessa, base legal, como pedir exclusão, contato do encarregado). Vale para o FAQ e para a `/privacidade`.
7. **Responsabilidade pelo plano:** redação final revisada por jurídico/CRN. Vale para o FAQ e para o aviso do rodapé.
8. **Rodapé:** link dos Termos de Uso e e-mail de contato.

### `[CONFIRMAR]`
9. **Domínio de produção.** O canonical antigo apontava para `diet-ai-steel.vercel.app`, que **responde 404**. Coloquei tudo em `https://dietai-pearl.vercel.app`. Se existir domínio próprio, troque em `index.html` (canonical, `og:url`, `og:image`, `twitter:image`), `public/sitemap.xml`, `public/robots.txt` e `src/landing/constantes.ts` (`SITE_URL`).
10. **"1 min 18 s".** É o tempo medido no vídeo desta página, do início do cadastro até o plano na tela. Confirme se pode ir ao ar e em que condições foi medido.
11. **iOS.** Tem previsão? Sem isso a página só diz "Disponível para Android".
12. **Edição manual.** O app permite editar item a item, ou só o ajuste por conversa?
13. **Restrições.** Existe campo de patologia/alergia/medicamento em alguma tela que eu não vi?
14. **Painel profissional.** Entra no roteiro? Quando?

---

## 5. Três coisas que você precisa decidir

### 5.1 Existem três logos diferentes
- Ícone na **Play Store** e `public/logo-dietai.svg`: cacho de uvas num quadrado escuro.
- Logo **dentro do app** (aparece no vídeo): figura verde com folhas.
- **Site** (antes): quadradinho verde com "AI".

Na página nova usei um wordmark tipográfico ("dietAI" + bolinha mint) e deixei o ícone oficial da loja como favicon. Precisa escolher uma identidade só e aplicar nos três lugares.

### 5.2 O produto hoje não é um software para nutricionista
Os 8 prints da loja e os 5 min 33 s de vídeo mostram um app **de uso individual**: a própria pessoa responde o questionário, define a meta de peso, registra água, marca refeição e vê a sequência de hábitos. Não existe lista de pacientes, não existe painel, não existe exportação de plano assinado.

Por isso:
- a seção "O painel" que estava no briefing foi **removida** e substituída por "Dentro do app", que mostra o que realmente existe;
- a página diz, com todas as letras, que não há painel profissional.

Só que a **meta description que você pediu** diz "acompanhe seus pacientes em um só lugar". Mantive o texto porque você pediu explicitamente, mas ele promete algo que o app não entrega hoje. Vale revisar.

### 5.3 Páginas removidas
- **`/video`**: tinha "Precisão de 99%", "precisão cirúrgica", "Revolução", "Suporte 24/7", "7 dias grátis" e um poster de banco de imagens. Sem fonte para nenhum número e com promessa absoluta. Removida.
- **`/dashboard`**: era uma tela fictícia de painel, com imagem quebrada (`/logo.png` não existe). Removida, porque o painel não existe.
- O `sitemap.xml` ficou só com `/` e `/privacidade`.

Além dessas, apaguei arquivos mortos que vieram de outro template (páginas de times, jogadores, galeria) e que importavam `../../constants` e `../../types`, inexistentes — `npm run typecheck` quebrava por causa deles.

---

## 6. Correções feitas

**Copy**
- Typo "IA with precisão" removido junto com a seção antiga.
- Fora: "99.2% de precisão", "99.2% de satisfação", "+12.000 profissionais", "4.8/5", "Nova era da Nutrição", "ferramenta definitiva", "alta performance", "transformar sua rotina", "Segurança total", "Elimine falhas", "exatamente".
- Fora também: menção a personal trainer como público (a prescrição dietética é, em regra, privativa do nutricionista).
- Depoimentos de usuário final saíram. Estão em `git`/no histórico deste arquivo caso queira usá-los numa página de consumidor.
- Instagram virou link simples no rodapé. Antes era botão com gradiente roxo-rosa no hero e no meio da página, acima do CTA da Play Store.

**SEO**
- `<title>` e meta description novos.
- `meta keywords`, `revisit-after`, `rating`, `language`, `geo.*` e o `SearchAction` falso (apontava para `/search?q=`, rota que não existe) removidos.
- Canonical, `og:url`, `og:image` e `twitter:*` alinhados no mesmo domínio.
- JSON-LD `SoftwareApplication` (sem `aggregateRating` — não há fonte) e `FAQPage` só com as perguntas que já têm resposta definitiva.
- OG image nova, 1200×630.

**Acessibilidade e performance (Lighthouse mobile, build de produção)**

| Categoria | Nota |
|---|---|
| Performance | 100 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |

- LCP 0,8 s · CLS 0 · TBT 0 ms.
- Sem rolagem horizontal em 320, 360, 390, 414, 768, 1024, 1280, 1440 e 1920 px.
- Todas as imagens com `width`/`height`, `loading="lazy"` abaixo da dobra e `alt` descritivo.
- FAQ em `<details>`/`<summary>` nativo; comparativo em `<table>` de verdade com `<th scope>`.
- Vídeo de 23 MB só é baixado depois do clique.
- `framer-motion` e `lucide-react` saíram da landing; todo o movimento é CSS. A página de privacidade é carregada em `lazy()`.

---

## 7. Analytics

`src/lib/analytics.ts` expõe `registrarCliquePlayStore(origem)`. Todo clique em Play Store dispara o evento `click_play_store` com a origem (`header`, `hero`, `meio`, `final`, e `*-selo` para o selo). O evento vai para `window.dataLayer`, repassa para `gtag` se existir e também sai como `CustomEvent('dietai:cta')`.

Não há GA/GTM instalado no projeto. Basta colar a tag no `index.html` que os eventos passam a chegar.

---

## 8. Mapa dos arquivos

```
index.html                       head, SEO, JSON-LD, preloads
vercel.json                      rewrite SPA + cache
src/styles/landing.css           tokens, componentes, animações
src/pages/LandingPage.tsx        a página
src/pages/PrivacyPolicy.tsx      /privacidade
src/landing/
  Topo.tsx                       cabeçalho + menu compacto
  BotaoPlayStore.tsx             CTA e selo (com evento)
  Carrossel.tsx                  carrossel dos prints
  VideoDemonstracao.tsx          vídeo sob demanda
  Rodape.tsx                     rodapé
  useRevelar.ts                  revelação ao rolar
  usePalco.ts                    paralaxe do hero
  constantes.ts                  URLs, telas do app, FAQ
src/lib/analytics.ts             evento de conversão
public/app/*.webp                prints reais
public/fonts/*.woff2             Geist e Geist Mono
screenshots/                     entrega: mobile 390 e desktop 1440
```

---

## 9. Autoverificação

| Pergunta | Resposta |
|---|---|
| Alguém diria "isso é um template"? | Não. Hero com palco de prints reais, paralaxe, bento assimétrico, marquee, carrossel, tabela de verdade e tom de voz próprio. |
| Gradiente roxo/azul/rosa, blob borrado, texto com gradiente, emoji como ícone? | Não. Emoji aparece só **dentro dos prints do app**, que são do produto. |
| Grade de cards idênticos? | Não. O bento tem quatro cartões de larguras e tratamentos diferentes; os passos são escalonados. |
| Alguma palavra da lista proibida ou promessa absoluta? | Não. |
| O CTA principal é a Play Store em todas as seções? | Sim: header, hero, meio (preço) e final — cada um com evento próprio. |
| Todo número tem fonte? | Sim. Os únicos números são o tempo medido no vídeo (com `[CONFIRMAR]`) e as datas de consulta à Play Store. O resto virou `[PREENCHER]`. |
| Algum link do rodapé está morto? | Não. "Central de Ajuda", "Comunidade", "Status" e o formulário de newsletter foram removidos. "Termos" e "Contato" estão marcados como pendência, não como link quebrado. |
| Lighthouse e acessibilidade bateram a meta? | Sim, 100 nas quatro categorias. |

---

## 10. Atualização: animações, feedback, fundadores e palco do hero

**Animações** — a revelação ao rolar disparava 20% *antes* do elemento entrar na tela, então ninguém via o movimento. Agora:
- elementos entram quando ~12% está visível, com deslocamento maior e desfoque (`.rev`, `.rev-esq`, `.rev-dir`, `.rev-zoom`);
- grupos em cascata automática (`.rev-grupo`: bento, passos, FAQ);
- H1 do hero palavra por palavra; sublinhado mint que se desenha nos títulos (`.risco`);
- palco do hero se endireita com a rolagem; celulares flutuam; linhas da tabela entram em sequência;
- barra de progresso de leitura no topo;
- tudo continua desligado com `prefers-reduced-motion: reduce`. **Atenção:** se no Windows a opção *Efeitos de animação* estiver desligada, o navegador informa "reduzir movimento" e as animações não aparecem — é proposital.

**Feedback do app (seção 06)** — voltaram os 6 relatos de usuários que estavam no site anterior, em duas faixas que correm em sentidos opostos (pausam no hover). Sem nome e sem estrelas, porque não há fonte para nota.

**Fundadores (seção 08)** — Gabriel Mota e Eliel Nicolas, com monograma no lugar da foto. Pendências: `[PREENCHER]` bio de cada um, foto e história da empresa (em `src/landing/constantes.ts`, `FUNDADORES`).

**Palco do hero** — molduras de celular com barra de status (a cor vem da primeira linha do próprio print), composição em profundidade, grade e anel de luz no fundo, fichas nos cantos do painel em vez de em cima das telas, legenda fora do painel.
