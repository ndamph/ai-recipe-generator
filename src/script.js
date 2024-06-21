function generateRecipe(event) {
  event.preventDefault();

  let apiKey = "73fd7aeeb1fc6do18b8423c70f3b718t";
  let prompt = "Please give me a recipe using these ingredients";
  let context =
    "Please use the following ingredients in the recipe: ${ingredients}";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  new Typewriter("#recipe", {
    strings: "This is the recipe",
    autoStart: true,
    delay: 50,
    cursor: null,
  });
}

let ingredientElement = document.querySelector("#ingredients-form");
ingredientElement.addEventListener("submit", generateRecipe);
