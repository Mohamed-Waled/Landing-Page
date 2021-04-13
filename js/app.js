/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Define Global Variables

const navBar = document.getElementById('navbar__list'); // to store the navBar Into Var To ease Useing it 
const sections = document.getElementsByClassName('section'); // to make sections as arrays
const navSections = document.getElementsByClassName('list'); 

// Helper Functions

function active(section) { //function to return the size and position of the section
    return (section.getBoundingClientRect().top);
};

function removeActive(section) {//function to remove the active class
    section.classList.remove('your-active-class');
    deActiveSection();
};

function addActive(section) { //function to add the active class if the condition is true
    if (active(section) < 150 && active(section) >= -150 ) {
        section.classList.add('your-active-class');
        activeSection();
    };
};

// Main Functions

// build the nav

function buildNav () {
    for (section of sections) {
        const addList = document.createElement('li'); //to make the listed items in the nav bar "sections"
        const addLink = document.createElement('a'); //to make the listed items as link to go to sections
        addList.appendChild(addLink);
        navBar.appendChild(addList);
        const secid = section.getAttribute('id'); //to ease reaching the id of the section
        const secdatanav = section.getAttribute('data-nav'); //to ease reaching the data nav of the section
        addLink.setAttribute('href' , `#${secid}`);
        addLink.setAttribute('class' , 'menu__link');
        addList.setAttribute('class' , 'list');
        addLink.innerHTML = `${secdatanav}`;
    };
};

// Add class 'active' to section when near top of viewport

window.addEventListener ('scroll',function sectionActivation (){ //the event listener to active the section or deactive it according to scrolling
    for (section of sections) { //looping around sections to active and de active it

        removeActive(section); //recall the function of removing the active class

        addActive(section); //recall the function of adding the active class
    };
});


function activeSection () {
    if(section1.classList.contains('your-active-class')) {
        navSections[0].style.cssText = 'background-color: #333;';
    };
    if(section2.classList.contains('your-active-class')) {
        navSections[1].style.cssText = 'background-color: #333;';
    };
    if(section3.classList.contains('your-active-class')) {
        navSections[2].style.cssText = 'background-color: #333;';
    };
    if(section4.classList.contains('your-active-class')) {
        navSections[3].style.cssText = 'background-color: #333;';
    };
    if(section5.classList.contains('your-active-class')) {
        navSections[4].style.cssText = 'background-color: #333;';
    };

 };

 function deActiveSection () {
    if(section1.classList.contains('your-active-class') == false) {
        navSections[0].style.cssText = 'background-color: #fff;';
    };
    if(section2.classList.contains('your-active-class') == false) {
        navSections[1].style.cssText = 'background-color: #fff;';
    };
    if(section3.classList.contains('your-active-class') == false) {
        navSections[2].style.cssText = 'background-color: #fff;';
    };
    if(section4.classList.contains('your-active-class') == false) {
        navSections[3].style.cssText = 'background-color: #fff;';
    };
    if(section5.classList.contains('your-active-class') == false) {
        navSections[4].style.cssText = 'background-color: #fff;';
    };

 };

// Scrolling to The Section Smoothly


function scrolling () {
    const link = document.querySelectorAll('.menu__link')[0];
    link.addEventListener ('click' , function (event) {
        event.preventDefault();
        section1.scrollIntoView({ behavior: "smooth" });
    });
};

function scrolling1 () {
    const link = document.querySelectorAll('.menu__link')[1];
    link.addEventListener ('click' , function (event) {
        event.preventDefault();
        section2.scrollIntoView({ behavior: "smooth" });
    });
};

function scrolling2 () {
    const link = document.querySelectorAll('.menu__link')[2];
    link.addEventListener ('click' , function (event) {
        event.preventDefault();
        section3.scrollIntoView({ behavior: "smooth" });
    });
};

function scrolling3 () {
    const link = document.querySelectorAll('.menu__link')[3];
    link.addEventListener ('click' , function (event) {
        event.preventDefault();
        section4.scrollIntoView({ behavior: "smooth" });
    });
};

function scrolling4 () {
    const link = document.querySelectorAll('.menu__link')[4];
    link.addEventListener ('click' , function (event) {
        event.preventDefault();
        section5.scrollIntoView({ behavior: "smooth" });
    });
};

// Calling Functions

buildNav();
scrolling();
scrolling1();
scrolling2();
scrolling3();
scrolling4();
