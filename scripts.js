// JavaScript for TP8

// function to load a file from the URL "fromFile" into the object identified by "whereTo'
function loadFileInto(recipeName, listName, whereTo) {

  // 1. creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();
  
  
  // 2. define the fromFile varible with the passed recipe name and list 
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;
  console.log("From URL: " + fromFile);

  // 3. defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // 4. provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // 5. initiate request and wait for response
  ajax.send();

}



// new Recipe object
function Recipe(recipeName, contributorName, imageURL) {
  
  this.recipeName = recipeName; 
  this.contributor = contributorName;
  this.imageURL = imageURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    
    loadFileInto(this.recipeName, "ingredients", "#ingredients ul");
    loadFileInto(this.recipeName, "equipment", "#equipment ul");
    loadFileInto(this.recipeName, "directions", "#directions ol");
  
  
  }
  

}

PeachCrisps = new Recipe(
  "Peach Crisps", 
  "Zaire", 
  "https://images.unsplash.com/photo-1639588473831-dd9d014646ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", 
  "ingredients.html", 
  "equipment.html", 
  "directions.html"
);

TwistyCookies = new Recipe(
  "Twisty Cookies", 
  "Mark Filip", 
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80", 
  "twistycookies-ingredients.html", 
  "twistycookies-equipment.html", 
  "twistycookies-directions.html"
);

FrenchToast = new Recipe(
  "French Toast", 
  "Andrew Witsoe", 
  "https://andrewwitsoe.reclaim.hosting/tp4/frenchtoast.jpg", 
  "frenchtoast-ingredients.html", 
  "frenchtoast-equipment.html", 
  "frenchtoast-directions.html"
);


window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function() {
    PeachCrisps.displayRecipe();
  }
  
  document.querySelector("#secondRecipe").onclick = function() {
    TwistyCookies.displayRecipe();
    
  document.querySelector("#thirdRecipe").onclick = function() {
    FrenchToast.displayRecipe();
  }
   
  }
  
  
  


} // end window.onload