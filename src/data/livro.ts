// Conteúdo editorial baseado nas capas, orelhas e ficha catalográfica recebidas.
// Fontes e orientação de atualização em docs/livro.md.
export const livro = {
  titulo: "Visão Além de 20/20",
  subtitulo: "Fundamentos da Neurovisão",
  complemento:
    "Distúrbios Neurovisuais, Neurossensoriais, Aprendizagem e o que escapa ao exame oftalmológico",
  volume: "Volume I",
  isbn: "978-65-02-46110-5",
  edicao: 1,
  ano: 2027,
  editora: "Edição dos Autores",
  local: "Belo Horizonte, MG",
  preco: 289,
  moeda: "BRL",
  whatsapp: "5531984043145",
  telefone: "+55 31 98404-3145",
  mensagem:
    "Olá! Gostaria de solicitar o livro Visão Além de 20/20 — Fundamentos da Neurovisão, no valor de R$ 289,00. Podem me informar como realizar a compra e combinar a entrega?",
  imagem: "/images/livro/visao-alem-de-20-20.webp",
  capa: "/images/livro/visao-alem-de-20-20-capa.jpg",
  capaCompleta: "/downloads/visao-alem-de-20-20-capa-e-orelhas.pdf",
};

export const precoFormatado = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: livro.moeda,
}).format(livro.preco);

// Número completo confirmado pelo responsável pelos pedidos do livro.
export const linkPedido = `https://wa.me/${livro.whatsapp}?text=${encodeURIComponent(livro.mensagem)}`;

export const autores = [
  {
    nome: "Ricardo Guimarães",
    area: "Oftalmologia e função visual",
    foto: "/images/team/ricardo-queiroz-guimaraes.png",
    bio: "Médico, doutor, neurocientista, oftalmologista e cirurgião, com formação no Brasil e pós-doutorado na França e nos Estados Unidos. Integra prática clínica, pesquisa e Neurovisão no estudo da função visual e de suas repercussões na vida cotidiana.",
    perfil: "/equipe/ricardo-queiroz-guimaraes/",
    site: "https://ricardoguimaraes.com.br/",
  },
  {
    nome: "Jerome Baron",
    area: "Neurociência e percepção visual",
    foto: "/images/team/jerome-baron.jpg",
    bio: "Professor de Fisiologia e Biofísica da UFMG, graduado em Ciências Biológicas pela University of Sussex e doutor em Neurofisiologia pela University of Oxford. Atuou no Max Planck Institute for Brain Research e no CNRS. Pesquisa visão humana e animal, percepção, cor, processamento visual e retina.",
    perfil: "/equipe/jerome-baron/",
  },
  {
    nome: "Márcia Reis Guimarães",
    area: "Neurovisão clínica e aprendizagem",
    foto: "/images/team/marcia-reis-guimaraes.png",
    bio: "Médica, oftalmologista e doutora, com formação no Brasil, na França e nos Estados Unidos e fellowship em Patologia Ocular no Armed Forces Institute of Pathology, em Washington. Foi professora da UFMG e professora assistente na UNIFESP. Atua em qualidade de visão, Neurovisão e distúrbios relacionados à aprendizagem.",
    perfil: "/equipe/marcia-reis-guimaraes/",
  },
];

export const midias = {
  entrevista: "https://www.youtube.com/live/K11bLk8cLa0?t=4575",
  artigo:
    "https://www.linkedin.com/pulse/d%C3%A9cada-da-vis%C3%A3o-que-ningu%C3%A9m-assinou-dr-ricardo-guimar%C3%A3es-uxyqf/",
  bastidores:
    "https://www.linkedin.com/pulse/vinte-anos-para-escrever-um-livro-dr-ricardo-guimar%C3%A3es-cirlf/",
  lancamento: "/eventos/2026-11-11-xii-congresso-brasileiro-neurovisao/",
};
