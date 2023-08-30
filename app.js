const btn = document.querySelector(".btn");
const navMenu = document.querySelector(".nav-menu");


btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    navMenu.classList.toggle("active");
})
