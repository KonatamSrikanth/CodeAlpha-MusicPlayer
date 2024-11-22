const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const cover = document.querySelector('.cover');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const coverImage = document.getElementById('cover-image');


const songs = [
  {
    title: "Baby love u",
    artist: "Justin Bieber",
    src: "songs/song1.mp3",
    cover: "images/cover image2.jpeg"
  },
  {
    title: "Snap",
    artist: "Rosa Lin",
    src: "songs/song2.mp3",
    cover: "images/coverimage1.png"
  },
  {
    title: "Love Me Like u do",
    artist: "Ellie Goulding",
    src: "songs/song3.mp3",
    cover: "images/image4.jpg"
  }
];

let songIndex = 0;


function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.src;
  coverImage.src = song.cover;
}

function playSong() {
  audio.play();
  playBtn.textContent = '⏸️';
  playBtn.classList.add('playing');
}


function pauseSong() {
  audio.pause();
  playBtn.textContent = '▶️';
  playBtn.classList.remove('playing');
}


playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});


prevBtn.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});


nextBtn.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});


audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
});


progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});


loadSong(songs[songIndex]);
