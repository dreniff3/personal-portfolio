'use strict';

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

let darkImg2 = document.querySelector('#dark-image2');
let lightImg2 = document.querySelector('#light-image2');

toggleBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'block';

        darkImg.style.display = 'block';
        lightImg.style.display = 'none';

        darkImg2.style.display = 'block';
        lightImg2.style.display = 'none';
    } else {
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';

        darkImg.style.display = 'none';
        lightImg.style.display = 'block';
        
        darkImg2.style.display = 'none';
        lightImg2.style.display = 'block';
    }
});

/*
*
    SHOW PROJECTS FUNCTION
*
*/

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

/*
*
    SHOW PAGE FUNCTION
*
*/

// show a different footer for home page
let footer = document.getElementById('footer');

function showPage(page) {
    if (page == 'home') {
        document.getElementById('home').style.display = 'block';
        document.getElementById('about').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
        footer.id = 'footer';
    } else if (page == 'about') {
        document.getElementById('home').style.display = 'none';
        document.getElementById('about').style.display = 'grid';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('contact').style.display = 'none';
        footer.id = 'centered__footer';
    } else if (page == 'projects') {
        document.getElementById('home').style.display = 'none';
        document.getElementById('about').style.display = 'none';
        document.getElementById('projects').style.display = 'grid';
        document.getElementById('contact').style.display = 'none';
        footer.id = 'centered__footer';
    } else if (page == 'contact') {
        document.getElementById('home').style.display = 'none';
        document.getElementById('about').style.display = 'none';
        document.getElementById('projects').style.display = 'none';
        document.getElementById('contact').style.display = 'flex';
        footer.id = 'centered__footer';
    }
}