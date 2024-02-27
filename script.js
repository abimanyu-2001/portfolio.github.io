// document.addEventListener('DOMContentLoaded', function () {
//     const toggleButton = document.querySelector('.menu-toggle');
//     const menu = document.querySelector('.menu');

//     toggleButton.addEventListener('click', function () {
//         menu.classList.toggle('active');
//         toggleButton.classList.toggle('active');
//     });
// });


// // -----------    Skills section    --------------------------------


// let imgBx = document.querySelectorAll('.imgBx');
// let contentBx = document.querySelectorAll('.contentBx');

// for (let i = 0; i < imgBx.length; i++) {
//     imgBx[i].addEventListener('mouseover', function() {
//         for (let i = 0; i < contentBx.length; i++) {
//             contentBx[i].className = 'contentBx';
//         }
//         document.getElementById(this.dataset.id).className = 'contentBx active';

//         for (let i = 0; i < imgBx.length; i++) {
//             imgBx[i].className = 'imgBx';
//         }
//         this.className = 'imgBx active';
//     })
// }

// // -----------    Contact section    --------------------------------


// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contactForm');
//     const confirmationMessage = document.getElementById('confirmation');

//     contactForm.addEventListener('submit', function (e) {
//         e.preventDefault();
        
//         confirmationMessage.style.display = 'block';
//         contactForm.reset();
//     });
// });

