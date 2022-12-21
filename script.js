/*
*
    DARK-MODE BUTTON
*
*/
const toggleBtn = document.querySelector('.toggle-btn');
let darkBtn = document.querySelector('#dark-btn');
let lightBtn = document.querySelector('#light-btn');

let darkImg = document.querySelector('#dark-image');
let lightImg = document.querySelector('#light-image');

toggleBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'block';

        darkImg.style.display = 'block';
        lightImg.style.display = 'none';
    } else {
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';

        darkImg.style.display = 'none';
        lightImg.style.display = 'block';
    }
});

function showProject(project) {
    if (project == 'battleship') {
        document.getElementById('dreamoffer').style.display = 'none';
        document.getElementById('exerciselog').style.display = 'none';
        document.getElementById('battleship').style.display = 'block';
    } else if (project == 'exerciselog') {
        document.getElementById('dreamoffer').style.display = 'none';
        document.getElementById('exerciselog').style.display = 'block';
        document.getElementById('battleship').style.display = 'none';
    } else {
        document.getElementById('dreamoffer').style.display = 'block';
        document.getElementById('exerciselog').style.display = 'none';
        document.getElementById('battleship').style.display = 'none';
    }
}


// /*
// *
//     NAVBAR LINK HIGHLIGHTING
// *
// */
// let menuLinks = document.querySelectorAll(".navigation__item");
// menuLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//         menuLinks.forEach((el) => el.classList.remove("active"));
//         link.classList.add("active");
//     })
// })


// /*
// *
//     TYPEWRITER ANIMATION
// *
// */
// let content = [
//     "Web Developer",
//     "Programmer",
//     "Artist",
//     "Cat Dad",
//     "Amateur Chef",
//     "Avid Reader"
// ];

// let phrase = 0;
// let phraseIndex = 0;

// // holds the return value from setInterval
// let intervalVal;

// // holds the text
// let element = document.querySelector(".text");

// let cursor = document.querySelector(".cursor");

// // implements typing effect
// function Type() {
//     // display one more character
//     let text = content[phrase].substring(0, phraseIndex + 1);
//     element.textContent = text;
//     phraseIndex++;

//     // if full string is displayed, delete string after a delay
//     if(text === content[phrase]) {
//         // hide cursor
//         cursor.style.display = 'none';

//         // delete phrase at a different interval speed
//         clearInterval(intervalVal);
//         setTimeout(() => {
//             intervalVal = setInterval(Delete, 50);
//         }, 2000);
//     }
// }

// // implements deleting effect
// function Delete() {
//     // delete one more character
//     let text = content[phrase].substring(0, phraseIndex - 1);
//     element.textContent = text;
//     phraseIndex--;

//     // if string is fully deleted, display next string
//     if(text === '') {
//         clearInterval(intervalVal);

//         // if the string is last in content, next string is the first string
//         if(phrase == (content.length - 1))
//             phrase = 0;
//         else
//             phrase++;

//         phraseIndex = 0;

//         setTimeout(() => {
//             cursor.style.display = 'inline-block';
//             intervalVal = setInterval(Type, 200);
//         }, 200);
//     }
// }

// // start typing effect on load
// setTimeout(() => {
//     intervalVal = setInterval(Type, 200);
// }, 1000);


// /*
// *
//     REVEAL ON SCROLL
// *
// */
// window.addEventListener('scroll', reveal);

// function reveal() {
//     let reveals = document.querySelectorAll('.reveal');

//     for(let i=0; reveals.length; i++) {
//         // height of window
//         let windowHeight = window.innerHeight;

//         // the size and position of element relative to the viewport
//         let revealTop = reveals[i].getBoundingClientRect().top;

//         let revealPoint = 50;

//         // show element when scrolled to
//         if(revealTop < windowHeight - revealPoint) {
//             reveals[i].classList.add('active');
//         } else {
//             reveals[i].classList.remove('active');
//         }
//     }
// }