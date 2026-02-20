let currentIndex = 0;

const images = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  showImage();
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  showImage();
}

/* FILTER FUNCTION */
function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}