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