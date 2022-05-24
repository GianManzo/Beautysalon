const toggle = document.querySelectorAll('.header__nav .toggle')
const nav = document.querySelector('.header__nav')

for (const element of toggle) {
  element.addEventListener('click', function (event) {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('.header__nav .header__ul--a')
for (const link of links) {
  link.addEventListener('click', function (event) {
    nav.classList.remove('show')
  })
}

function changeHeaderScroll() {
  const navHeight = nav.offsetHeight
  if (window.scrollY >= navHeight) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function backToTop() {
  const btnToTop = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    btnToTop.classList.add('show')
  } else {
    btnToTop.classList.remove('show')
  }
}

//Testimonials carousel / swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    //para as @mediaquerie
    767: {
      slidesPerView: 2, //apartir de 767px add 2 por pag
      setWrapperSize: true
    }
  }
})

//Mostrar elementos quando scroll na pagina

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700',
  reset: TextTrackCue
})
scrollReveal.reveal(
  `#home .container__img, #home .container__text,
    #about .container__img, #about .container__text,
    #services .container__text, #services .card,
    #testimonials .container__text, .swiper-pagination,
    #contact .container__contact, #contact .grid,
    #contact .infos,
    #footer .container__text, #footer .footer__icons
`,
  { interval: 150 }
)

//BACK TO TOP

window.addEventListener('scroll', function (event) {
  //ação referente a evento da janela, window
  changeHeaderScroll()
  backToTop()
})
