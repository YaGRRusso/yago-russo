console.log('Bem-Vindo!')
let date = new Date()

function currentDate() {
  let dateFormat = date.toLocaleString("default", {
    month: "short",
    year: "numeric"
  })
  return dateFormat.replace('.', '')
  // return dateFormat.replace('.','')+" (Atualmente)"
}

function currentAge(birth) {
  let birthday = new Date(birth)
  return Math.floor(Math.ceil(Math.abs(birthday.getTime() - date.getTime()) / (1000 * 3600 * 24)) / 365.25)
}

let personal = {
  name: 'Yago Russo',
  birth: '2001-11-30 12:00',
  age: currentAge('2001-11-30 12:00'),
  email: 'yagrrusso@gmail.com',
  phone: '51986824203',
  address: {
    cod: '94120380',
    country: {
      long: 'Brazil',
      short: 'BR'
    },
    state: {
      long: 'Rio Grande do Sul',
      short: 'RS'
    },
    city: {
      long: 'Gravataí',
      short: 'GTI'
    },
    neighborhood: {
      long: 'Morada do Vale 2',
      short: 'MV2'
    },
    street: 'Edu Chaves',
    number: 543
  },
  interest: 'Web Developer',
  cnh: 'B'
}

let experiencies = [{
  name: 'Monitor de Informática e Tecnologia',
  company: 'Instituto Mix de Profissões',
  date: {
    start: 'out de 2019',
    end: 'mar de 2020'
  },
  description: 'Aulas de Programação, Design e Tecnologias | Suporte de Rede e Máquinas | Design de Artes'
},
{
  name: 'Jovem Aprendiz',
  company: 'Verde-Card (Lojas Quero-Quero)',
  date: {
    start: 'set de 2020',
    end: currentDate()
  },
  description: 'Administração | Gerenciamento de Informações | Suporte TI'
},
]

let formations = [{
  name: 'Ensino Médio + Técnico em Informática para Internet (Integrado)',
  school: 'Instituto Federal Sul-rio-grandense',
  date: {
    start: 'jan de 2017',
    end: 'dez de 2020'
  },
  description: 'Libre Office | C++ | Java | Html5 | CSS3 | PHP | MySQL | JavaScript | Bootstrap| Kodular | Firebase | Cisco Packet | Manutenção e Formatação | Linux'
}]

let courses = [{
  name: 'Next',
  institute: 'Udemy',
  hours: 28,
  description: 'React | Next | Typescript | Firebase | TailwindCSS',
  link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-983fd49d-5816-45cc-9d30-1173a39ea866.pdf'
},
{
  name: 'Javascript',
  institute: 'B7Web',
  hours: 44,
  description: 'Javacript | Rest API | ES6 | DOM',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_3215285.jpg'
},
{
  name: 'HTML5 e CSS3',
  institute: 'B7Web',
  hours: 89,
  description: 'HTML5 | CSS3 | Responsividade | SEO',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_8650229.jpg'
},
{
  name: 'Typescript',
  institute: 'B7Web',
  hours: 20,
  description: 'Typescript',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_4076622.jpg'
},
{
  name: 'SASS',
  institute: 'B7Web',
  hours: 20,
  description: 'Sass | Webpack',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_9653220.jpg'
},
{
  name: 'Banco de Dados',
  institute: 'B7Web',
  hours: 20,
  description: 'SQL | HeidiSQL',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_3610821.jpg'
},
{
  name: 'Bootstrap4',
  institute: 'B7Web',
  hours: 20,
  description: 'Bootstrap 4',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_8838042.jpg'
},
{
  name: 'Git/Github',
  institute: 'B7Web',
  hours: 20,
  description: 'Comandos Git | Repositórios Github',
  link: 'https://alunos.b7web.com.br/media/certificates/certificado_6673888.jpg'
},
{
  name: 'Design Gráfico',
  institute: 'Instituo Mix de Profissões',
  hours: 99,
  description: 'Photoshop | Illustrator | Premiere',
  link: ''
},
{
  name: 'Informática Básica',
  institute: 'Instituo Mix de Profissões',
  hours: 90,
  description: 'Word | Excel | Power Point | Windows | Montagem, Manutenção e Formatação',
  link: ''
},
{
  name: 'Logística',
  institute: 'Instituo Mix de Profissões',
  hours: 72,
  description: 'Logística',
  link: ''
},
{
  name: 'Recursos Humanos',
  institute: 'Instituo Mix de Profissões',
  hours: 88,
  description: 'Gestão de Pessoas',
  link: ''
},
{
  name: 'Administração Financeira',
  institute: 'Instituo Mix de Profissões',
  hours: 77,
  description: 'Gestão Financeira',
  link: ''
},
{
  name: 'Marketing',
  institute: 'Instituo Mix de Profissões',
  hours: 75,
  description: 'UX/UI | Marketing',
  link: ''
},
]

