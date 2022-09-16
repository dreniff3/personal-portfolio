// function darkMode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }

let darkBtn = document.querySelector('.navbar__btn');
darkBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
});