let display = document.getElementById("calc-display");
let buttons = document.querySelectorAll(".numpad button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonText = button.textContent;

    if (buttonText === "C") {
      display.value = "";
    } else if (buttonText === "Del") {
      display.value = display.value.slice(0, -1);
    } else if (buttonText === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error"; 
      }
    } else {
      
      display.value += buttonText;
    }
  });
});
