window.onload = function () {
    var content = document.querySelector(".content");
    var preloader = document.querySelector(".preload");
    var bgCircle = document.querySelector(".background-wrap");
    if(localStorage.getItem('animation')!='done'){
    setTimeout(function () {
        content.style.display = "block";
        localStorage.setItem("animation", "done");
    }, 5500);
    }
    else{
        content.style.display = "block";
        preloader.style.display = "none";
        bgCircle.style.animation = "none";
        bgCircle.style.transform = "translate(-50%,-70%)";
    }
};
