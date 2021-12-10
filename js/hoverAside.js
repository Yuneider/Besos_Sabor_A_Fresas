document.addEventListener('DOMContentLoaded', function () {
    
    const aside = document.getElementById("aside");
    aside.addEventListener('mouseenter',Enter);
    aside.addEventListener('mouseleave',Leave);
    
    var container = document.getElementById("container").style;

    const e = "6vw";
    const l = "3vw";


    function Enter() {
        container.marginLeft = e;
        aside.style.width = e;
        document.documentElement.style.setProperty('--margen',e);
    }

    function Leave() {
        container.marginLeft = l; 
        aside.style.width = l;
        document.documentElement.style.setProperty('--margen',l);
    }

});