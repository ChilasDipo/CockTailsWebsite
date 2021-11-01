function startFetch(){
    randomDrinkWithFetch()
    getListOfCategoryFetch()
  }

async function fetchDrink(url) {
    // do something
   //let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  let response = await fetch(url);
  
  let drink = await response.json(); // read response body and parse as JSON
  
  return drink.drinks[0]
}

  
async function randomDrinkWithFetch(){
    JsonOBJ = await fetchDrink('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    document.getElementById("nameOfDrink").innerHTML = "Navn: " 
    document.getElementById("instructions").innerHTML = "Instructions: "
    document.getElementById("ingredients").innerHTML = "Ingredients: "
   
   
    document.getElementById("nameOfDrink").innerHTML += JsonOBJ.strDrink;
    document.getElementById("instructions").innerHTML += JsonOBJ.strInstructions;
    document.getElementById("picture").src = JsonOBJ.strDrinkThumb;
    let ingidientList = [JsonOBJ.strIngredient1,JsonOBJ.strIngredient2,JsonOBJ.strIngredient3,JsonOBJ.strIngredient4,JsonOBJ.strIngredient5,JsonOBJ.strIngredient6,JsonOBJ.strIngredient7,JsonOBJ.strIngredient8,JsonOBJ.strIngredient9,JsonOBJ.strIngredient10,JsonOBJ.strIngredient11,JsonOBJ.strIngredient12,JsonOBJ.strIngredient13,JsonOBJ.strIngredient14,JsonOBJ.strIngredient15]
    let text = "";
    for (const x in ingidientList) {
        if (ingidientList[x]==null) {
            break
        }
       document.getElementById("ingredients").innerHTML +=   "<br>" + ingidientList[x];
     }
  }

  async function getListOfCategoryFetch(){
  //  let JsonOBJ = await fetchDrink('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');

    let JsonOBJ = await response.json()
    let CategoryList = []
    console.log(JsonOBJ)
    console.log("Længde er " + JsonOBJ.drinks.length)
    for (let index = 0; index < JsonOBJ.drinks.length; index++) {
      console.log(JsonOBJ)
       CategoryList.push(JsonOBJ.drinks[index].strCategory)
      console.log(CategoryList[index])
    }

       var select = document.getElementById("categoryList")
   for (let index = 0; index < CategoryList.length; index++){
       var option = document.createElement('option')
      option.textContent = CategoryList[index]
      option.value = CategoryList[index]
     select.appendChild(option)
     }
  }