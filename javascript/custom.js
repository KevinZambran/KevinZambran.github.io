const navToggle = document.querySelector(".check");
const navMenu = document.querySelector(".menu-ul");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navMenu.classList.toggle("navmenu");
});