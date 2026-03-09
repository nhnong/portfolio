/*
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('home1-div1-firstname');
    
    if (textElement) {
        const words = textElement.innerText.split("");
        textElement.innerHTML = "";

        words.forEach((letter, i) => {
            const span = document.createElement('span');
            span.innerText = letter === " " ? "\u00A0" : letter;
            span.style.setProperty('--delay', `${i * 0.1}s`);
            textElement.appendChild(span);
        });
    } else {
        console.error("Could not find the element #wave-text!");
    }
});
*/
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
