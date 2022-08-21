

// let swiperTwo = new Swiper('.swiper-container', {
//   // direction: 'vertical',
//   loop: true,
//   slidesPerView: 4,
//   loopedSlides: 4,
//   spaceBetween: 30,
// });

document.addEventListener('DOMContentLoaded', () => {

  // swiper

  let swiperOne;
  let swiperTwo;
  let sliderMobile;
  const width = 992

  const sliderOneDesctop = () => {
    swiperOne = new Swiper('.preview__slider-one', {
      direction: 'vertical',
      loop: true,
      loopedSlides: 4,
      slidesPerView: 4,
      spaceBetween: 20,
      observeSlideChildren: true,
      autoplay: {
        delay: 2000,
      },
      speed: 1000,
    });
  }

  const sliderTwoDesctop = () => {
    swiperTwo = new Swiper('.preview__slider-two', {
      direction: 'vertical',
      loop: true,
      // loopedSlides: 4,
      slidesPerView: 4,
      spaceBetween: 20,
      observeSlideChildren: true,
      autoplay: {
        delay: 1000,
      },
      speed: 1000,
    });
  }
  
  const sliderInitMediaMobile = () => {
    sliderMobile = new Swiper ('.preview__slider-three', {
      loop: true,
      // loopedSlides: 4,
      slidesPerView: 4,
      spaceBetween: 20,
      observeSlideChildren: true,
      autoplay: {
        delay: 1000,
      },
      speed: 1000,
    })
  }

  function resizeNewSlider () {

    console.log(window.innerWidth)

    if (window.innerWidth >= width) {
      sliderMobile.destroy()
      sliderOneDesctop()
      sliderTwoDesctop()

    } else {
      swiperOne.destroy()
      swiperTwo.destroy() 
      sliderInitMediaMobile()
    }
  }

  window.addEventListener('resize', resizeNewSlider)
  if (window.innerWidth <= width) {
    swiperOne.destroy()
    swiperTwo.destroy()
    sliderInitMediaMobile() 
  } 
  sliderMobile.destroy()
  sliderOneDesctop()
  sliderTwoDesctop()

  // window.addEventListener('resize', () => {
  //   if (window.matchMedia('(max-width: 1920px)').matches) {
  //     let swiperOneMobile = new Swiper('.preview__slider-one', {
  //       slidesPerView: 4,
  //       autoplay: {
  //         delay: 1000,
  //       },
  //       direction: 'horizontal',
  //     })
  //   }
  // })


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

  if (window.outerWidth <= 992) {
    headerNavLinks.classList.add('adaptive')
    // headerNav.setAttribute('style', 'display: none')
    headerNavBtns.forEach(el => {
      el.setAttribute('style', 'display: none')
    })
    burgerBtn.setAttribute('style', 'display: block')

    burgerBtn.classList.add('burger')
    burgerBtn.append(span)

    document.querySelector('.header .container').append(burgerBtn)

    burgerBtnElem(burgerBtn, headerNavLinks)
  }

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


    if (window.outerWidth <= 992) {
      headerNavLinks.classList.add('adaptive')
      // headerNav.setAttribute('style', 'display: none')
      headerNavBtns.forEach(el => {
        el.setAttribute('style', 'display: none')
      })
      burgerBtn.setAttribute('style', 'display: block')
  
      burgerBtn.classList.add('burger')
      burgerBtn.append(span)
  
      document.querySelector('.header .container').append(burgerBtn)
  
      burgerBtnElem(burgerBtn, headerNavLinks)
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
      el.classList.toggle('active')
      

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