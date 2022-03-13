'use strict'

$(function () {
  $('.input-phone').inputmask({ "mask": "+7(999) 999-99-99" })
});



// inputs type='name' validate
(() => {
  const inputsName = document.querySelectorAll('.input-name')

  inputsName.forEach(input => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^а-яёa-z]+/gi, '')
      if (e.target.value.length === 1) {
        e.target.value = e.target.value.toUpperCase()
      }
    });
  });
})();

// set bagckrounds for install section
(() => {
  const nodeElems = [...document.querySelectorAll('.install__item')];

  for(let i = 0; i <= nodeElems.length; i++){
    nodeElems[i].style.backgroundImage = 'url(' + `./images/install/install-${i + 1}.png` + ')'
  }
})();