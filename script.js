console.log("hello");

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