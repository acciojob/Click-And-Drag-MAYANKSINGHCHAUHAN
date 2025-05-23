// Your code here.
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Multiply for faster scroll speed
  slider.scrollLeft = scrollLeft - walk;
  
  // Keep inside boundaries
  if (slider.scrollLeft < 0) {
    slider.scrollLeft = 0;
  }
  if (slider.scrollLeft > slider.scrollWidth - slider.clientWidth) {
    slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
  }
});