var video = document.querySelector('.video');
var play = document.querySelector('.play')
var pause = document.querySelector('.pause')
var btneraser = document.querySelector('.btneraser')

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader');
});

pause.addEventListener('click',()=>{
    video.pause();
    btneraser.style.left = '13vw'
});

play.addEventListener('click',()=>{
    video.play();
    btneraser.style.left = '5vw'
});