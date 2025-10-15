// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');


// function sendMail(contactForm) {
//     let params = {
//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         message : document.getElementById("message").value,
//         subject : document.getElementById("subject").value,
//     }
//     emailjs.send("sservice_9b0eu09","ttemplate_xoep9fk",params).then(alert("Message sent successfully"))
// }
// // classList.toggle() method to control the display of a 
// // navigation menu. When the menu element is clicked, the
// //  bx-x class is toggled on or off, and simultaneously, the
// //  active class is toggled on or off for the navbar element. 
// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// // defines a function that runs whenever the user scrolls the window.
// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// }
// const typed = new Typed('.multiple-text', {
//     strings: ['Frontend Developer.', 'Backend Developer.', 'Web Designer.', 'UI/UX Designer.', 'Application Developer.',],
//     typeSpeed: 80,
//     backSpeed: 80,
//     backDelay: 1200,
//     loop: true,
// });


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Navbar toggle
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close navbar when scrolling
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typed.js animation
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer.', 'Backend Developer.', 'Web Designer.', 'UI/UX Designer.', 'Application Developer.'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

// ✅ EmailJS Send Function
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_9b0eu09", "template_xoep9fk", params)
        .then(() => {
            alert("✅ Message sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("❌ Failed to send message:", error);
            alert("⚠️ Failed to send message. Please try again.");
        });
});
