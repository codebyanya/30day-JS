'use strict';

window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.which}"]`);
  const key = document.querySelector(`div[data-key="${e.which}"]`);

  if (!audio) return;

  key.classList.add('playing');

  audio.currentTime = 0;
  audio.play();
}


window.addEventListener('keyup', removeTransition);


function removeTransition(e) {
  const key = document.querySelector(`.key[data-key="${e.which}"]`);
  if(!key) return;
  key.classList.remove('playing');
}
