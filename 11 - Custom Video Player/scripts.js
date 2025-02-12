const playButton = document.querySelector('.toggle');
const video = document.querySelector('video');
const volume = document.getElementsByName('volume')[0];
const speed = document.getElementsByName('playbackRate')[0];
const skipTimeBts = document.querySelectorAll("[data-skip]");
let playing = false


playButton.addEventListener("click", playVideo);
volume.addEventListener('input', changeVolume);
speed.addEventListener('input', changeSpeed);
skipTimeBts.forEach((skipButton) => skipButton.addEventListener('click',skipTime))


function skipTime () {
    video.currentTime += parseInt(this.dataset.skip);
}

function changeSpeed () {
    video.playbackRate = this.value;
}

function changeVolume () {
    video.volume = this.value;
}

function playVideo (){
    if(!playing){
        video.play();
        playing = true;
    } else{
        video.pause();
        playing = false;
    }
}
