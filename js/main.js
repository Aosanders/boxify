window.addEventListener("DOMContentLoaded", function(){
    const htmlLogo = document.querySelector(".section-html img");

    window.onscroll = function() {slideElements()};


function slideElements(){
    console.log("hello");
    if(document.documentElement.scrollTop > 250){
        htmlLogo.classList.add("slideX");
    }
}

});

