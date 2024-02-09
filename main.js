const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

const botonesMostrar = document.querySelectorAll('.mostrarAntiguasVersiones');
const enlacesAntiguos = document.querySelectorAll('.enlacesAntiguos');

botonesMostrar.forEach((boton, index) => {
  boton.addEventListener('click', () => {
    enlacesAntiguos[index].classList.toggle('mostrar');
    if (enlacesAntiguos[index].classList.contains('mostrar')) {
      boton.textContent = 'Ocultar Antiguas Versiones';
    } else {
      boton.textContent = 'Antiguas Versiones';
    }
  });
});
