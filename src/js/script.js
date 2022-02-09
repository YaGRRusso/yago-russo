// Variáveis Gerais
const header = document.querySelector('header');
const percent = document.querySelector('.percent')
let txtPos = 0; //Typewriter
let divPos = []
let menuMobileOpen = false;
let indexRepeat = [
  0, 1, 2, 0, 1, 2
]


// ===================== //
//       LISTENERS       //
// ===================== //
window.addEventListener('scroll', scrollPercent)

document.querySelectorAll('section').forEach(item => {
  divPos.push({
    name: item.className,
    pos: item.offsetTop
  });
})
let headerItems = divPos.length;

document.querySelectorAll('nav a').forEach((item, index) => {
  item.addEventListener('click', (ev) => {
    ev.preventDefault();
    window.scrollTo(0, divPos[indexRepeat[index]].pos - 80)
  })
})

document.querySelector('.menu-opener--hamb').addEventListener('click', () => {
  document.querySelector('.header-mobile').classList.toggle('active');
  document.querySelector('.mobile-modal').classList.toggle('active');
  menuMobileOpen = !menuMobileOpen;
  scrollPercent();
})


// ===================== //
//     Section HEADER    //
// ===================== //

function scrollPercent() {
  let windowPos = window.scrollY;
  let windowHeight = document.body.offsetHeight - window.innerHeight;
  let windowPercent = parseInt((100 * windowPos) / windowHeight);

  // PROGRESS BAR
  if (windowPos >= 10 || menuMobileOpen) {
    header.classList.add('fix');
    percent.style.display = 'block';
  } else {
    header.classList.remove('fix');
    percent.style.display = 'none';
  }
  percent.style.width = `${windowPercent}%`;


  // HEADER ITEMS
  for (let i = 0; i < headerItems; i++) {
    if (i === 0) {
      if (windowPos < divPos[1].pos - 80) {
        document.querySelectorAll(`[data-header="${divPos[0].name}"]`).forEach((i) => i.classList.add('active'))
      } else {
        document.querySelectorAll(`[data-header="${divPos[0].name}"]`).forEach((i) => i.classList.remove('active'))
      }
    } else if (i === headerItems - 1) {
      if (windowPos >= divPos[headerItems - 1].pos - 80) {
        document.querySelectorAll(`[data-header="${divPos[headerItems-1].name}"]`).forEach((i) => i.classList.add('active'))
      } else {
        document.querySelectorAll(`[data-header="${divPos[headerItems-1].name}"]`).forEach((i) => i.classList.remove('active'))
      }
    } else {
      if (windowPos >= divPos[i].pos - 80 && windowPos < divPos[i + 1].pos - 80) {
        document.querySelectorAll(`[data-header="${divPos[i].name}"]`).forEach((i) => i.classList.add('active'))
      } else {
        document.querySelectorAll(`[data-header="${divPos[i].name}"]`).forEach((i) => i.classList.remove('active'))
      }
    }
  }
}

// ===================== //
//     Section SOBRE     //
// ===================== //
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

  Olá, tudo bem?
  <br><br>
  Me chamo Yago Russo, tenho ${personal.age} anos e sou apaixonado por informática desde criança, aprendi muitas coisas sozinho como: design, programação, hardware e até mesmo inglês, sempre amei essa área e sigo aprendendo cada vez mais.
  <br><br>
  Tenho experiência em programação com freelances, ferramentas pessoais e hobbies, atualmente busco por uma oportunidade profissional efetiva.

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


// ===================== //
//     Section STACKS    //
// ===================== //
function stackWrite() {
  let numbers = [];

  for (let i = 1; i <= 6; i++) {
    let random = Math.floor(Math.random() * skills.hard.length);

    while (numbers.includes(random)) {
      random = Math.floor(Math.random() * skills.hard.length);
    }
    numbers.push(random);

    document.querySelector(`[data-stack="${i}"]`).innerHTML = `
    
    <img src="./src/img/stacks/${skills.hard[random]}.svg" alt="${skills.hard[random]}" title="${skills.hard[random]}">
    
    `
  }
}

function hide() {
  document.querySelector(`.stack-display`).style.opacity = '0';
  setTimeout(() => {
    stackWrite();
    document.querySelector(`.stack-display`).style.opacity = '1';
  }, 1000)
}

// ===================== //
//   Section PORTFOLIO   //
// ===================== //
function portfolioWrite() {
  let sites = ''
  for (let i = 4; i >= 0; i--) {
    let stacks = ''


    for (let e = 0; e < portfolio[i].stacks.length; e++) {
      stacks += `<div class="grid-item-stack"><div class="grid-item-stack"><img src="./src/img/stacks/${portfolio[i].stacks[e]}.svg" alt="${portfolio[i].stacks[e]}" title="${portfolio[i].stacks[e]}"></img></div></div>`
    }

    sites += `
    
    <div class="grid-item">
      <img src="./media/site.png" alt="">
      <div class="grid-item-title">${portfolio[i].name}</div>
      <div class="grid-item-desc">${portfolio[i].desc}</div>
        <div class="grid-item-stacks">
        
        ${stacks}
        
        </div>
      </div>
    
      `
  }

  document.querySelector('.portfolio-grid').innerHTML = sites;

}


// ===================== //
//     Section FOOTER    //
// ===================== //
function footerWrite() {
  document.querySelector('.footer-contact span[data-contact="address"]').innerHTML =
    `${personal.address.neighborhood.long}<br>${personal.address.city.long}, ${personal.address.country.short}`;
  document.querySelector('.footer-contact span[data-contact="phone"]').innerHTML = personal.phone;
  document.querySelector('.footer-contact span[data-contact="email"]').innerHTML = personal.email;
  let network = '';
  for (let i = 0; i < 3; i++) {
    network += `<a target="_blank" href="${social[i].link}"><img src="./src/img/social/${social[i].name}.svg" alt="" srcset=""></a>`
  }
  document.querySelector('.network').innerHTML = network;
}

function courseWrite() {
  let course = ''

  for (let i = 0; i < 3; i++) {
    let aOpen = '';
    let aClose = '';
    if (courses[i].link != '') {
      aOpen = `<a target="_blank" href="${courses[i].link}">`
      aClose = '</a>'
    }
    course += `

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


// ===================== //
//    Function INICIO    //
// ===================== //
aboutWrite('about');
typeWriter();
stackWrite();
portfolioWrite();
footerWrite();
courseWrite();
setInterval(hide, 5000);

// ===================== //
//         MOBILE        //
// ===================== //
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