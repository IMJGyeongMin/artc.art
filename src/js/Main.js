var keydownCtrl = 0;
var keydownShift = 0;

document.onkeydown = keycheck;
document.onkeyup = uncheckCtrlShift;

function keycheck() {
  switch (event.keyCode) {
    case 123:
      event.keyCode = "";
      return false;
      break; //F12
    case 17:
      event.keycode = "";
      keydownCtrl = 1;
      return false;
      break; //Ctrl

      alert(
        "Right-click, drag, and developer tools are prohibited to protect the work."
      );
  }

  if (keydownCtrl) return false;
  alert(
    "Right-click, drag, and developer tools are prohibited to protect the work."
  );
}

function uncheckCtrlShift() {
  if (event.keyCode == 17) keydownCtrl = 0;
  if (event.KeyCode == 16) keydownShift = 0;
  alert(
    "Right-click, drag, and developer tools are prohibited to protect the work."
  );
}

function click() {
  if (event.button == 2 || event.button == 2) {
    alert(
      "Right-click, drag, and developer tools are prohibited to protect the work."
    );
  }
}

document.onmousedown == click;

$(document).bind("contextmenu", function (e) {
  alert(
    "Right-click, drag, and developer tools are prohibited to protect the work."
  );
  return false;
});

const toggleBtn = document.querySelector("#nav-icon4");
const menu = document.querySelector("#mobile-menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
