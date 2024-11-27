const numberList = document.getElementById('numberList');

for (let i = 1; i <= 10; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `Número: ${i}`;
  numberList.appendChild(listItem);
}