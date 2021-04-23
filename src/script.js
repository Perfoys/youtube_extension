export default function mainFunc() {
    let caption = document.getElementsByClassName("ytp-caption-segment");

    if (caption == document.querySelector(":hover")) {
        stopVideo();
        alert(caption.innerHTML);
    }
    
    function stopVideo() {
        const player = document.getElementsByClassName("video-stream html5-main-video");
        player.pause();
        player.currentTime = 0;
    }
}

