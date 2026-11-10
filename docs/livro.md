# Página do livro — Visão Além de 20/20

Rota: `/livro/`. A URL de produção usa o domínio configurado em
`PUBLIC_SITE_URL` (por padrão, `https://lapan.com.br/livro/`).

## Atualização

- Texto, autores, preço, contato e links: `src/data/livro.ts`.
- Conteúdo e composição da página: `src/pages/livro.astro`.
- Chamada na página inicial: `src/components/BookFeature.astro`.
- Pedidos: `src/components/BookOrderLink.astro`, compartilhado pelos botões
  da landing page. O contato e a mensagem vêm do arquivo de dados.
- Imagens: `public/images/livro/`. A imagem de apresentação foi convertida
  para WebP preservando a transparência; a capa JPEG original é usada no
  compartilhamento social. As fotos dos autores vêm do acervo da equipe.
- Capa completa: `public/downloads/visao-alem-de-20-20-capa-e-orelhas.pdf`.

O número de WhatsApp completo foi confirmado pelo responsável pelo site:
`+55 31 98404-3145`, convertido para `5531984043145` no link `wa.me`.
A mensagem solicita o exemplar e as orientações de compra e entrega.
O preço informado é **R$ 289,00**. Pagamento, frete e entrega são combinados
no atendimento; a página não presume condições comerciais adicionais.

## Fontes editoriais

As biografias e a apresentação da obra foram resumidas a partir das orelhas
e da contracapa fornecidas pelo responsável pelo site, também presentes no
PDF `CAPA-rev3-VISAO-ALEM-20-20.pdf`. Os nomes, o título e o subtítulo seguem
a capa. Não foram acrescentados resultados clínicos, depoimentos, sumário,
número de páginas ou promessas de tratamento.

### Dados da edição e revisão editorial

A ficha catalográfica `ficha-409144.pdf`, da Câmara Brasileira do Livro,
acrescentou o ISBN **978-65-02-46110-5**, a **1ª edição**, a indicação de
**Edição dos Autores** e o local **Belo Horizonte, MG**. Esses dados foram
incluídos em um único bloco e nos metadados `Book` aplicáveis.

O documento recebido indica **2027**. O responsável pelo site confirmou que
esse é o ano da edição, apesar do lançamento no final de 2026. A página e
seus metadados usam 2027, conforme a ficha e essa confirmação. O anúncio do
lançamento no CBNV mantém a data do evento em novembro de 2026.
CDD, número de controle da ficha e registro da bibliotecária não foram
incluídos, pois são dados de catalogação sem utilidade direta para o pedido.

A revisão retirou a seção de origem e as perguntas frequentes que repetiam
a proposta da obra e as instruções de compra. O título e o subtítulo completos
ficaram na abertura; a seção de autores usa apenas “Autores”. Também foram
retirados a legenda redundante da capa, os rótulos temáticos repetidos na
abertura e a reapresentação dos autores na área de compra. Preço e botões
permanecem no início e no fim para permitir o pedido durante a navegação.

Links de divulgação consultados em 10 de novembro de 2026:

- [Site de Ricardo Guimarães](https://ricardoguimaraes.com.br/).
- [A década da Visão que ninguém assinou](https://www.linkedin.com/pulse/d%C3%A9cada-da-vis%C3%A3o-que-ningu%C3%A9m-assinou-dr-ricardo-guimar%C3%A3es-uxyqf/),
  publicado por Ricardo Guimarães em 6 de novembro de 2026. Anuncia o
  lançamento no CBNV, de 11 a 13 de novembro de 2026, no CAD 1 da UFMG.
- [Vinte anos para escrever um livro](https://www.linkedin.com/pulse/vinte-anos-para-escrever-um-livro-dr-ricardo-guimar%C3%A3es-cirlf/),
  publicado por Ricardo Guimarães em 29 de outubro de 2026 e encontrado
  no artigo acima. Relata a origem da obra.
- [Entrevista na BandNews FM, no YouTube](https://www.youtube.com/live/K11bLk8cLa0?t=4575):
  URL e identificação fornecidas pelo responsável pelo site. O conteúdo
  do vídeo não pôde ser recuperado na consulta externa. O ponto de entrada
  de 4.575 segundos (1h16min15s) foi preservado, sem transcrição ou afirmações
  atribuídas à entrevista.

O cartão de lançamento aponta para a página do evento já existente no LAPAN.
Não foram incluídas gravações de palestras sem links confirmados.

## Validação e publicação

Usar Node.js 22.12+ e npm 10+. Executar `npm run check` e conferir `/livro/`
e a chamada na página inicial no preview, em telas pequenas e grandes.
Conferir os destinos dos botões sem enviar mensagens ao contato de pedidos.

A página integra o sitemap e usa URL canônica, metadados sociais e dados
estruturados `Book`/`Offer`, com os três autores e o preço informado.
Não há nova coleção no CMS. Nenhuma configuração externa é necessária para
o link de WhatsApp.
