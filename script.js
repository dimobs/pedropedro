function PlayMusic() {
//   let play = document.getElementById("music");
console.log(document.querySelector(".fun_music"));
  let play = document.querySelector('.fun_music');

  play.play();
  play.volume = 0.2;
}

PlayMusic();