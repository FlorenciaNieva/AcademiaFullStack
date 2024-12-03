
const toggleMode = document.getElementById("mode-toggle");

toggleMode.addEventListener("click", () => {
    toggleMode.textContent = toggleMode.textContent === "Modo Oscuro" ? "Modo Claro" : "Modo Oscuro";
    document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("form-comunication");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("btnEnviar");
const errorNombre = document.getElementById("errorNombre");
const errorApellido = document.getElementById("errorApellido");
const errorEmail = document.getElementById("errorEmail");
const errorMensaje = document.getElementById("errorMensaje");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let esValido = true;

    if (nombre.value === "") {
        errorNombre.textContent = "Ingrese su nombre.";
        errorNombre.style.display = "block";
        esValido = false;
    } else {
        errorNombre.style.display = "none";
    }

    if (apellido.value === "") {
        errorApellido.textContent = "Ingrese su apellido.";
        errorApellido.style.display = "block";
        esValido = false;
    } else {
        errorApellido.style.display = "none";
    }

    if (email.value === "") {
        errorEmail.textContent = "Ingrese su email.";
        errorEmail.style.display = "block";
        esValido = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errorEmail.textContent = "Ingrese un email válido.";
        errorEmail.style.display = "block";
        esValido = false;
    } else {
        errorEmail.style.display = "none";
    }

    if (mensaje.value === "") {
        errorMensaje.textContent = "Ingrese un mensaje.";
        errorMensaje.style.display = "block";
        esValido = false;
    } else {
        errorMensaje.style.display = "none";
    }

    if (esValido) {
        alert("Formulario enviado correctamente.");
        loginForm.reset();
    }
})
