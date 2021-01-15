let iconLink = document.getElementById("side-menu-icon-id");
let myFunction = function(){
    let sideMenu = document.getElementById("side-menu");

    if( sideMenu.style.visibility=="hidden")
    {
        sideMenu.style.visibility="visible";
    }

    else{
        sideMenu.style.visibility="hidden";

    }
}
iconLink.addEventListener("click", myFunction);

