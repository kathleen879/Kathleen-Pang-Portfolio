const images = document.querySelectorAll('.Image-Track');

  let currentIndex = 0;

function rotateCarousel(){
    images[currentIndex].className = 'image';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].className = 'image-active';
}

setInterval(rotateCarousel, 3000)