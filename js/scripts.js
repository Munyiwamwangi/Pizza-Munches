//constructors for collecting user input
function pizzaSize(small, medium, large) {
  this.pizzaSmall = small;
  this.pizzaMedium = medium;
  this.pizzaLarge = large;
}

function crustType(cripsy, stuffed, gluttenFree) {
  this.pizzaCripsy = cripsy;
  this.pizzaStuffed = stuffed;
  this.pizzaGlutten_free = glutenFree;
}
/*************************Hide on click***************/
$(document).ready(function() {
  $("#one").click(function() {
    $("#hideMedium").hide(200);
    $("#hideSmall").hide(200);
      event.preventDefault();
  });

  $("#two").click(function() {
    $("#hideSmall").hide(200);
    $("#hideLarge").hide(200);
      event.preventDefault();
  });

  $("#three").click(function() {
    $("#hideLarge").hide(200);
    $("#hideMedium").hide(200);
      event.preventDefault();
  });
});

var priceSize = [800, 500, 400];
var priceCrust = [100, 100, 100];
var priceTopping = [70, 70, 70];

function myFunction() {
  confirm("click okay to deliver!");
}
