const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

console.log("hello");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
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


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links"); // renamed to navMenu

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

const skillCards = document.querySelectorAll("#skills figure");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

skillCards.forEach(card=>{
  observer.observe(card);
});