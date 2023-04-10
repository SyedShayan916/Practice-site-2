window.addEventListener('scroll', function() {
    const header = document.querySelector('.down-header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        header.style.backgroundColor = '#26243c'; 
    } else {
       header.style.backgroundColor = 'white'; 
    }
});

const blogs = document.querySelector(".blog")



const nav = document.querySelector(".navigation")
const logo = document.querySelector(".logo");
window.onscroll = function(){
    const scroll = window.scrollY;
    if(scroll > 0){
        nav.classList.add("navigation-down")
        logo.classList.add("logo-down")
    }else{
        nav.classList.remove("navigation-down")
        logo.classList.remove("logo-down")
    }
}

                                // Number going up

let valueDisplays = document.querySelectorAll(".num");
let interval = 70;

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplays.textContent = startValue;
        if( startValue == endValue) {
            clearInterval(counter);
        }
    });
});



                                // toggle button
const header = document.querySelector(".down-header")
const downheader = document.querySelector(".down-header") 
var icon2 =document.getElementById("sun-1")
var icon = document.getElementById("moon-1");
let fasolid = document.querySelector(".fa-solid");
let sun = document.querySelector(".theme-button-sun");
let moon = document.querySelector(".theme-button-moon");     

icon.onclick = function(){
    document.body.classList.toggle("dark-mode")
    if(document.body.classList.contains("dark-mode")){
        header.style.backgroundColor = '#26243c'; 
        nav.classList.add("navigation-down")
        // downheader.classList.add("down-header-dark")
        // downheader.classList.remove("down-header")
        
        // nav.classList.add("navigation-dark")
        // nav.classList.remove("navigation")

        moon.style.display ="none"
        sun.style.display ="block"

    }else{
        header.style.backgroundColor = 'white'; 
        nav.classList.remove("navigation-down")
        // downheader.classList.remove("down-header-dark")
        // downheader.classList.add("down-header")

        // nav.classList.remove("navigation-dark")
        // nav.classList.add("navigation")
        
        sun.style.display ="none"
        moon.style.display ="block"

    }
}

icon2.onclick = function(){
    document.body.classList.toggle("dark-mode")
    if(document.body.classList.contains("dark-mode")){
        header.style.backgroundColor = '#26243c'; 
        nav.classList.add("navigation-down")
        // downheader.classList.add("down-header-dark")
        // downheader.classList.remove("down-header")

        // nav.classList.add("navigation-dark")
        // nav.classList.remove("navigation")

        moon.style.display ="none"
        sun.style.display ="block"

    }else{
        header.style.backgroundColor = 'white'; 
        nav.classList.remove("navigation-down")
        // downheader.classList.remove("down-header-dark")
        // downheader.classList.add("down-header")

        // nav.classList.remove("navigation-dark")
        // nav.classList.add("navigation")

        sun.style.display ="none"
        moon.style.display ="block"
        
    }
}


function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active")
}