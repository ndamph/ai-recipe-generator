function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "This is the recipe",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

let ingredientElement = document.querySelector("#ingredients-form");
ingredientElement.addEventListener("submit", generateRecipe);
