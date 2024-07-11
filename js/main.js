
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

document.addEventListener('DOMContentLoaded', function() {
    var openPopupButtons = document.querySelectorAll('.open-popup');
    var popup = document.getElementById('popup');
    var closePopupButton = document.querySelector('.close-popup');
  
    openPopupButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        popup.style.display = 'block';
      });
    });
  
    closePopupButton.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
  });
  

//owlCarousel

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      nav: true,
      navText: ["<span class='owl-prev'>&#x276E;</span>", "<span class='owl-next'>&#x276F;</span>"],
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 3
          }
      }
  });
});

// animation

  new WOW().init();