const hamburger = document.querySelector('[data-hamburger]')
const menu = document.querySelector('[data-menu]')


hamburger.addEventListener('click', () => {
  menu.classList.toggle('open')
  hamburger.classList.toggle('active')
})