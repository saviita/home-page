// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const menuIconElement = document.getElementById('menu-icon')
const menuElement = document.getElementById('menu-nav')

const showMenu = () => {
    if(menuElement.classList.contains('menu__hide')) {
        menuIconElement.src = './assets/images/icon-menu-close.svg'
        menuElement.classList.remove('menu__hide')
        document.body.classList.add('menu-open')
    } else {
        menuIconElement.src = './assets/images/icon-menu.svg'
        menuElement.classList.add('menu__hide')
        document.body.classList.remove('menu-open')
    }
}

menuIconElement.addEventListener('click', showMenu)