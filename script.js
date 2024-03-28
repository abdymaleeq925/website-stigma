document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader'),
        header = document.getElementsByClassName('header')[0],
        arrowUp = document.querySelector('.go-to-up');

    window.onload = function () {
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }

    window.onscroll = function () {
        if (window.scrollY > 150) {
            header.classList.add('fixed');
            arrowUp.classList.add('scrollTop');
        }
        else {
            header.classList.remove('fixed');
            arrowUp.classList.remove('scrollTop');
        }
    }

    arrowUp.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })

    const burgerMenu = document.querySelector('.header__burger'),
          closeMenu = document.querySelector('.close__btn'),
          navLinks = document.querySelector('.burger-menu');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.add('show-menu');
    });
    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('show-menu'); 
    });
    document.addEventListener('click', function(e) {
        if(!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('show-menu');
        }
    });

    const swiper = new Swiper('.services__wrapper.swiper', {
        speed: 400,
        spaceBetween: 100,
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
})