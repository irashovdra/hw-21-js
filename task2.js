const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

// Знаходимо список ul#ingredients
const ul = document.getElementById("ingredients");

// Створюємо та додаємо li елементи до списку
ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ul.appendChild(li);
});
