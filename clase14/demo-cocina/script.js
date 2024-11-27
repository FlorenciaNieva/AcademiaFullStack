// Variables para el carrito
let cartCount = 0;
let cartTotal = 0;
const cartElement = document.getElementById('cartCount');

// Función para actualizar el carrito
function updateCart() {
  cartElement.textContent = cartCount;
}

// Función para agregar productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    const price = parseFloat(button.dataset.price);

    // Incrementar el contador del carrito
    cartCount++;
    cartTotal += price;

    alert(`Producto agregado: ${product}. Precio: $${price}.`);

    // Actualizar la visualización del carrito
    updateCart();

    // Establecer un descuento en el carrito después de 10 segundos
    setTimeout(() => {
      alert('¡Felicidades! Tienes un 10% de descuento en tu carrito.');
      cartTotal *= 0.9;
      console.log(`Total con descuento: $${cartTotal.toFixed(2)}`);
    }, 10000);
  });
});

// Configuración del carrusel de productos
let currentIndex = 0;
const images = document.querySelectorAll('#carousel .carousel-container img');

setInterval(() => {
  images.forEach((img, index) => {
    img.style.transform = `translateX(-${(currentIndex * 320)}px)`;
  });
  currentIndex = (currentIndex + 1) % images.length;
}, 3000);

// Mostrar y ocultar el banner de descuento
const discountBanner = document.getElementById('discount-banner');
setTimeout(() => {
  discountBanner.style.display = 'none'; // Ocultar después de 15 segundos
}, 15000);