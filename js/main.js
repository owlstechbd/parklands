

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById('background-video');
  const sources = video.getElementsByTagName('source');

  for (let i = 0; i < sources.length; i++) {
      sources[i].src = sources[i].getAttribute('data-src');
  }

  video.muted = true; // Ensure the video is muted for autoplay
  video.play().catch(error => {
      console.log("Autoplay error:", error);
      // Handle autoplay error if needed
  });
});

// animation

  new WOW().init();