let languages = {
  portuguese: 'Fluente',
  english: 'Intermediário'
}

let skills = {
  hard: [
    // Languages
    'html5',
    'css3',
    'javascript',
    'typescript',
    'php',
    'sass',
    'react',
    'jquery',
    'redux',
    'router-dom',
    // 'nextjs',
    'bootstrap',
    'tailwind',
    'styled-components',
    // 'nodejs',
    'sql',
    'api',
    'jest',

    // Database
    'postgresql',
    'mysql',
    'firebase',
    // 'graphql',
    // 'mongodb',

    // Tools
    'wordpress',
    'git',
    'npm',
    'yarn',
    'windows',
    'linux',
    'webpack',
    'vscode',
    'apache',
    'filezilla',

    // Design
    'photoshop',
    'premiere',
    'illustrator',

    // Office
    // 'excel',
    // 'word',
    // 'powerPoint',
  ],
  soft: [
    'Trabalho em Equipe',
    'Ética',
    'Flexibilidade',
    'Autodidata',
    'Comunicação',
    'Organização',
    'Proatividade',
    'Empatia',
  ],
  stacks: [{
    name: 'full-stack',
    level: 65
  },
  {
    name: 'back-end',
    level: 40
  },
  {
    name: 'front-end',
    level: 85
  },
  {
    name: 'mobile',
    level: 60
  },
  {
    name: 'design',
    level: 75
  },
  ]
}

let social = [{
  name: 'github',
  link: 'https://github.com/YaGRRusso',
},
{
  name: 'linkedin',
  link: 'https://linkedin.com/in/yago-russo',
},
{
  name: 'whatsapp',
  link: 'https://api.whatsapp.com/send/?phone=5551986824203&text=Ol%C3%A1,+Yago,+tudo+bem?&app_absent=0',
},
{
  name: 'gmail',
  link: 'mailto:yagrrusso@gmail.com',
},
{
  name: 'curriculum',
  link: 'https://bit.ly/yagocurriculo',
}
]

let portfolio = [{
  name: 'Cactus',
  desc: 'Sistema de catálogo, controle de estoque, encomendas de roupas e autenticação de usuário.',
  site: 'https://cactusveste.000webhostapp.com/',
  img: 'cactus',
  stacks: [
    'html5',
    'bootstrap',
    'jquery',
    'php',
    'mysql'
  ]
},
{
  name: 'Original Redes',
  desc: 'Site para conversão de clientes e apresentação da empresa.',
  site: 'https://originalredesrs.com.br/',
  img: 'original',
  stacks: [
    'html5',
    'css3',
    'javascript'
  ]
},
{
  name: 'YRC Money',
  desc: 'Sistema para controle monetário filtrados por categoria e meses.',
  site: 'https://focused-murdock-23c796.netlify.app/',
  img: 'yrcmoney',
  stacks: [
    'react',
    'typescript',
    'styled-components'
  ]
},
{
  name: 'DevMemory',
  desc: 'Jogo da memoria com temas salvos no localstorage',
  site: 'https://magnificent-wisp-b33570.netlify.app/',
  img: 'devmemory',
  stacks: [
    'react',
    'typescript',
    'styled-components'
  ]
},
{
  name: 'Galeria React',
  desc: 'Galeria de imagens com envio multiplo integrada ao firebase.',
  site: 'https://genuine-daifuku-8d20ab.netlify.app/',
  img: 'gallery',
  stacks: [
    'react',
    'typescript',
    'firebase',
    'styled-components'
  ]
},
{
  name: 'Cadastro DEV',
  desc: 'Tela de cadastro usando router-dom com proteção de rotas.',
  site: 'https://gleeful-halva-fb6b70.netlify.app/',
  img: 'cadastro',
  stacks: [
    'react',
    'typescript',
    'styled-components',
    'router-dom'
  ]
},
{
  name: 'AWAX',
  desc: 'Template de landing page criado apenas com HTML e CSS.',
  site: 'https://yagrrusso.github.io/awax/',
  img: 'awax',
  stacks: [
    'html5',
    'css3'
  ]
},
{
  name: 'Starbucks',
  desc: 'Adaptação do site Starbucks utilizando CSS grid.',
  site: 'https://yagrrusso.github.io/starbucks/',
  img: 'starbucks',
  stacks: [
    'html5',
    'css3'
  ]
},
{
  name: 'Pizzas',
  desc: 'Projeto de delivery de pizzas gerado com JS baseado em um array de dados.',
  site: 'https://yagrrusso.github.io/pizza-delivery/',
  img: 'pizzas',
  stacks: [
    'html5',
    'css3',
    'javascript'
  ]
},
{
  name: 'React + Rest API',
  desc: 'Integração React com API JsonPlaceholder e React Router.',
  site: 'https://dreamy-hermann-67535c.netlify.app/',
  img: 'react-api',
  stacks: [
    'react',
    'api',
    'tailwind'
  ]
},
]