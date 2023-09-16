'use scrict';

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header__nav-list');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {

    sections.forEach(sect => {
        let top = window.scrollY;
        let offset = sect.offsetTop - 150;
        let offsetHeight = sect.offsetHeight;
        let id = sect.getAttribute('id');

        if (top >= offset && top < offset + offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove('header__link--active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('header__link--active');
            })
        };
    })


    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

let darkModeIcon = document.querySelector('#dark-mode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.documentElement.classList.toggle('dark-mode');
};


//scroll revail
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal(`.home__content,
 .about__title,
 .experience__title,
 .portfolio__title,
 .contact__title`, { origin: 'top' });

ScrollReveal().reveal(`.experience__box,
.home__image-item,
 .portfolio__item,
 .contact-form`, { origin: 'bottom' });

ScrollReveal().reveal(`.about__image`, { origin: 'left' });