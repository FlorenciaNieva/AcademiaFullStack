document.getElementById("calcular").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;

  let resultado;
  if (operacion === "suma") {
    resultado = num1 + num2;
  } else if (operacion === "resta") {
    resultado = num1 - num2;
  } else if (operacion === "multiplicacion") {
    resultado = num1 * num2;
  } else if (operacion === "division") {
    resultado = num1 / num2;
  }

  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});
