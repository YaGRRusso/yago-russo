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
  let stacksImg = '';
  for (let i = 0; i < skills.hard.length; i++) {
    stacksImg += `
    
    <div class="stack">
      ${skills.hard[i].svg}
      ${skills.hard[i].name}
    </div>

    `;
  }
  document.querySelector('.stacks .section-body').innerHTML = stacksImg;
}


// Funções INICIO
aboutWrite('about');
typeWriter();
stackWrite();

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