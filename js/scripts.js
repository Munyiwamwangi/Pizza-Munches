/**********constructors for collecting user input*****/
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

function myFunction() {
  confirm("click okay to confirm delivery @ Ksh 200!");
}

/***********************input from crust Radio Buttons**********/
/**************************************************************/

var priceSize = [800, 500, 400];
var priceTopping = [150, 100, 70];

/***********************input from crust Radio Buttons**********/
/**************************************************************/

$('#cripsy').click(function(){
  var value1=document.getElementById('cripsy').value;
  alert(value1);
})
$('#gluttenFree').click(function(){
  var value2=document.getElementById('gluttenFree').value;
  alert(value2);
})
$('#stuffed').click(function(){
  var value3=document.getElementById('stuffed').value;
  alert(value3);
})
