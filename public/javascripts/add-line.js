var addBut = document.getElementsByTagName('button')[0];
var form = document.getElementsByClassName('addLine')[0];

addBut.onclick = () => {
  form.className = (form.className=='addLine') ? 'addLine addLine_visible' : 'addLine';
}
