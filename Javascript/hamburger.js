let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let body = document.querySelector(".body")
let model = document.querySelector(".model");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("stop-scrolling");
    model.classList.toggle("model-hidden");
})