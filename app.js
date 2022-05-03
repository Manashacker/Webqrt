var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")
menubtn.onclick = function(){
    if(sidenav.style.right == "-240px"){
        sidenav.style.right = "0";
        menu.src = "Barber_Shop_img/close.png"
    }
    else{
        sidenav.style.right = "-240px";
        menu.src = "Barber_Shop_img/menu.png"
    }
}