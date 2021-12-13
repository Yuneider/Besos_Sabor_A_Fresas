document.addEventListener('DOMContentLoaded', function () {
    
    const home = document.getElementById("home");
    const catalog = document.getElementById("catalog");
    const logo = document.getElementById("logo");
    const aboutUs = document.getElementById("aboutUs");
    const vw = document.documentElement.clientWidth/100; 
    const vh = document.documentElement.clientHeight/100;

    home.addEventListener("click",scrollToHome);
    catalog.addEventListener("click",scrollToCatalog);
    logo.addEventListener("click",scrollToLogo);
    aboutUs.addEventListener("click",toAboutUs);

    function scrollToHome(){
        window.scrollTo({
            top: vh*4,
            behavior: 'smooth'
        }); 
    }

    function scrollToCatalog(){
        window.scrollTo({
            top: vw*65+vh*2,
            behavior: 'smooth'
        }); 
    }

    function scrollToLogo(){
        window.scrollTo({
            top: vw*120+vh*4,
            behavior: 'smooth'
        }); 
    }

    function toAboutUs() {
        location.href = "html/aboutUs.html";
    }

});