let iconLink = document.getElementById("side-menu-icon-id");

let navBar = document.getElementById("navbar");

let myFunction = function(event){
    let sideMenu = document.getElementById("navbar");

    if( sideMenu.style.visibility=="hidden")
    {
        sideMenu.style.visibility="visible";
    }

    else{
        sideMenu.style.visibility="hidden";

    }
}
iconLink.addEventListener("click", myFunction, false);

navBar.addEventListener("click", myFunction, false);

{
    if( navBar.style.visibility=="hidden")
    {
        navBar.style.visibility="visible";
    }

    else{
        navBar.style.visibility="hidden";

    }
}

