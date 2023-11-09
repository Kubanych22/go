const buttons = document.querySelectorAll('.faq__question-btn');

const faqQuestions = document.querySelectorAll('.faq__question-wrapper');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < faqQuestions.length; i++) {
      if (index === i) {
        faqQuestions[i].style.maxHeight = faqQuestions[i].classList.contains('faq__question-active') ?
          '' : `${faqQuestions[i].scrollHeight}`;
        faqQuestions[i].classList.toggle('faq__question-active');
      } else {
        faqQuestions[i].style.height = '';
        faqQuestions[i].classList.remove('faq__question-active');
      }
    }
  });
});
