/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() 
{
    const header = document.getElementById('header')

    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)


/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click',() =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})


/*===============Lib MixItUp Filter PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
})


/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork()
{
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))


/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonal = new Swiper(".testimonal__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
     breakpoints: {
         576: {
            slidesPerView: 2,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 48,
         },
     },
})


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive()
{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY<= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)


/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Tema previamente selecionado
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtemos o tema atual que a interface possui validando a classe light-theme
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Validamos se o usuário já escolheu um tema
if (selectedTheme) {
  // Caso a validação for cumprida, perguntamos qual era o problema para saber se ativamos ou desativamos a luz
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Ativar / desativar manualmente o  button
themeButton.addEventListener('click', () => {
    // Add ou remove light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay:700 })
sr.reveal(`.home__social, .home__scroll`, { delay:900, origin: 'bottom' })
