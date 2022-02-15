// Variáveis Gerais
const header = document.querySelector('header');
const percent = document.querySelector('.percent')
let txtPos = 0; //Typewriter
let divPos = []
let menuMobileOpen = false;
let indexRepeat = [
  0, 1, 2, 0, 1, 2
]
document.querySelectorAll('[data-cv]').forEach(a => {
  a.href = social[4].link;
})

// ===================== //
//       LISTENERS       //
// ===================== //
if (localStorage.getItem('theme') != 'dark') {
  document.querySelector('html').classList.add('light-mode');
  document.querySelectorAll('.theme-switcher').forEach(theme => theme.classList.add('light-mode'));
}

function screenInit() {
  if (document.readyState == 'complete') {
    clearInterval(loadingScreen);
    document.querySelector('.loadingScreen').classList.add('loaded');
    setTimeout(() => {
      document.querySelector('.loadingScreen').style.display = 'none';
    }, 300)
  }
}

let loadingScreen = setInterval(() => {
  screenInit();
}, 250)

document.querySelectorAll('.theme-switcher').forEach(item => item.addEventListener('click', () => {

  if (localStorage.getItem('theme') == 'dark') {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  document.querySelector('html').classList.toggle('light-mode');
  document.querySelectorAll('.theme-switcher').forEach(theme => theme.classList.toggle('light-mode'));
}));

window.addEventListener('scroll', () => {
  scrollPercent();
  scrollAnimation();
})

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

// ===================== //
//       ANIMATION       //
// ===================== //
function scrollAnimation() {
  const target = document.querySelectorAll('[data-animation]');
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

  target.forEach(element => {
    if ((windowTop) > element.offsetTop) {
      element.classList.add('animationDone');
    } else {
      element.classList.remove('animationDone');
    }
  })
}


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
  } else {
    header.classList.remove('fix');
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

function InfoWrite() {
  let list = '';

  // INICIO INFOS
  document.querySelector('[data-item="name"]').innerHTML = personal.name;
  document.querySelector('[data-item="year"]').innerHTML = `${personal.age} anos`
  document.querySelector('[data-item="email"]').innerHTML = personal.email;
  document.querySelector('[data-item="phone"]').innerHTML = personal.phone;
  document.querySelector('[data-item="target"]').innerHTML = personal.interest;
  document.querySelector('[data-item="address"]').innerHTML = `${personal.address.city.long}, ${personal.address.country.short}`;


  // INICIO SKILLS
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
}

function aboutWrite(info) {
  let type = '';
  let title = '';
  let div = '';
  let display = '';

  document.querySelector('.section-right').classList.remove('animationDone');

  if (info == 'about') {
    type = 'Introdução';
    title = 'Um pouco sobre mim.';
    div = '.about';
    display = 'inline';
  }
  if (info == 'information') {
    type = 'Informações';
    title = 'Tudo sobre mim.';
    div = '.infos';
    display = 'contents';
  }
  if (info == 'skills') {
    type = 'Habilidades';
    title = 'O que sei.';
    div = '.skills';
    display = 'contents';
    animeBar();
  }

  //Efeito de Animação
  setTimeout(() => {
    document.querySelector('.about-desc .about').style.display = 'none';
    document.querySelector('.about-desc .infos').style.display = 'none';
    document.querySelector('.about-desc .skills').style.display = 'none';

    document.querySelector(`.about-desc ${div}`).style.display = display;
    document.querySelector('.about-type').innerHTML = type;
    document.querySelector('.about-title').innerHTML = title;

    document.querySelector('.section-right').classList.add('animationDone');
  }, 300)

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
  }, 400);
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
      stacks += `<div class="grid-item-stack"><img src="./src/img/stacks/${portfolio[i].stacks[e]}.svg" alt="${portfolio[i].stacks[e]}" title="${portfolio[i].stacks[e]}"></div>`
    }

    sites += `

    <div class="grid-item" data-animation="bottom">
      <img src="./media/sites/${portfolio[i].img ? portfolio[i].img : 'skeleton'}.png" alt="Imagem" class="grid-item-img">
      <div class="grid-item-container">
        <div class="grid-item-title">
          <p>${portfolio[i].name}</p>
          <div class="grid-item-stacks">
            ${stacks}
          </div>
        </div>

        <div class="grid-item-desc">
          ${portfolio[i].desc}
        </div>
        <div class="grid-item-buttons">
          <a href="${portfolio[i].github ? portfolio[i].github : 'https://yagrrusso.github.io'}" target="_blank"><img src="./src/img/social/github.svg" alt="github">Código</a>
          <a href="${portfolio[i].site ? portfolio[i].site : 'https://github.com/YaGRRusso'}" target="_blank"><img src="./src/img/social/site.svg" alt="site">Site</a>
        </div>
      </div>

    </div>`
  }

  document.querySelector('.portfolio-grid').innerHTML = sites;
  portfolioZoom();

}

function portfolioZoom() {
  document.querySelectorAll('.grid-item-img').forEach((item) => {
    item.addEventListener('click', (ev) => {
      document.querySelector('.portfolio-modal').style.display = 'block';
      document.querySelector('.portfolio-modal img').src = ev.target.src
      document.querySelector('body').style.overflowY = 'hidden'
    })
  })
}

document.querySelector('.portfolio-modal span').addEventListener('click', () => {
  document.querySelector('.portfolio-modal').style.display = 'none';
  document.querySelector('body').style.overflowY = 'auto'
})

document.querySelector('.portfolio-modal').addEventListener('click', (item) => {
  item.currentTarget.style.display = 'none';
  document.querySelector('body').style.overflowY = 'auto'
})


// ===================== //
//     Section EMAIL     //
// ===================== //
function sendEmail() {
  let name = document.querySelector('#em-name').value
  let email = document.querySelector('#em-email').value
  let subject = document.querySelector('#em-subject').value
  let message = document.querySelector('#em-message').value

  window.location = `mailto:yagrrusso@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0A${name}%0D%0A${email}`
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
    network += `<a target="_blank" href="${social[i].link}"><img src="./src/img/social/${social[i].name}.svg" alt="${social[i].name}" title="${social[i].name}"></a>`
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
scrollAnimation();
InfoWrite();
aboutWrite('about');
setTimeout(typeWriter, 1000);
stackWrite();
portfolioWrite();
footerWrite();
courseWrite();
setInterval(hide, 5000);

// ===================== //
//         MOBILE        //
// ===================== //
const menuOpener = document.querySelector('.menu-opener')

menuOpener.addEventListener('click', () => {
  document.querySelector('.header-mobile').classList.toggle('active');
  document.querySelector('.mobile-modal').classList.toggle('active');

  if (!menuMobileOpen) {
    menuOpener.classList.add('open')
    menuMobileOpen = true;
  } else {
    menuOpener.classList.remove('open')
    menuMobileOpen = false;
  }

  scrollPercent();
})

document.querySelector('.mobile-modal').addEventListener('click', () => {
  document.querySelector('.header-mobile').classList.remove('active');
  document.querySelector('.mobile-modal').classList.remove('active');
  menuOpener.classList.remove('open')
  menuMobileOpen = false

  scrollPercent();
})