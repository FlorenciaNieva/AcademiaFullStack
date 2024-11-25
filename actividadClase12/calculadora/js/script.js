document.getElementById("calcular").addEventListener("click", () => {
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");

    if (num1 > num2) {
        resultado.textContent = `El número ${num1} es mayor que ${num2}`;
    } else if (num1 < num2) {
        resultado.textContent = `El número ${num1} es menor que ${num2}`;
    } else {
        resultado.textContent = `Ambos números son iguales`;
    }
})