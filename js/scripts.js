//constructors for collecting user input
function pizzaSize(small, medium, large){
  this.pizzaSmall=small;
  this.pizzaMedium=medium;
  this.pizzaLarge=large;
}

function crustType(cripsy,stuffed,gluttenFree){
  this.pizzaCripsy=cripsy;
  this.pizzaStuffed=stuffed;
  this.pizzaGlutten_free=glutenFree;
}
// Hide on click
$(document).ready(function() {
  $("#one").click(function() {
    $("#hideMedium").hide();
    $("#hideSmall").hide();
    alert(largePizza[2])
    });
  });

  $(document).ready(function() {
    $("#two").click(function() {
      $("#hideSmall").hide();
      $("#hideLarge").hide();
      });
    });

    $(document).ready(function() {
      $("#three").click(function() {
        $("#hideLarge").hide();
        $("#hideMedium").hide();
        });
      });

var priceSize=[800, 500, 400];
var priceCrust=[100, 100, 100];
var priceTopping=[70, 70 ,70];
