const message = document.getElementById('counterMessage');
let counter = 0;

while (Math.random() < 0.9) { // Probabilidad de detenerse
  counter++;
}

message.textContent = `El contador se detuvo en: ${counter}`;