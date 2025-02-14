const playButton = document.querySelector('.toggle');
const video = document.querySelector('video');
const volume = document.getElementsByName('volume')[0];
const speed = document.getElementsByName('playbackRate')[0];
const skipTimeBts = document.querySelectorAll('[data-skip]');
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');

let playing = false;
let mouseClick = false;

progress.addEventListener('mousedown',() => { mouseClick = true});
progress.addEventListener('mouseup',() => { mouseClick = false});
progress.addEventListener('click',progressByClick);
progress.addEventListener('mousemove',progressByClick);

video.addEventListener('click', playVideo);
playButton.addEventListener('click', playVideo);
volume.addEventListener('input', changeVolume);
speed.addEventListener('input', changeSpeed);
video.addEventListener('timeupdate', progressChange);
skipTimeBts.forEach((skipButton) => skipButton.addEventListener('click',skipTime));

function progressByClick (event) {
    if (mouseClick || event.type == 'click') {
        let time = (event.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = time;
    }
}

function progressChange () {
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
}

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
        playButton.textContent = '❚ ❚';
        playing = true;
    } else{
        video.pause();
        playButton.textContent = '►';
        playing = false;
    }
}
