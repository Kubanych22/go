import Inputmask from 'inputmask/lib/inputmask.js';

$(function () {
  $('#date').datepicker({
    showOn: 'button',
    buttonImageOnly: true,
    buttonImage: './img/down-arrow.svg',
    constrainInput: true,
  });
});

$(function () {
  $('#time').datetimepicker({
    datepicker: false,
    format: 'H:i',
  });
});

const arrow = document.querySelector('.number__man');
arrow.addEventListener('click', () => {
  arrow.stepUp();
});

const inputTel = document.querySelector('.phone');
const telMask = new Inputmask('+7(999) 999-99-99');
telMask.mask(inputTel);

const numberPeople = document.querySelector('#number');
const validateFormNumberPeople = () => {
  let message = '';
  if (numberPeople.validity.rangeOverflow) {
    message = 'Слишком много!';
  }
  document.querySelector('.error-number').textContent = message;
};
numberPeople.addEventListener('change', validateFormNumberPeople);

