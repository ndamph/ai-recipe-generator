function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "One moment while we find a recipe for you",
    autoStart: true,
    delay: 20,
    cursor: null,
  });

  function showRecipe(response) {
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 20,
      cursor: null,
    });
  }
  let givenIngredients = ingredients.value;
  let apiKey = "73fd7aeeb1fc6do18b8423c70f3b718t";
  let prompt = `Please give me a recipe using these ingredients: ${givenIngredients}`;
  let context =
    "You are an expert recipe writer. Please present the recipe in HTML format with no precursor.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showRecipe);
}

let ingredientElement = document.querySelector("#ingredients-form");
ingredientElement.addEventListener("submit", generateRecipe);
