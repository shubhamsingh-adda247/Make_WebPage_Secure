// To disable right click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// To disable Developer Tools and View Page Source Option
document.onkeydown = function (event) {
  event = event || window.event;
  if (
    event.key == "F12" || //Disable Developer Tools (F12)
    event.ctrlKey || // Disable ctrl key
    (event.ctrlKey && event.shiftKey && event.code == 73) || //Disable ctrl+Shift+i
    (event.ctrlKey && event.shiftKey && event.code == 74) || //Disable ctrl+Shift+j
    (event.ctrlKey && event.code == 85) //Disable ctrl+u (View Page Source)
  ) {
    event.preventDefault();
  }
};
