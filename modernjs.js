
const navSlide = () => {

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
//toggling the navigation
hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
//animation
navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        }
        else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }

         });
         //burger animation 
         hamburger.classList.toggle("toggle");
    });

    
}
    navSlide();