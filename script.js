const menu = document.querySelector('.header-menu');
const menuClose = document.querySelector('.header-close');
const menuList = document.querySelector('.header-nav-list');

menu.addEventListener('click', openMobMenu());
menuClose.addEventListener('click', openMobMenu());

function openMobMenu() {
	menu.classList.toggle('mob-hidden');
	menuClose.classList.toggle('mob-hidden');
	menuList.classList.toggle('mob-hidden');
}
