

$(function () {

  $('.catalog__item-title, .services__item-title').matchHeight();

  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="#1EA56A" /><path d="M42 31.5C42.8284 31.5 43.5 30.8284 43.5 30C43.5 29.1716 42.8284 28.5 42 28.5V31.5ZM15.9393 28.9393C15.3536 29.5251 15.3536 30.4749 15.9393 31.0607L25.4853 40.6066C26.0711 41.1924 27.0208 41.1924 27.6066 40.6066C28.1924 40.0208 28.1924 39.0711 27.6066 38.4853L19.1213 30L27.6066 21.5147C28.1924 20.9289 28.1924 19.9792 27.6066 19.3934C27.0208 18.8076 26.0711 18.8076 25.4853 19.3934L15.9393 28.9393ZM42 28.5H17V31.5H42V28.5Z" fill="white" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="#1EA56A" /><path d="M17 28.5C16.1716 28.5 15.5 29.1716 15.5 30C15.5 30.8284 16.1716 31.5 17 31.5V28.5ZM43.0607 31.0607C43.6464 30.4749 43.6464 29.5251 43.0607 28.9393L33.5147 19.3934C32.9289 18.8076 31.9792 18.8076 31.3934 19.3934C30.8076 19.9792 30.8076 20.9289 31.3934 21.5147L39.8787 30L31.3934 38.4853C30.8076 39.0711 30.8076 40.0208 31.3934 40.6066C31.9792 41.1924 32.9289 41.1924 33.5147 40.6066L43.0607 31.0607ZM17 31.5L42 31.5V28.5L17 28.5V31.5Z" fill="white" /></svg></button>',
    responsive: [
      {
        breakpoint: 639,
        settings: "unslick",
      },
    ]
  })

  $('.input-phone').inputmask({ "mask": "+7(999) 999-99-99" })

  $('.form').submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function () {
      alert('Спасибо за заявку! Скоро мы с вами свяжемся.')
      console.log('ok');
      $('.form').trigger('reset')
    }).fail(function () {
      alert('Произошла ошибка. Проверьте введенные данные.')
      console.log('fail');
    })
    return false;
  });

  $('.form-quiz').submit(function () {
    $.ajax({
      type: "POST",
      url: "quiz.php",
      data: $(this).serialize()
    }).done(function () {
      alert('Спасибо за заявку! Скоро мы с вами свяжемся.')
      console.log('ok');
    }).fail(function () {
      alert('Произошла ошибка. Проверьте введенные данные.')
      console.log('fail');
    })
    return false;
  });

});


const body = document.querySelector('body');

function bodyNonScroll(elem, className) {

  if (elem.classList.contains(className)) {
    body.classList.add('body-hide')
  } else {
    body.classList.remove('body-hide')
  };

}


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

  for (let i = 0; i < nodeElems.length; i++) {
    nodeElems[i].style.backgroundImage = 'url(' + `images/install/install-${i + 1}.png` + ')'
  }
})();


// accordeon 
(() => {
  const accordeons = [...document.querySelectorAll('.accordeon')]
  const title = [...document.querySelectorAll('.accordeon__title')]
  let accordeonTitles = []
  const accordeonsLiFirst = []
  const accordeonsLiSecond = []



  const hideAll = (title, content) => {
    const itemsTitle = [...title]
    const elems = [...content]

    elems.forEach(item => {
      item.classList.remove('content--active')
    });

    itemsTitle.forEach(item => {
      item.classList.remove('item--active')
    });
  }


  title.forEach(item => {

    if (item.parentNode.parentNode == accordeons[0]) {
      accordeonsLiFirst.push(item)
    } else {
      accordeonsLiSecond.push(item)
    }

  });

  accordeonTitles = [accordeonsLiFirst, accordeonsLiSecond]

  accordeonTitles.forEach(titles => {

    titles.forEach(title => {

      title.addEventListener('click', function () {

        if (this.classList.contains('item--active')) {

          hideAll(this.parentNode.parentNode.querySelectorAll('.accordeon__title'), this.parentNode.parentNode.querySelectorAll('.accordeon__content'))

        } else {

          hideAll(this.parentNode.parentNode.querySelectorAll('.accordeon__title'), this.parentNode.parentNode.querySelectorAll('.accordeon__content'))

          this.classList.add('item--active')
          this.nextElementSibling.classList.add('content--active')
        }

      })

    });

  });


})();


// quiz

(() => {
  const buttonNext = document.querySelector('.quiz__buttons-next')
  const buttonPrev = document.querySelector('.quiz__buttons-prev')
  const buttonForm = document.querySelector('.quiz__buttons-btn')
  const quizItems = [...document.querySelectorAll('.quiz__content')]
  let quizCounter = 0

  const contentNone = (items) => {
    items.forEach(item => {
      item.classList.remove('quiz--active')
    });
  }

  buttonNext.addEventListener('click', function (e) {
    e.preventDefault()
    if (quizCounter >= quizItems.length - 1) {
      return
    } else {
      quizCounter++
    }
    if (quizCounter == 6) {
      this.style.display = 'none'
      buttonForm.style.display = 'block'
    }
    contentNone(quizItems)
    quizItems[quizCounter].classList.add('quiz--active')
  });

  buttonPrev.addEventListener('click', function (e) {
    e.preventDefault()
    if (quizCounter <= 0) {
      return
    } else {
      quizCounter--
    }
    if (quizCounter == 5) {
      buttonNext.style.display = 'flex'
      buttonForm.style.display = 'none'
    }
    contentNone(quizItems)
    quizItems[quizCounter].classList.add('quiz--active')
  });


})();


// burger - menu

(() => {

  // const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.menu')
  // burger.addEventListener('click', (e) => {

  //   menu.classList.toggle('menu--active');

  //   bodyNonScroll(menu, 'menu--active');
  // })

  // scroll section animation

  menu.addEventListener('click', (e) => {
    const targ = e.target
    if (targ.classList.contains('menu__list-link')) {
      e.preventDefault()
      const id = targ.getAttribute('href')
      const scrollTarget = document.querySelector(id)
      const topOffset = 87
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // document.querySelector(id).scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start'
      // })

      // menu.classList.remove('menu--active')
      // bodyNonScroll(menu, 'menu--active');
    }

  })
})();


// modal 

(() => {
  const modalLinks = [...document.querySelectorAll('.modal-link')]
  const closeModalLink = document.querySelector('.modal__close')
  const modal = document.querySelector('.modal')
  const modalBackground = document.querySelector('.modal-close')

  const modalBgOpen = () => {
    if (modal.classList.contains('modal--active')) {
      modalBackground.classList.add('modal--bg')
    } else {
      modalBackground.classList.remove('modal--bg')
    }
    bodyNonScroll(modal, 'modal--active')
  }

  const closeModal = () => {
    closeModalLink.addEventListener('click', () => {
      modal.classList.remove('modal--active')
      modalBgOpen()
    })

    modalBackground.addEventListener('click', () => {
      modal.classList.remove('modal--active')
      modalBgOpen()
    })


  }

  modalLinks.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault()

      modal.classList.add('modal--active')
      modalBgOpen()

    })
  });


  closeModal()


})()