const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const sideBar = document.querySelector('.container .left-selection')
const sidebarItem = document.querySelectorAll('.container .left-selection .sidebar .item')

menuOpen.addEventListener('click', () => {
    sideBar.style.top = '0'
})

menuClose.addEventListener('click', () => {
    sideBar.style.top = '-60vh'
})

let activeItem = sidebarItem[0]

sidebarItem.forEach(element => {
    element.addEventListener('click', () => {
        if(activeItem) activeItem.removeAttribute('id')

        element.setAttribute('id', 'active')
        activeItem = element
    })
})