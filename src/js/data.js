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
  cnh: 'B'
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

console.log(personal)
console.log(experiencies)
console.log(formations)