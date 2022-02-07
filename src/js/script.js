const header = document.querySelector('header');
const percent = document.querySelector('.percent')
window.addEventListener('scroll', scrollPercent)

function scrollPercent(){
  let windowPos = window.scrollY;
  let windowHeight = document.body.offsetHeight - window.innerHeight;
  let windowPercent = parseInt((100 * windowPos)/windowHeight);

  if (windowPos >= 100){
    header.classList.add('fix');
    percent.style.display = 'block';
  } else {
    header.classList.remove('fix');
    percent.style.display = 'none';
  }
  percent.style.width = `${windowPercent}%`;
}

document.querySelectorAll('.about-box').forEach(item => {
  item.addEventListener('click', ()=>aboutBoxSelect(item));
})

function aboutBoxSelect(i){
  document.querySelector('.selected').classList.remove('selected');
  i.classList.add('selected');
  let info = i.getAttribute('data-info');
  aboutWrite(info);
}

function aboutWrite(info){
  let type = '';
  let title = '';
  let desc = '';

  if (info == 'about') {
    type = 'Introdução';
    title = 'Um pouco sobre mim.';
    desc = `Tudo bem?<br>Me chamo ${personal.name}, tenho ${personal.age} anos e sou apaixonado por informática desde criança, quando ganhei meu primeiro computador.<br>Aprendi muitas coisas sozinho como design, programação e hardware, sempre amei essa área e hoje sigo aprendendo cada vez mais.<br><br>
    Aos 17 anos, com tudo o que eu havia aprendido sozinho, dei aulas de informática e design em uma escola reconhecida nacionalmente, o Instituto Mix de Profissões. Aos 19, me formei como técnico em informática pelo instituo federal.`;
  }
  if (info == 'formation'){
    type = 'Formação';
    title = 'Minha escolaridade.';
    desc = 'cu';
  }
  if (info == 'experience'){
    type = 'Experiência';
    title = 'Minha experiência profissional.';
    desc = 'cu';
  }

  document.querySelector('.about-type').innerHTML = type;
  document.querySelector('.about-title').innerHTML = title;
  document.querySelector('.about-desc').innerHTML = desc;
}

// aboutWrite('about')

// MOBILE
const menuOpener = document.querySelector('.menu-opener')
let menuOpen = false

menuOpener.addEventListener('click', ()=>{
  if (!menuOpen){
    menuOpener.classList.add('open')
    menuOpen = true
  } else {
    menuOpener.classList.remove('open')
    menuOpen = false
  }
})