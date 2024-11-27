const button = document.getElementById("btn");
const contenedor = document.getElementById("contenedor");
const cohete = document.querySelector(".cohete");

button.addEventListener("click", () => {
    contenedor.innerHTML = "";

    let num = parseInt(document.getElementById("num").value);
    
    if (num === 0) {
        contenedor.innerHTML += "La cuenta regresiva no puede empezar desde cero" + "<br>";
        return;
    }
    while (num > 0) {
        contenedor.innerHTML += num + "<br>";
        num--;
    }
    if (num <= 0) {
        contenedor.innerHTML += "Cuenta regresiva terminada!";
        cohete.classList.add("animate");
    }
})
