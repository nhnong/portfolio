
/* 
Clicking on the menu icon on smaller screens opens an overlay navigation list, gives it an 'active' status 
*/
/* 
This section was written with the assistance of Claude AI.
Prompt: "toggle visibility of a generic navigation menu icon"
 */
const navMenu = document.querySelector('.nav-menu');
navMenu.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-ul-links');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

/* Making navigation bar position appear on scroll up, and disappear on scroll down*/
/* 
This section was written with the assistance of Claude AI.
Prompt: "toggle visibility of a navigation bar to be visible when scrolling up and hidden when scrolling down"
 */

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


/* Active status toggle for folder buttons. Changes background colour and text when active*/
/* 
This section was written with the assistance of Claude AI.
Prompt: "toggle visibility of a section depending on button clicked"
 */
function switchFolder(clicked) {
    document.querySelectorAll('.button-folder').forEach(btn => {
        btn.classList.remove('active');
    });
    clicked.classList.add('active');


    // display the corresponding section based on the data attribute of the clicked button
    const target = clicked.dataset.target;
    document.querySelectorAll('.dev-window-mask').forEach(panel => {
        panel.classList.remove('active');
    });
    document.querySelector(`[data-panel="${target}"]`).classList.add('active');
}


/* Animation for text in home hero banner*/
/* 
This section was written with the assistance of Claude AI.
Prompt: "wave animation to apply to h1 element"
 */
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