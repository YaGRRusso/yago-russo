// Variáveis Gerais
const header = document.querySelector('header');
const percent = document.querySelector('.percent')
let txtPos = 0; //Typewriter


// Header
window.addEventListener('scroll', scrollPercent)

function scrollPercent() {
  let windowPos = window.scrollY;
  let windowHeight = document.body.offsetHeight - window.innerHeight;
  let windowPercent = parseInt((100 * windowPos) / windowHeight);

  if (windowPos >= 100) {
    header.classList.add('fix');
    percent.style.display = 'block';
  } else {
    header.classList.remove('fix');
    percent.style.display = 'none';
  }
  percent.style.width = `${windowPercent}%`;
}


// Section SOBRE
document.querySelectorAll('.about-box').forEach(item => {
  item.addEventListener('click', () => aboutBoxSelect(item));
})

function aboutBoxSelect(i) {
  document.querySelector('.selected').classList.remove('selected');
  i.classList.add('selected');
  let info = i.getAttribute('data-info');
  aboutWrite(info);
}

function aboutWrite(info) {
  let type = '';
  let title = '';
  let list = '';

  if (info == 'about') {
    type = 'Introdução';
    title = 'Um pouco sobre mim.';

    document.querySelector('.about-desc .about').style.display = 'inline';
    document.querySelector('.about-desc .infos').style.display = 'none';
    document.querySelector('.about-desc .skills').style.display = 'none';
  }
  if (info == 'information') {
    type = 'Informações';
    title = 'Tudo sobre mim.';

    document.querySelector('[data-item="name"]').innerHTML = personal.name;
    document.querySelector('[data-item="year"]').innerHTML = `${personal.age} anos`
    document.querySelector('[data-item="email"]').innerHTML = personal.email;
    document.querySelector('[data-item="phone"]').innerHTML = personal.phone;
    document.querySelector('[data-item="target"]').innerHTML = personal.interest;
    document.querySelector('[data-item="address"]').innerHTML = `${personal.address.city.long}, ${personal.address.country.short}`;

    document.querySelector('.about-desc .about').style.display = 'none';
    document.querySelector('.about-desc .infos').style.display = 'contents';
    document.querySelector('.about-desc .skills').style.display = 'none';
  }
  if (info == 'skills') {
    type = 'Habilidades';
    title = 'O que sei.';

    skills.stacks.forEach(item => {
      list += `
      <li>
        <h2>${item.name}</h2>
        <div class="progressBar">
          <div class="progress" style="width: 10%"><span>${item.level}%</span></div>
        </div>
      </li>`
    })

    document.querySelector('.skills ul').innerHTML = list;
    document.querySelector('.about-desc .about').style.display = 'none';
    document.querySelector('.about-desc .infos').style.display = 'none';
    document.querySelector('.about-desc .skills').style.display = 'contents';
    animeBar();
  }

  document.querySelector('.about-type').innerHTML = type;
  document.querySelector('.about-title').innerHTML = title;
}

function typeWriter() {
  let msg = [`

  Tudo bem?<br><br>Me chamo ${personal.name}, tenho ${personal.age} anos e sou apaixonado por informática desde criança, quando ganhei meu primeiro computador.<br>Aprendi muitas coisas sozinho como: design, programação, hardware e até mesmo inglês, sempre amei essa área e ainda sigo aprendendo cada vez mais.<br><br>
  Aos 17 anos, com tudo o que eu havia aprendido sozinho, dei aulas de informática e design em uma escola reconhecida nacionalmente, o Instituto Mix de Profissões.<br>Aos 19, me formei como técnico em informática pelo instituto federal e hoje sigo no mesmo caminho.

  `];
  document.querySelector('.about-desc .about').innerHTML = msg[0].substring(0, txtPos) + '<span class="blink">▮</span>';

  txtPos++
  if (txtPos !== msg[0].length) {
    setTimeout(typeWriter, 25);
  }
}


function animeBar() {
  setTimeout(() => {
    document.querySelectorAll('.progressBar .progress').forEach(bar => {
      let percent = bar.querySelector('span').innerHTML;
      bar.style.width = percent;
    })
  }, 10);
}


// Section STACKS
function stackWrite() {
  let numbers = [];
  
  for(let i=1; i<=6; i++){
    let random = Math.floor(Math.random() * skills.hard.length);

    while (numbers.includes(random)){
      random = Math.floor(Math.random() * skills.hard.length);
    }
    numbers.push(random);

    document.querySelector(`[data-stack="${i}"]`).innerHTML = `
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <title>${skills.hard[random].name}</title>
      ${skills.hard[random].svg}
    </svg>
    
    `
  }
}

function hide(){
  document.querySelector(`.stack-display`).style.opacity = '0';
  setTimeout(()=>{
    stackWrite();
    document.querySelector(`.stack-display`).style.opacity = '1';
  },1000)
}

// FOOTER
function courseWrite(){
  let course = ''

  for (let i=0; i<3; i++){
    let aOpen = '';
    let aClose= '';
    if (courses[i].link != ''){
      aOpen= `<a target="_blank" href="${courses[i].link}">`
      aClose= '</a>'
    }
    course +=`

    ${aOpen}
      <div class="course">
        <div class="course-title">${courses[i].name} - ${courses[i].institute}<span class="course-hours">${courses[i].hours} Horas</span></div>
        <div class="course-desc">${courses[i].description}</div>
      </div>
    ${aClose}
    
    `
  }

  document.querySelector('.courses').innerHTML = course;
}


// Funções INICIO
aboutWrite('about');
typeWriter();
stackWrite();
courseWrite();
setInterval(hide, 5000);

// MOBILE
const menuOpener = document.querySelector('.menu-opener')
let menuOpen = false

menuOpener.addEventListener('click', () => {
  if (!menuOpen) {
    menuOpener.classList.add('open')
    menuOpen = true
  } else {
    menuOpener.classList.remove('open')
    menuOpen = false
  }
})