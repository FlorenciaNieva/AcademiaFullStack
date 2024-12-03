document.addEventListener("DOMContentLoaded", () => {
    let productos = [];
  
    // Cargar JSON
    fetch("productos.json")
      .then(response => response.json())
      .then(data => {
        productos = data;
        mostrarProductos(productos);
      })
      .catch(error => console.error("Error al cargar el JSON:", error));
  
    // Mostrar productos en el DOM
    function mostrarProductos(lista) {
      const contenedor = document.getElementById("productos");
      contenedor.innerHTML = ""; // Limpiar contenido
      lista.forEach(producto => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>Categoría: ${producto.categoria}</p>
          <p>Precio: $${producto.precio.toFixed(2)}</p>
        `;
        contenedor.appendChild(card);
      });
    }
  
    // Filtros y Ordenamiento
    const categoriaSelect = document.getElementById("categoria");
    const ordenSelect = document.getElementById("orden");
  
    categoriaSelect.addEventListener("change", aplicarFiltros);
    ordenSelect.addEventListener("change", aplicarFiltros);
  
    function aplicarFiltros() {
      let productosFiltrados = [...productos];
  
      const categoria = categoriaSelect.value;
      if (categoria !== "todos") {
        productosFiltrados = productosFiltrados.filter(
          producto => producto.categoria === categoria
        );
      }
  
      const orden = ordenSelect.value;
      if (orden === "asc") {
        productosFiltrados.sort((a, b) => a.precio - b.precio);
      } else if (orden === "desc") {
        productosFiltrados.sort((a, b) => b.precio - a.precio);
      }
  
      mostrarProductos(productosFiltrados);
    }
  
    // Modo oscuro/claro
    const botonModoOscuro = document.getElementById("modo-oscuro");
    botonModoOscuro.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      botonModoOscuro.textContent = document.body.classList.contains("dark-mode")
        ? "Modo Claro"
        : "Modo Oscuro";
    });
  });