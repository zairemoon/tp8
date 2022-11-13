<?

/* recipe loader for TP8 */

$name = $_GET["recipeName"];
$list = $_GET["recipeList"];

if ($name == "Peach Crisps") {
  
  if ($list == "ingredients") {
    include "ingredients.html";
    
  } elseif ($list == "equipment") {
    include "equipment.html";
    
  } elseif ($list == "directions") {
    include "directions.html";
  
  } else {
    echo "1";
    
  }
  
} elseif ($name == "Twisty Cookies") {
  
   if ($list == "ingredients") {
    include "twistycookies-ingredients.html";
    
  } elseif ($list == "equipment") {
    include "twistycookies-equipment.html";
    
  } elseif ($list == "directions") {
    include "twistycookies-directions.html";
   
   } else {
    echo "1";
    
  }
  
} elseif ($name == "French Toast") {
     
   if ($list == "ingredients") {
    include "frenchtoast-ingredients.html";
    
  } elseif ($list == "equipment") {
    include "frenchtoast-equipment.html";
    
  } elseif ($list == "directions") {
    include "frenchtoast-directions.html";
  
   } else {
    echo "1";
    
  }
  
  
  
  } else {
    echo "0";
    
  }

?>