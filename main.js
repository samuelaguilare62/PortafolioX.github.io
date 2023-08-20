const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

const mostrarEnlacesButton = document.getElementById('mostrar-enlaces');
const extraLinks = document.querySelectorAll('.extra-link');

mostrarEnlacesButton.addEventListener('click', () => {
  extraLinks.forEach(link => {
    link.style.display = link.style.display === 'none' ? 'block' : 'none';
  });
  
  if (extraLinks[0].style.display === 'none') {
    mostrarEnlacesButton.textContent = 'Ver Mas';
  } else {
    mostrarEnlacesButton.textContent = 'Ver Menos';
  }
});
