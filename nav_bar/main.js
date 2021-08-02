const Btn = document.querySelector('.navbar_Btn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

Btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
