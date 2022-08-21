document.addEventListener('DOMContentLoaded', () => {

  // swiper

  let swiperOne = null;
  let swiperTwo = null;

  function resizeNewSlider (slides, space) {
    swiperOne = new Swiper('.preview__slider-one', {
      direction: 'vertical',
      loop: true,
      slidesPerView: slides,
      spaceBetween: space,
      observeSlideChildren: true,
      simulateTouch: false,
      allowTouchMove: false,
      preventInteractionOnTransition: true,
      autoplay: {
        delay: 2000,
      },
      speed: 1000,
      obeserver: true,
      observerParents: true, 
    });

    swiperTwo = new Swiper('.preview__slider-two', {
      direction: 'vertical',
      loop: true,
      slidesPerView: slides,
      spaceBetween: space,
      observeSlideChildren: true,
      simulateTouch: false,
      allowTouchMove: false,
      preventInteractionOnTransition: true,
      // noSwiping: true,
      // noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 1000,
      },
      speed: 1000,
    });
  }

  function checkWidth () {
    if (window.innerWidth <= 992) {
      if (swiperOne != null && swiperTwo != null) {
        swiperOne.destroy()
        swiperTwo.destroy()
      }

      resizeNewSlider(3, 15)
    } 
    
    if (window.innerWidth <= 560) {
      if (swiperOne != null && swiperTwo != null) {
        swiperOne.destroy()
        swiperTwo.destroy()
      }

      resizeNewSlider(2, 0)
    } 

    if (window.innerWidth >= 992) {
      if (swiperOne != null && swiperTwo != null) {
        swiperOne.destroy()
        swiperTwo.destroy()
      }
      resizeNewSlider(4, 20)
    }
  }

  checkWidth()

  window.addEventListener('resize', () => {
    checkWidth()
  })

  // скрипт всплывающего окна

  let btn = document.querySelectorAll('.btn')
  const popup = document.querySelector('.popup')
  const popupBtnRegister = document.querySelector('.popup__btn')
  const popupForm = document.querySelector('.popup__form')
  const popupBtnClosed = document.querySelector('.popup__closed')
  
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].textContent.includes('Register')) {
      btn[i].classList.add('_register')

      btn[i].addEventListener('click', (e) => {
        e.preventDefault();
        
        popup.classList.add('popup-active')
        popup.classList.remove('close')
        document.body.classList.add('hidden')
        setTimeout(() => {
          popupForm.classList.remove('animation-close')
          popupForm.classList.add('animation-open')
        }, 300)
        

        popupBtnRegister.addEventListener('click', (e) => {
          e.preventDefault()

          popupBtnRegister.classList.add('active')
        })

        document.addEventListener('click', (e) => {
          if (e.target == popup) {
            
            setTimeout(() => {
              popup.classList.remove('popup-active')
              popup.classList.add('close')
              popupBtnRegister.classList.remove('active')
              document.body.classList.remove('hidden')
            }, 500)
            
            popupForm.classList.remove('animation-open')
            popupForm.classList.add('animation-close')
          } 
        })

        popupBtnClosed.addEventListener('click', (e) => {
          e.preventDefault()

          setTimeout(() => {
            popup.classList.remove('popup-active')
            popup.classList.add('close')
            popupBtnRegister.classList.remove('active')
            document.body.classList.remove('hidden')
          }, 500)
          
          popupForm.classList.remove('animation-open')
          popupForm.classList.add('animation-close')
        })
      })
    }
  }

  // burger-menu

  console.log(window.outerWidth)
  const headerNav = document.querySelector('.header__nav')
  const headerNavLinks = document.querySelector('.header__nav .header__list')
  const headerNavBtns = document.querySelectorAll('.header__nav .btn')
  const burgerBtn = document.createElement('a') 
  const span = document.createElement('span')

  if (window.innerWidth <= 992) {
    headerNavLinks.classList.add('adaptive')
    // headerNav.setAttribute('style', 'display: none')
    headerNavBtns.forEach(el => {
      el.setAttribute('style', 'display: none')
    })
    burgerBtn.setAttribute('style', 'display: block')

    burgerBtn.classList.add('burger')
    burgerBtn.append(span)

    document.querySelector('.header .container').append(burgerBtn)

    
  }

  burgerBtnElem(burgerBtn, headerNavLinks)
  // burgerBtnElem(burgerBtn, headerNavLinks)
  window.addEventListener('resize', () => {
    // if(window.matchMedia('(max-width: 992px)').matches) {
    //   headerNavLinks.classList.add('adaptive')
    //   // headerNav.setAttribute('style', 'display: none')
    //   headerNavBtns.forEach(el => {
    //     el.setAttribute('style', 'display: none')
    //   })
      
    //   burgerBtn.setAttribute('style', 'display: block')
      
    //   burgerBtn.classList.add('burger')
    //   burgerBtn.append(span)

    //   document.querySelector('.header .container').append(burgerBtn)

    //   burgerBtnElem(burgerBtn, headerNavLinks)
    // } else {
    //   // headerNav.removeAttribute('style')
    //   headerNavLinks.classList.remove('active')
    //   headerNavLinks.classList.remove('adaptive')
    //   headerNavBtns.forEach(el => {
    //     el.removeAttribute('style')
    //   })
    //   burgerBtn.setAttribute('style', 'display: none')
    // }


    if (window.innerWidth <= 992) {
      headerNavLinks.classList.add('adaptive')
      // headerNav.setAttribute('style', 'display: none')
      headerNavBtns.forEach(el => {
        el.setAttribute('style', 'display: none')
      })
      burgerBtn.setAttribute('style', 'display: block')
  
      burgerBtn.classList.add('burger')
      burgerBtn.append(span)
  
      document.querySelector('.header .container').append(burgerBtn)
  
      // burgerBtnElem(burgerBtn, headerNavLinks)
    } else {
        // headerNav.removeAttribute('style')
        headerNavLinks.classList.remove('active')
        headerNavLinks.classList.remove('adaptive')
        headerNavBtns.forEach(el => {
          el.removeAttribute('style')
        })
        burgerBtn.setAttribute('style', 'display: none')
      }
  })

  function burgerBtnElem (el, nav) {
    el.addEventListener('click', (e) => {
      e.preventDefault()
      if (el.classList.contains('active') != true) {
        el.classList.add('active')
        console.log('add')
      } else {
        el.classList.remove('active')
        console.log('remove')
      }
      

      if(el.classList.contains('active') == true) {
        // headerNav.removeAttribute('style')
        setTimeout(() => {
          nav.classList.add('active')
        }, 300)
      } else {
        
        // setTimeout(() => {
        //   headerNav.setAttribute('style', 'display: none')
          
        // }, 500)
      }

      if(el.classList.contains('active') != true) {
        setTimeout(() => {
          nav.classList.remove('active')
        }, 300)
      }
      
    })
  }
})