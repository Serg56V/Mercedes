const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const menuListLinks = document.querySelectorAll('.menu-list__link')

const toggleMenu = () => {
  burger.classList.toggle('humburger-menu-active')
  menuElem.classList.toggle('menu-active')
}

burger.addEventListener('click', () => toggleMenu())

menuListLinks.forEach((ListLink) => {
  ListLink.addEventListener('click', () => {
    menuElem.classList.remove('menu-active')
    burger.classList.remove('humburger-menu-active')
  })
})