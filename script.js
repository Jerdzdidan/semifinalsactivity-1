function playPause(audioId, buttonId, iconId) {
    var audio = document.getElementById(audioId);
    var button = document.getElementById(buttonId);
    var icon = document.getElementById(iconId);
    
    if (audio.paused) {
      audio.play();
      icon.classList.remove("fa-volume-xmark");
      icon.classList.add("fa-volume-high");
    } else {
      audio.pause();
      icon.classList.remove("fa-volume-high");
      icon.classList.add("fa-volume-xmark");
    }
  }