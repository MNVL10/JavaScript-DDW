et color = 'red';
function changeColor(event) {
  if(color == 'red'){
    event.currentTarget.style.backgroundColor = 'red';
    color = 'blue';
  }else{
    event.currentTarget.style.backgroundColor = 'blue';
    color = 'red';
  }
}
    let elements = document.querySelectorAll('div');
    for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', changeColor);
    }
