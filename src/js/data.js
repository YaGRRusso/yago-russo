console.log('Bem-Vindo!')
let date = new Date()
function currentDate(){
  let dateFormat = date.toLocaleString("default", {month: "short", year: "numeric"})
  return dateFormat.replace('.','')
  // return dateFormat.replace('.','')+" (Atualmente)"
}
function currentAge(birth){
  let birthday = new Date(birth)
  return Math.floor(Math.ceil(Math.abs(birthday.getTime()-date.getTime())/(1000*3600*24))/365.25)
}

let personal = {
  name: 'Yago Russo',
  birth: '2001-11-30 12:00',
  age:  currentAge('2001-11-30 12:00'),
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
    neighborhood: {
      long: 'Morada do Vale 2',
      short: 'MV2'
    },
    street: 'Edu Chaves',
    number: 543
  },
  interest: 'Desenvolvedor',
  cnh: 'B',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facilis voluptatibus sunt quidem ipsum. Facere excepturi quam et earum repudiandae. Laboriosam accusamus fugit itaque earum provident quidem eos vel. Consectetur.'
}

let experiencies = [
  {
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

let formations = [
  {
    name: 'Ensino Médio + Técnico em Informática para Internet (Integrado)',
    school: 'Instituto Federal Sul-rio-grandense',
    date: {
      start: 'jan de 2017',
      end: 'dez de 2020'
    },
    description: 'Libre Office | C++ | Java | Html5 | CSS3 | PHP | MySQL | JavaScript | Bootstrap| Kodular | Firebase | Cisco Packet | Manutenção e Formatação | Linux'
  }
]

let courses = [
  {
    name: 'Next',
    institute: 'Udemy',
    hours: 27,
    description: 'React | Next | Typescript | Firebase | TailwindCSS',
    link: 'https://google.com'
  },
  {
    name: 'Next',
    institute: 'Udemy',
    hours: 27,
    description: 'React | Next | Typescript | Firebase | TailwindCSS',
    link: 'https://google.com'
  },
  {
    name: 'Next',
    institute: 'Udemy',
    hours: 27,
    description: 'React | Next | Typescript | Firebase | TailwindCSS',
    link: 'https://google.com'
  },
]

let languages = {
  portuguese: 'Fluente',
  english: 'Intermediário'
}

let skills = {
  hard: [
    {name: 'HTML5', level: 3},
    {name: 'CSS3', level: 3},
    {name: 'JavaScript', level: 3},
    {name: 'TypeScript', level: 1},
    {name: 'PHP', level: 2},
    {name: 'Bootstrap', level: 3},
    {name: 'Tailwind', level: 2},
    {name: 'SASS', level: 1},
    {name: 'Styled Components', level: 1},
    {name: 'React', level: 2},
    {name: 'Next', level: 2},
    {name: 'Redux', level: 2},
    {name: 'Git', level: 3},
    {name: 'Node', level: 1},
    {name: 'Express', level: 1},
    {name: 'NPM', level: 3},
    {name: 'Yarn', level: 3},
    {name: 'Postman', level: 1},
    {name: 'MySQL', level: 3},
    {name: 'PostgreSQL', level: 3},
    {name: 'Firebase', level: 2},
    {name: 'Photoshop', level: 3},
    {name: 'Illustrator', level: 2},
    {name: 'Premiere', level: 2},
    {name: 'Apache', level: 3},
  ],
  soft: [
    {name: 'Trabalho em Equipe', description: 'lorem ipsum'},
    {name: 'Ética', description: 'lorem ipsum'},
    {name: 'Flexibilidade', description: 'lorem ipsum'},
    {name: 'Autodidata', description: 'lorem ipsum'},
    {name: 'Comunicação', description: 'lorem ipsum'},
    {name: 'Organização', description: 'lorem ipsum'},
    {name: 'Proatividade', description: 'lorem ipsum'},
    {name: 'Empatia', description: 'lorem ipsum'},
  ]
}

let social = {
    github: 'https://github.com/YaGRRusso',
    linkedin: 'https://linkedin.com/in/yago-russo',
    site: 'https://yagorussocabral.netlify.app',
    curriculum: 'https://bit.ly/yagocurriculo',
    gmail: 'mailto:yagrrusso@gmail.com',
    whatsapp: 'https://api.whatsapp.com/send/?phone=5551986824203&text=Ol%C3%A1,+Yago,+tudo+bem?&app_absent=0'
}

console.log(personal)
console.log(experiencies)
console.log(formations)
console.log(courses)
console.log(languages)
console.log(skills)
console.log(social)