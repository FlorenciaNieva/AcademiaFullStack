function changeText() {
    const text = document.getElementById("text");
    text.textContent = "Nuevo texto!"
}

function changeColor() {
    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = 'red';
        items[i].style.color = 'white';
    }
}