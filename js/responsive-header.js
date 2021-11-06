const barsButton = document.querySelector(".header-area__bars");
const headerMenu = document.querySelector(".header-area__menu");
const headerIcons = document.querySelector(".header-area__icons");
const headerArea = document.querySelector(".header-area");

function headerMenuToggle() {
    headerMenu.classList.toggle("hidden");
    headerIcons.classList.toggle("hidden");
    headerArea.classList.toggle("mini");
}

barsButton.addEventListener("click", headerMenuToggle);