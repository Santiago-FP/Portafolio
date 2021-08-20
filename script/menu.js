
function function1(){
    alert("hola");
    // menuButton.style.color = "yellow"
}
function showNav(){
    nav.classList.toggle("showNav");    
}

const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");

menuButton.onclick  = showNav;
