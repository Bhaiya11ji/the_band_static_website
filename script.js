let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", function() {
    let menuList = this.nextElementSibling;
    if (menuList.style.maxHeight == 0) {
        menuList.style.maxHeight += menuList.scrollHeight + "px";
        this.classList.toggle("activeBtn");
    }
    else {
        menuList.style.maxHeight = null;
    }
})

var index = 0;
function showSlides() {
    let slide = document.getElementsByClassName("imgCont");
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"        
    }
    index++;
    if (index > slide.length) {
        index = 1;
    }
    slide[index - 1].style.display = "block";
    setTimeout(showSlides, 3500);
}

showSlides();