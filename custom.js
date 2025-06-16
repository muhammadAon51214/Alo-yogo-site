const searchArea = document.querySelector('.search-container-wrapper');
const searchIcon = document.querySelector('.search___icon___menu');
const closeIcon = document.querySelector('.close____icon');

searchIcon.addEventListener("click", () => {
    searchArea.classList.toggle('active');
});

closeIcon.addEventListener("click", () => {
    searchArea.classList.remove('active');
});


const mobileMenu = document.querySelector('.mobile_menu');
const mobileMenuIcon = document.querySelector('.search-icon-menu');
const closeMobileMenu = document.querySelector('.close-button');

mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle('active');
});

closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove('active');
});
