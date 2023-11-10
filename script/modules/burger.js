const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation');

// const innerList = document.querySelector('#inner-list');
// const outerList = document.querySelector('#outer-list');

const burgerCloseLine = document.querySelectorAll('.burger__line')
const burgerClose = document.createElement('svg');

burger.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('burger__line')) {
    burger.style.display = 'block';
    nav.style.display = 'block';
    // innerList.style.display = 'none';
    burgerCloseLine.forEach(item => item.style.display = 'none');
    burgerClose.classList.add('burger__svg');
    burgerClose.innerHTML = `
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="38.1838" width="54" height="5" rx="2" transform="rotate(-45 0 38.1838)" fill="#6C0287"/>
      <rect x="3.53564" width="54" height="5" rx="2" transform="rotate(45 3.53564 0)" fill="#6C0287"/>
    </svg>
  `;
    burger.append(burgerClose);
    
    // openModalBtn.style.display = 'block';
    
  } else {
    burgerClose.innerHTML = '';
    burgerCloseLine.forEach(item => item.style.display = 'block');
    nav.style.display = 'none'
  }

});
