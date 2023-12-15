script.js

let playBtn = document.getElementsByClassName("play");
let pauseBtn = document.getElementsByClassName("pause");

let text = document.querySelector("p");

const audio = new Audio("./clickb6-101soundboards.mp3");

playBtn[0].addEventListener("click", (e) => {
  audio.play();
  text.innerHTML = "Audio Playing🔊";
});

pauseBtn[0].addEventListener("click", (e) => {
  audio.pause();
  text.innerHTML = "Audio Paused";
});