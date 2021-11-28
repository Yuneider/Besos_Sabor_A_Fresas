document.addEventListener('DOMContentLoaded', function () {
    
    const aside = document.getElementById("aside");
    aside.addEventListener('mouseenter',Enter);
    aside.addEventListener('mouseleave',Leave);
    
    var container = document.getElementById("container").style;

    const e = "5em";
    const l = "3em";


    function Enter() {
        container.marginLeft = e;
        aside.style.width = e;
        document.documentElement.style.setProperty('--margen','5em');
    }

    function Leave() {
        container.marginLeft = l; 
        aside.style.width = l;
        document.documentElement.style.setProperty('--margen','3em');
    }

});