function validateForm() {
  let x = document.forms["myForm"]["UsrName"].value;
  if (x.trim() == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validateNumberForm() {
  let number = document.forms["myForm"]["UsrNumber"].value;
  if (number.trim() == "") {
    alert("A number is required");
    return false;
  }
}

function validateDateForm() {
  let txtsearchdetails = document.forms["myForm"]["usrsearch"].value;
  if (txtsearchdetails.trim() == "") {
    alert("Some search data is required");
    return false;
  }
}

function validateDrinksForm() {
  let withmilk = "";
  let withsugar = "";
  
  let drink = document.forms["myForm"]["RadioDrink"].value;
  if (drink == "") {
    alert("A drink must be chosen");
    return false;
  }
  let milk = document.forms["myForm"]["CheckMilk"].checked;
  if (milk == false) {
    withmilk = "no ";
  }
  let sugar = document.forms["myForm"]["CheckSugar"].checked;
  if (sugar == false) {
    withsugar = "no ";
  }
  if (drink == "Soup" && (milk == true|| sugar == true)){
      alert("You can't add milk or sugar to soup!");
      return false;
  }
  if (drink == "Soup"){
      alert("A drink of " + drink + " has been selected");
      return true;
  }
  alert("A drink of " + drink + " with " + withmilk + "milk and with " + withsugar + " sugar has been selected");
}

