//btn
const btn = document.querySelector('.btn');
//close

const closIcon = document.querySelector('.close-icon');
//trailer-container

const trailerContainer = document.querySelector('.trailer-container');

//Video

const video = document.querySelector('video');

btn.addEventListener('click', () => {
  trailerContainer.classList.remove('active');
});

closIcon.addEventListener('click', () => {
  trailerContainer.classList.add('active');
  video.pause();
  video.currentTime = 0;
});
