let navbarButton = document.querySelector('.navbar-toggler');
let navbar = document.querySelector('.navbar');
let navbarItemsContainer = document.querySelector('#navbarNav');
let state = true;
navbarButton.addEventListener('click',showMenu);
function showMenu() {
    if(state){
        console.log("mostrando menu")
        state = false;
        navbar.classList.add('bg-white')
        navbar.classList.add('navbar-light')
        navbar.classList.remove('bg-transparent')
        navbar.classList.remove('navbar-dark')
        navbarItemsContainer.classList.remove("collapse")
    }
    else{
        console.log("ocultando menu")
        navbarItemsContainer.classList.add("collapse")
        state = true;
        
    }
}