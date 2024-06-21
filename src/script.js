function generateRecipe(event) {
  event.preventDefault();

  let showRecipe = document.querySelector("#recipe");
  showRecipe.innerHTML = "This is the recipe";
}

let ingredientElement = document.querySelector("#ingredients-form");
ingredientElement.addEventListener("submit", generateRecipe);
