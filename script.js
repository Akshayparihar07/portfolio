const openHamButton = document.querySelector('.open-hamburger')
const closeHamButton = document.querySelector('.close-hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu')
openHamButton.addEventListener('click', () => hamburgerMenu.style.right = '0px');
closeHamButton.addEventListener('click', () => hamburgerMenu.style.right = '-1500px')
