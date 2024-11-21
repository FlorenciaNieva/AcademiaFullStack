const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarTarea");
const lista = document.getElementById("listaTareas");

boton.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = input.value;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.marginLeft = "10px";
    botonEliminar.addEventListener("click", () => {
      lista.removeChild(nuevaTarea);
    });

    nuevaTarea.appendChild(botonEliminar);
    lista.appendChild(nuevaTarea);
    input.value = "";
  } else {
    alert("Por favor, escribe una tarea.");
  }
});
