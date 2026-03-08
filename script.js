console.log("Portfolio Loaded");

/* NAVBAR ACTIVE SECTION */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

});

});


/* HAMBURGER MENU */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");
hamburger.classList.toggle("toggle");

});


/* CLOSE MENU WHEN LINK CLICKED (Mobile UX) */

navLinks.forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
hamburger.classList.remove("toggle");
});
});


/* SMOOTH SCROLL */

document.querySelectorAll('.nav-links a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

target.scrollIntoView({
behavior:"smooth"
});

});

});


/* SKILL CARD ANIMATION */

const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry, index) => {

if (entry.isIntersecting) {

setTimeout(() => {
entry.target.classList.add("show");
}, index * 100);

}

});

}, { threshold: 0.2 });

skillCards.forEach(card => {
observer.observe(card);
});


/* PROJECT CARD ANIMATION */

const projectCards = document.querySelectorAll(".project-card");

function showProjects(){

projectCards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.85;

if(cardTop < trigger){
card.classList.add("show");
}

});

}

window.addEventListener("scroll", showProjects);


/* CERTIFICATE ANIMATION */

const certCards = document.querySelectorAll(".cert-card");

function showCertificates(){

certCards.forEach(card=>{

const cardTop = card.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.85;

if(cardTop < trigger){
card.classList.add("show");
}

});

}

window.addEventListener("scroll", showCertificates);


/* EDUCATION ANIMATION */

const eduCards = document.querySelectorAll(".edu-card");

function showEducation(){

eduCards.forEach(card=>{

const cardTop = card.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.85;

if(cardTop < trigger){
card.style.opacity="1";
card.style.transform="translateY(0)";
}

});

}

window.addEventListener("scroll", showEducation);


/* RUN ANIMATIONS ON PAGE LOAD */

showProjects();
showCertificates();
showEducation();


/* SCROLL PROGRESS BAR */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

const scroll = window.scrollY;
const height = document.documentElement.scrollHeight - window.innerHeight;

const progress = (scroll / height) * 100;

if(progressBar){
progressBar.style.width = progress + "%";
}

});