const frases = [
  "Nada es para siempre en este mundo, todo viene y se va.",
  "Soñar no debe ser algo grandioso solo sé quien quieras ser.",
  "No esperes a que las oportunidades lleguen, ¡créalas!",
  "Tu único límite es tu mente.",
  "El 90% de tus preocupaciones son un fragmento de tu imaginación."
];

document.getElementById("generar").addEventListener("click", () => {
  const aleatoria = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").textContent = frases[aleatoria];
});
