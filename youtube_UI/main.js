const moreBtn = document.querySelector('.info .introAndButton .moreBtn');
const intro = document.querySelector('.info .introAndButton .intro');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  intro.classList.toggle('clamp');
});
