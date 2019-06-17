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
// var largePizza = $("#one").val();
// alert()
$(document).ready(function() {
  $("#one").click(function() {
    $("#hideMedium").hide();
    $("#hideSmall").hide();
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
