var addBut = document.getElementsByTagName('button')[0];

addBut.onclick = () => {
  var form = document.getElementsByClassName('addLine')[0];

  form.className = (form.className=='addLine') ? 'addLine addLine_visible' : 'addLine';
}
