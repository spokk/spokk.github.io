var videoMute = document.querySelector(".audio-control"); //кнопка вкл/выкл звука
var video = document.querySelector("video"); //первое видео (интро) 

//отключение звука на телефонах
if (isTouchDevice = !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/)) {
    document.querySelector(".intro video source").setAttribute("src", "video/intro480.mp4");
    disableMute();
} else {
    enableMute();
}


videoMute.addEventListener("click", checkMute); //событие клика для кнопки вкл/выкл звука

function enableMute() { //включить звук
    video.muted = false;
    document.querySelector(".audio-control img").setAttribute("src", "img/audio-control-on.png");
}

function disableMute() { //отключить звук
    video.muted = true;
    document.querySelector(".audio-control img").setAttribute("src", "img/audio-control-off.png");
}

function checkMute() { //проверка текущего состояния звука
    if (video.muted == false) {
        disableMute();
    } else {
        enableMute();
    }
}
