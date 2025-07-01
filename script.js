let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// classList.toggle() method to control the display of a 
// navigation menu. When the menu element is clicked, the
//  bx-x class is toggled on or off, and simultaneously, the
//  active class is toggled on or off for the navbar element. 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// defines a function that runs whenever the user scrolls the window.
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer.', 'Backend Developer.', 'Web Designer.', 'UI/UX Designer.', 'Application Developer.',],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});