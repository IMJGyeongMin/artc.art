document.oncontextmenu = function (e){
  alert('Do not right-click the mouse to protect works.');
  return false;
}

document.ondragstart = function (e){
  alert('Drag is prohibited to protect works.');
  return false;
}

document.onkeydown = function(e) {
  if(e.keyCode === 123) {
    e.preventDefault();
    e.returnValue = false;

    alert('Developer mode is prohibited to protect works.')
  }
}