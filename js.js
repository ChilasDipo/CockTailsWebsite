
 function getDrink(url){
xhttp = new XMLHttpRequest();
xhttp.open("GET", url);
xhttp.onload = function() {
   // var drinks = this.responseText
   let JsonOBJ = JSON.parse(this.response).drinks[0]
 //   alert(JsonObjTest.drinks[0])
 // const obj = JSON.parse(this.responseText)
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
  xhttp.send(); 
}
function getListOfCategory(){
  xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");

  xhttp.onload = function() {
    let JsonOBJ = JSON.parse(this.response)
    let CategoryList = []
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
   
    //var CategoryList = [JsonOBJ.strCategory,JsonOBJ.strIngredient2,JsonOBJ.strIngredient3,JsonOBJ.strIngredient4,JsonOBJ.strIngredient5,JsonOBJ.strIngredient6,JsonOBJ.strIngredient7,JsonOBJ.strIngredient8,JsonOBJ.strIngredient9,JsonOBJ.strIngredient10,JsonOBJ.strIngredient11,JsonOBJ.strIngredient12,JsonOBJ.strIngredient13,JsonOBJ.strIngredient14,JsonOBJ.strIngredient15]
  
  }
   xhttp.send();
  //for(var i = 0; i < JsonOBJ.length; i++) {
   // let obj = JsonOBJ[i];
   // console.log(obj.id);
}

function selectCategory(){
  let selected = document.getElementById("categoryList").value
  let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + selected
  xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);

  xhttp.onload = function() {
    Json = JSON.parse(this.response).drinks
    let urlForDrink = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + Json[Math.floor(Math.random() * Json.length)].idDrink
    getDrink(urlForDrink)
  }
  xhttp.send()
}

function start(){
  getListOfCategory()
  getDrink("https://www.thecocktaildb.com/api/json/v1/1/random.php")

}


function populateCompanySelectionField(){
  xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php");
  xhttp.send(); 
 //for (let index = 0; index < listOfCompanyIndistry.length; index++){
  //   var option = document.createElement('option');
  //  option.textContent = listOfCompanyIndistry[index];
 //  select.appendChild(option);
  // }
 }