let darkBtn = document.querySelector('.navbar__btn');
darkBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
});

let menuLinks = document.querySelectorAll(".navbar__menu-link");
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuLinks.forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
    })
})