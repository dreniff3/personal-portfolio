// Dark-mode button
let darkBtn = document.querySelector('.navbar__btn');
darkBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
});

// Navbar link highlighting
let menuLinks = document.querySelectorAll(".navbar__menu-link");
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuLinks.forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
    })
})

// Typewriter animation
let content = [
    "Web Developer",
    "Programmer",
    "Artist",
    "Cat Dad",
    "Amateur Chef",
    "Avid Reader"
];

let phrase = 0;
let phraseIndex = 0;

// holds the return value from setInterval
let intervalVal;

// holds the text
let element = document.querySelector(".text");

let cursor = document.querySelector(".cursor");

// implements typing effect
function Type() {
    // display one more character
    let text = content[phrase].substring(0, phraseIndex + 1);
    element.textContent = text;
    phraseIndex++;

    // if full string is displayed, delete string after a delay
    if(text === content[phrase]) {
        // hide cursor
        cursor.style.display = 'none';

        // delete phrase at a different interval speed
        clearInterval(intervalVal);
        setTimeout(() => {
            intervalVal = setInterval(Delete, 50);
        }, 2000);
    }
}

// implements deleting effect
function Delete() {
    // delete one more character
    let text = content[phrase].substring(0, phraseIndex - 1);
    element.textContent = text;
    phraseIndex--;

    // if string is fully deleted, display next string
    if(text === '') {
        clearInterval(intervalVal);

        // if the string is last in content, next string is the first string
        if(phrase == (content.length - 1))
            phrase = 0;
        else
            phrase++;

        phraseIndex = 0;

        setTimeout(() => {
            cursor.style.display = 'inline-block';
            intervalVal = setInterval(Type, 200);
        }, 200);
    }
}

// start typing effect on load
setTimeout(() => {
    intervalVal = setInterval(Type, 200);
}, 1000);