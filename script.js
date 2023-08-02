const hamMenu = document.getElementById("ham-menu")


hamMenu.addEventListener("click", () => {
    const navbar = document.getElementById("navbar")
    navbar.classList.toggle("nav-toggle")
})

const navLinks = document.getElementById("nav__links")

navLinks.addEventListener("click", () => {
    const navbar = document.getElementById("navbar")
    navbar.classList.toggle("nav-toggle")
})

