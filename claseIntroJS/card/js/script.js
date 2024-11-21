document.getElementById("crearTarjeta").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const descripcion = document.getElementById("descripcion").value;
  
    if (nombre && edad && descripcion) {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta";
      tarjeta.innerHTML = `
        <h3>${nombre}</h3>
        <p>Edad: ${edad}</p>
        <p>${descripcion}</p>
      `;
      document.getElementById("tarjetas").appendChild(tarjeta);
      document.getElementById("nombre").value = '';
      document.getElementById("edad").value = '';
      document.getElementById("descripcion").value = '';
      
      //Eliminar tarjeta
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.addEventListener("click", () => {
        tarjeta.remove();
      });
      tarjeta.appendChild(botonEliminar);

    } else {
      alert("Por favor, completa todos los campos.");
    }
  });

