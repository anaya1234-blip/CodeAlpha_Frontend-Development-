function openLightbox(src) {
  console.log("Lightbox Opened with:", src);
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  console.log("Lightbox Closed");
  document.getElementById('lightbox').style.display = 'none';
}
