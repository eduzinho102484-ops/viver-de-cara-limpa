// ============================================================
//  DADOS PESSOAIS E DE CONTATO — edite só este arquivo.
//  Nada aqui é inventado: o que estiver vazio ("") fica oculto.
// ============================================================

export const siteConfig = {
  brand: 'CarlosDev',

  // WhatsApp: apenas números, com código do país e DDD.
  // Exemplo de formato: 5511999999999
  // Enquanto estiver vazio, os botões rolam até a seção de contato.
  whatsappNumber: '5511982440541',
  whatsappMessage: 'Oi Carlos, vim pelo seu site e quero um orçamento.',

  // Redes (deixe "" para ocultar). Use a URL completa.
  githubUrl: '',
  instagramUrl: '',
  email: '',
}

export const about = {
  title: 'Sobre mim',
  // Edite o texto livremente.
  paragraphs: [
    'Sou o Carlos, desenvolvedor web com foco na criação de sites e aplicações. Trabalho com tecnologias como Java, Spring Boot, React e JavaScript, desenvolvendo desde interfaces modernas até funcionalidades de back-end e integração com bancos de dados.\n' +
    '\n' +
    'Gosto de transformar ideias em projetos reais, unindo design, funcionalidade e organização para criar soluções que façam sentido para cada negócio. Estou sempre aprimorando minhas habilidades e buscando entregar projetos bem estruturados, responsivos e prontos para crescer.',
    'Cada projeto é feito sob medida, com foco em carregar rápido no celular e facilitar o contato do cliente com o seu negócio.',
  ],
  // Confirme/ajuste: liste só o que você realmente domina.
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'java', 'spring boot', 'supabase'],
  goals: [
    'Colocar comércios locais no Google e nas mãos dos clientes',
    'Entregar sites rápidos, bonitos e fáceis de manter',
  ],
}

// Planos — valores informados por você ("a partir de").
export const plans = [
  {
    id: 'essencial',
    name: 'Site Essencial',
    price: 'a partir de R$ 200',
    deadline: 'Entrega em até 7 dias',
    highlight: false,
    features: [
      'Site de uma página, direto ao ponto',
      'Apresentação do negócio, cardápio ou serviços',
      'Botão de WhatsApp',
      'Adaptado para celular',
    ],
  },
  {
    id: 'completo',
    name: 'Site Completo',
    price: 'a partir de R$ 500',
    deadline: 'Entrega em até 14 dias',
    highlight: true,
    features: [
      'Mais seções e mais personalização',
      'Design mais elaborado, pensado para a sua marca',
      'Estrutura pronta para crescer',
      'Adaptado para celular',
    ],
  },
]

// Preencha para exibir a seção correspondente. Vazio = seção oculta.
// NUNCA coloque depoimentos ou garantias que não sejam reais.
export const testimonials = [
  // { name: 'Nome do cliente', business: 'Ramo / nome do negócio', text: 'Depoimento real.' },
]

export const guarantee = '' // ex.: 'Você aprova o site antes de ir pro ar.'

// Perguntas frequentes. Adicione as suas (suporte, pagamento etc.).
export const faq = [
  {
    q: 'Quanto tempo leva?',
    a: 'De 7 a 14 dias, dependendo do tamanho do projeto.',
  },
  {
    q: 'Serve para o meu tipo de negócio?',
    a: 'Serve para comércios em geral: lanchonete, pizzaria, hamburgeria, confeitaria e outros.',
  },
  {
    q: 'Vou conseguir receber pedidos?',
    a: 'O site leva o cliente direto para o seu WhatsApp, com a mensagem pronta.',
  },
  {
    q: 'Eu preciso entender de site?',
    a: 'Não. Você me conta sobre o negócio e envia as informações e fotos. Eu cuido do resto.',
  },
  // { q: 'Tem suporte depois que o site entra no ar?', a: 'Preencha com a sua política.' },
  // { q: 'Como é o pagamento?', a: 'Preencha com as suas formas de pagamento.' },
]
