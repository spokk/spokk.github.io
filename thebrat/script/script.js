var videoMute = document.querySelector(".audio-control");
var video = document.querySelector("video");
if (isTouchDevice = !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/)) {
    document.querySelector("video source").setAttribute("src", "video/intro480.mp4");
}
videoMute.addEventListener("click", checkMute);

function enableMute() {
    video.muted = false;
    document.querySelector(".audio-control img").setAttribute("src", "img/audio-control-on.png");
}

function disableMute() {
    video.muted = true;
    document.querySelector(".audio-control img").setAttribute("src", "img/audio-control-off.png");
}

function checkMute() {
    if (video.muted == false) {
        disableMute();
    } else {
        enableMute();
    }
}
