
const navMenu = document.querySelector('.nav-menu');
navMenu.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-ul-links');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});



let lastScrollY = window.scrollY;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        nav.classList.add('nav-hidden');
    } else {
        nav.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});


function switchFolder(clicked) {
    document.querySelectorAll('.button-folder').forEach(btn => {
        btn.classList.remove('active');
    });
    clicked.classList.add('active');


    // switch active panel
    const target = clicked.dataset.target;
    document.querySelectorAll('.dev-window-mask').forEach(panel => {
        panel.classList.remove('active');
    });
    document.querySelector(`[data-panel="${target}"]`).classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('home1-div1-name');
    const text = h1.innerText;
    
    h1.innerHTML = text
        .split('')
        .map((char, i) => 
            char === ' ' 
            ? ' ' 
            : `<span style="animation-delay: ${i * 0.1}s">${char}</span>`
        )
        .join('');
});