import {debounce} from './debounce.js';

const burger = document.querySelector('.burger');
export const nav = document.querySelector('.navigation');
const burgerCloseLine = document.querySelectorAll('.burger__line');
const burgerClose = document.createElement('svg');

let startTime = NaN;
const durationOpacity = 700;
const showBurgerMenu = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / durationOpacity;
  nav.style.opacity = progress.toString();
  if (progress < 1) {
    requestAnimationFrame(showBurgerMenu);
  } else {
    startTime = NaN;
  }
};

const handle = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('burger__line')) {
    burger.style.display = 'block';
    nav.style.opacity = 0 + '';
    nav.style.display = 'block';
    requestAnimationFrame(showBurgerMenu);
    burgerCloseLine.forEach(item => item.style.display = 'none');
    burgerClose.classList.add('burger__svg');
    burgerClose.innerHTML = `
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="38.1838" width="54" height="5" rx="2" transform="rotate(-45 0 38.1838)" fill="#6C0287"/>
      <rect x="3.53564" width="54" height="5" rx="2" transform="rotate(45 3.53564 0)" fill="#6C0287"/>
    </svg>
  `;
    burger.append(burgerClose);
    burgerClose.style.display = 'block';
    
  } else {
    burgerCloseLine.innerHTML = '';
    burgerCloseLine.forEach(item => item.style.display = 'block');
    nav.style.display = 'none';
    burgerClose.style.display = 'none';
  }
};

const debounceHandle = debounce(handle);
burger.addEventListener('click', debounceHandle);


