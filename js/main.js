AOS.init(); 
let ubicacionPrincipal = window.pageYOffset;
let header = document.getElementsByClassName("header");

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;

    
    if(ubicacionPrincipal >= desplazamientoActual){
        this.document.getElementsByTagName("header")[0].style.top = "0px";
    }else{
        this.document.getElementsByTagName("header")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
})





const nav = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll('.item__link');

document.querySelector("#menu").addEventListener("click", function(){
    nav.classList.toggle('capa_menu');
});


navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        const nav = document.querySelector('.nav__list');
        nav.classList.remove('capa_menu');
    });
});