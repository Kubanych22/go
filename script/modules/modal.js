import Inputmask from 'inputmask/lib/inputmask.js';
import JustValidate from 'just-validate';

const openModalBtn = document.querySelectorAll('.header__order-btn');

const createForm = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  const formTitle = document.createElement('h2');
  formTitle.classList.add('modal-title');
  formTitle.textContent = 'Заказать звонок';
  
  const form = document.createElement('form');
  form.classList.add('modal-form');
  form.action = '';
  const btn = document.createElement('button');
  btn.classList.add('close');
  
  const formGroupName = document.createElement('div');
  formGroupName.classList.add('form__group');
  
  const formLabelName = document.createElement('label');
  formLabelName.classList.add('modal-form__label');
  formLabelName.htmlFor = 'name';
  formLabelName.textContent = 'Имя:';
  
  const formInputName = document.createElement('input');
  formInputName.classList.add('form__input-name');
  formInputName.type = 'text';
  formInputName.id = 'name';
  formInputName.name = 'name';
  formInputName.required = true;
  
  formGroupName.append(formLabelName, formInputName);
  
  const formGroupPhone = document.createElement('div');
  formGroupPhone.classList.add('form__group');
  
  const formLabelPhone = document.createElement('label');
  formLabelPhone.classList.add('modal-form__label');
  formLabelPhone.htmlFor = 'phone';
  formLabelPhone.textContent = 'Телефон:';
  const formInputPhone = document.createElement('input');
  formInputPhone.classList.add('form__input-phone');
  formInputPhone.type = 'tel';
  formInputPhone.id = 'phone';
  formInputPhone.name = 'phone';
  formInputPhone.required = true;
  
  formGroupPhone.append(formLabelPhone, formInputPhone);
  
  const btnSubmit = document.createElement('button');
  btnSubmit.classList.add('form__btn-submit');
  btnSubmit.type = 'submit';
  btnSubmit.textContent = 'Позвонить мне';
  
  form.append(btn, formTitle, formGroupName,
    formGroupPhone, btnSubmit);
  modal.append(form);
  const main = document.querySelector('.main');
  main.prepend(modal);
  return {
    modal,
    form,
    btn,
  };
};

const {modal, form, btn} = createForm();

const openModal = () => {
  modal.classList.add('is-visible');
};

const getData = (target) => {
  target.preventDefault();
  const inputName = form.querySelector('.form__input-name');
  const userName = inputName.value;
  const inputPhone = form.querySelector('.form__input-phone');
  const userPhone = inputPhone.value;
};

const closeModal = () => {
  modal.classList.remove('is-visible');
};

openModalBtn.forEach(item => item.addEventListener('click', openModal));

form.addEventListener('submit', getData);

modal.addEventListener('click', (e) => {
  const target = e.target;
  if (target === modal || target === btn) {
    form.reset();
    closeModal();
  }
});

const inputTel = document.querySelector('.form__input-phone');
const telMask = new Inputmask('+7(999) 999-99-99');
telMask.mask(inputTel);

const justValidate = new JustValidate('.modal-form');
justValidate
  .addField('.form__input-name', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно к заполнению',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя должно быть не короче 2-х символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя должно содержать не более 30-ти символов',
    },
  ])
  .addField('.form__input-phone', [
    {
      rule: 'required',
      errorMessage: 'Поле обязательно к заполнению',
    },
    {
      validator() {
        const phone = inputTel.inputmask.unmaskedvalue();
        return !!(Number(phone) && phone.length === 10);
      },
      errorMessage: 'Некорректный телефон',
    },
  ])

