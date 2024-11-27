const circle = document.querySelector('.circle');

// Cambiar el color cada 3 segundos
setInterval(() => {
  circle.style.backgroundColor = getRandomColor();
}, 3000);

// Hacer que la caja se mueva después de 5 segundos
setTimeout(() => {
  const container = document.querySelector('.container');
  container.style.animation = 'move 2s infinite linear';
}, 5000);

// Función para generar un color aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}