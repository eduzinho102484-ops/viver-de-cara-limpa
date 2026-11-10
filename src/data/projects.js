// ============================================================
//  PROJETOS — para adicionar um site, copie um bloco e preencha.
//  O cartão aparece sozinho, sem mexer em nenhum componente.
//
//  Passo a passo:
//  1. Salve a captura de tela em  public/images/projects/  (WebP recomendado)
//  2. Adicione um objeto na lista abaixo
//  3. Apague os exemplos "demo" quando tiver os projetos reais
//
//  Campos:
//   id           identificador único (sem espaços)
//   title        nome do projeto
//   description  descrição curta e objetiva
//   image        caminho da imagem, ex.: "/images/projects/pizzaria.webp"
//   technologies lista de tecnologias usadas
//   liveUrl      link do site publicado ("" = botão "Em breve")
//   githubUrl    link do código no GitHub ("" = esconde o botão)
//   demo         true = mostra selo "Demonstração" (remova nos reais)
// ============================================================

const projects = [
  // ---- EXEMPLOS DE DEMONSTRAÇÃO (substitua pelos seus sites reais) ----
  {
    id: 'ImagemDesign',
    title: 'Site para uma empresa de ImagemDesign',
    description: 'Contato e acesso a serviços da empresa',
    image: '/images/projects/ImagemDesign.png',
    technologies: ['React', 'CSS',],
    liveUrl: 'https://designimagem.netlify.app/',
    githubUrl: '',

  },
  
  {
    id: 'hamburgueria',
    title: 'Site para Hamburgueria',
    description: 'cardápio com fotos dos lanches e preços.',
    image: '/images/projects/hamburgueria.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    liveUrl: 'https://chamanosmash.netlify.app/',
    githubUrl: '',
  },

  {
    id: 'Capitação para clinicas de Reabilitação',
    title: 'Site para capitar necessitados de reabilitação',
    description: 'Ajuda para vicios, tipo de vicios, como podem ser combatidos e ajuda efetiva',
    image: '/images/projects/viverdecaralimpa.png',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT',],
    liveUrl: 'https://viverdecaralimpa.com.br',
    githubUrl: '',

  },
]

export default projects
