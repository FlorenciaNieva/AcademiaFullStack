// Seleccionar el contenedor de círculos
const circlesContainer = document.getElementById('circles-container');

// Función para generar círculos de manera dinámica con un bucle
function generateCircles(numCircles) {
  // Usamos un bucle 'for' para crear círculos
  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circlesContainer.appendChild(circle);
    
    // Cambiar el color de cada círculo cada 2 segundos
    setInterval(() => {
      circle.style.backgroundColor = getRandomColor();
    }, 2000);
  }
}

// Función para generar un color aleatorio
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Llamar a la función para generar 5 círculos
generateCircles(5);

// Alternar la visibilidad del texto al hacer clic en el botón
const toggleButton = document.getElementById('toggleButton');
const toggleText = document.getElementById('toggleText');

// Usamos un bucle 'while' para ocultar el texto después de 10 segundos
setTimeout(() => {
  let count = 0;
  while (count < 5) {
    count++;
    console.log(`Ocultando texto en ${count} segundos...`);
  }
  toggleText.style.display = 'none'; // Ocultar texto al pasar 10 segundos
}, 10000);

// Hacer que al presionar el botón se muestre/oculte el texto
toggleButton.addEventListener('click', () => {
  if (toggleText.style.display === 'none') {
    toggleText.style.display = 'block'; // Mostrar texto
  } else {
    toggleText.style.display = 'none'; // Ocultar texto
  }
});