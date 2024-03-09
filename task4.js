let counterValue = 0;
const valueSpan = document.getElementById("value");

function increment() {
  counterValue++;
  valueSpan.textContent = counterValue;
}

function decrement() {
  counterValue--;
  valueSpan.textContent = counterValue;
}

document.querySelectorAll('[data-action="increment"]').forEach((button) => {
  button.addEventListener("click", increment);
});

document.querySelectorAll('[data-action="decrement"]').forEach((button) => {
  button.addEventListener("click", decrement);
});
