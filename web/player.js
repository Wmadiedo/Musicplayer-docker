function playPause() {
    const audio = document.getElementById('audio');
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  