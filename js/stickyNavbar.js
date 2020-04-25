'use strict'

window.addEventListener('scroll',changeNavbar);

function changeNavbar() {
    let scrollPostionY = window.scrollY;
    let navbar = document.querySelector('.navbar');
    
    if(scrollPostionY>50){
        navbar.classList.add('bg-white')
        navbar.classList.add('navbar-light')
        navbar.classList.remove('bg-transparent')
        navbar.classList.remove('navbar-dark')
        document.querySelector('.features-dropdown-items').style.top ="50px"
    }
    else{
        navbar.classList.remove('bg-white')
        navbar.classList.remove('navbar-light')
        navbar.classList.add('bg-transparent')
        navbar.classList.add('navbar-dark')
        document.querySelector('.features-dropdown-items').style.top ="70px"
    }
}

