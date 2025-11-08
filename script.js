// Mostrar el año actual en el pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Desplazamiento suave al menú
document.querySelector('.cta').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});