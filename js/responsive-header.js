const barsButton = document.querySelector(".header-area__bars");
const headerMenu = document.querySelector(".header-area__menu");
const headerIcons = document.querySelector(".header-area__icons");

function headerMenuToggle() {
    headerMenu.classList.toggle("hidden");
    headerIcons.classList.toggle("hidden");
}

barsButton.addEventListener("click", headerMenuToggle);