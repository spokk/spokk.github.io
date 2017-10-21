var videoMute = document.querySelector(".audio-control");
var video = document.querySelector("video");
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
