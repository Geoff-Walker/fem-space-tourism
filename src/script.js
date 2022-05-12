const menu = document.querySelector('.header-menu');
const nav = document.querySelector('.header-nav');
const menuClose = document.querySelector('.header-close');
const menuList = document.querySelector('.header-nav-list');
const mobExplore = document.querySelector('.home-container-explore-mobile');

menu.addEventListener('click', openMobMenu);
menuClose.addEventListener('click', openMobMenu);
mobExplore.addEventListener('click', openMobMenu);

function openMobMenu() {
	nav.classList.toggle('header-nav-mobile-hide');
	menu.classList.toggle('mob-hidden');
	menuClose.classList.toggle('mob-hidden');
	menuList.classList.toggle('mob-hidden');
}
