document.addEventListener('DOMContentLoaded', function () {
    
    const aside = document.getElementById("aside");
    aside.addEventListener('mouseenter',Enter);
    aside.addEventListener('mouseleave',Leave);
    
    const container = document.getElementById("container").style;
    const home = document.getElementById("home").style;
    const catalog = document.getElementById("catalog").style;
    const logo = document.getElementById("logo").style;
    const aboutUs = document.getElementById("aboutUs").style;
    const menuContainer = document.getElementById("menuContainer").style;

    const e = "6vw";
    const l = "3vw";


    function Enter() {
        container.marginLeft = e;
        aside.style.width = e;
        home.width = e;
        catalog.width = e;
        logo.width = e;
        aboutUs.width = e;
        menuContainer.top = "28vh";
        document.documentElement.style.setProperty('--margen',e);
    }

    function Leave() {
        container.marginLeft = l; 
        aside.style.width = l;
        home.width = l;
        catalog.width = l;
        logo.width = l;
        aboutUs.width = l;
        menuContainer.top = "40vh";
        document.documentElement.style.setProperty('--margen',l);
    }

});