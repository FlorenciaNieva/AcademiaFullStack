document.getElementById("verificar").addEventListener("click", () => {
    let edad = parseInt(document.getElementById("edad").value);
    let resultado = document.getElementById("resultado");

    if (edad >= 18) {
        resultado.textContent = `Tienes ${edad}, eres mayor de edad`
    } else if (edad < 18) {
        resultado.textContent = `Tienes ${edad}, eres menor de edad`
    } else {
        resultado.textContent = `Ingresa un número.`
    }
})