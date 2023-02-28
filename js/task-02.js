const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
  const ingredientsList = document.querySelector('#ingredients');
  const item = document.createElement("li");
  ingredientsList.appendChild(item);
  item.classList.add("item");
  item.innerText = element;
});