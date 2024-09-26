let currentIndex = 0;
const slides = document.querySelectorAll(".item");
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Vai para o próximo slide, retorna ao início se ultrapassar o total.
  updateSlidePosition();
}

function updateSlidePosition() {
  const carrossel = document.querySelector(".carrossel");
  const offset = -currentIndex * 100; // Desloca o carrossel para a posição correta
  carrossel.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 2000); // Muda de slide a cada 3 segundos

// Inicializa o carrossel na primeira posição
updateSlidePosition();
