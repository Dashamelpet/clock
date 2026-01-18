const clockWrap = document.querySelector('.clock-wrap');
const arrow = document.querySelector('.arrow');

let isSpinning = false;
const rotateArrow = () => {
  const min = 720;
  const max = 3600;
  const degRandom = Math.floor(Math.random() * (max - min + 1) + min);
  arrow.style.transition = 'transform 4s ease-out';
  arrow.style.transform = `rotate(${degRandom}deg)`;
};
clockWrap.addEventListener('click', rotateArrow);
