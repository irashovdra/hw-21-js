const valueRef = document.getElementById("value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  updateValue();
};

const decrement = () => {
  counterValue -= 1;
  updateValue();
};

const updateValue = () => {
  valueRef.textContent = counterValue;
};
