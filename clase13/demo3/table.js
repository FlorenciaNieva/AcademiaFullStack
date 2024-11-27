const tableBody = document.querySelector('#numberTable tbody');
let number = 1;

while (number <= 10) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${number}</td>
    <td>${number * number}</td>
  `;
  tableBody.appendChild(row);
  number++;
}