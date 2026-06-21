const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})
function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();
// Toggle menu on mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Highlight active link when clicked
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    navLinks.classList.remove('show'); // close menu after click (mobile)
  });
});
