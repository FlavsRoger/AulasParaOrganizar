const selector = selector => document.querySelector(selector);

const hamburguer = selector('.menu-hamburguer');
const hamburguerMenu = selector('.nav-menu-hamburguer');

hamburguer.onclick = function() { hamburguerMenu.classList.toggle('visible'); }

// const menuHamburguer = document.querySelector('.menu-hamburguer');
//const navMenuHamburguer = document.querySelector ('.nav-menu-hambuerguer');
//const atualizerMenu = function () {
//    menuHamburguer.classList.toggle('Ativo');
//   navMenuHamburguer.classList.toggle('visivel');
// }

// menuHamburguer.onclick = atualizarMenu;