var videoMute = document.querySelectorAll(".audio-control"); //кнопка вкл/выкл звука
/*var videoIntro = document.querySelector(".video-intro"); //первое видео (интро) 
var videoEnd = document.querySelector(".video-end"); // второе видео (конец)*/
var playBtn = document.querySelectorAll(".play-button");

for (var i = 0, j = 0; i < videoMute.length, j < playBtn.length; i++, j++) {
    videoMute[i].addEventListener("click", checkMute); //событие клика для кнопки вкл/выкл звука
    playBtn[j].addEventListener("click", checkVideo); //событие клика для кнопки вкл/выкл видео
}

function enableMute(video,img) { //включить звук
    video.muted = false;
    document.querySelector(img).setAttribute("src", "img/audio-control-on.png");
}

function disableMute(video,img) { //отключить звук
    video.muted = true;
    document.querySelector(img).setAttribute("src", "img/audio-control-off.png");
}

function checkMute() { //проверка текущего состояния звука
    var video = document.querySelector("." + this.getAttribute("data-video"));
    var img = ".audio-control-" + video.getAttribute("data-video");
    if (video.muted == false) {
        disableMute(video,img);
    } else {
        enableMute(video,img);
    }
}

function playVideo(video, img) { //включить видео
    video.style.maxHeight="720px";
    document.querySelector(".video-controls").classList.remove("intro-controls");
    video.play();
    document.querySelector(img).setAttribute("src", "img/stop.png");
}

function stopVideo(video, img) { //остановить видео
    video.style.maxHeight="450px";
    document.querySelector(".video-controls").classList.add("intro-controls");
    video.pause();
    document.querySelector(img).setAttribute("src", "img/play.png");
}

function checkVideo() { //проверка текущего состояния звука
    var video = document.querySelector("." + this.getAttribute("data-video"));
    var img = ".play-button-" + video.getAttribute("data-video") + " img";
    if (video.paused == true) {
        playVideo(video, img);
    } else {
        stopVideo(video, img);
    }
}
