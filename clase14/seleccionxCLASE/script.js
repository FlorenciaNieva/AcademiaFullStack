function changeColors() {
    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = '#6f42c1';
      items[i].style.color = 'white';
    }
  }