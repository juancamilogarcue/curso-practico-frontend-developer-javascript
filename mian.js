const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburgesaMenu = document.querySelector(".menu");
const mobilMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", aparecerMenu);
hamburgesaMenu.addEventListener("click", aparecerMenuHamburgesa);

function aparecerMenu () {
    console.log("click")
    desktopMenu.classList.toggle("inactive");
}

function aparecerMenuHamburgesa () {
    console.log("click")
    mobilMenu.classList.toggle("inactive");
}



