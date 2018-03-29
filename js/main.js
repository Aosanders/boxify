window.addEventListener("DOMContentLoaded", function(){
    const htmlLogo = document.querySelector(".section-html_video");

    window.onscroll = function() {slideElements()};


    function slideElements(){
        if(document.documentElement.scrollTop > 500 && !(htmlLogo.classList.contains("slideX"))){
            htmlLogo.classList.add("slideX");
        }
    }

});

