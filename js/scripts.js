/***********************USER INTERFACE**********************/
/**************************************************************/
$(document).ready(function () {
  $("#one").click(function () {
    $("#hideMedium").hide(200);
    $("#hideSmall").hide(200);
    event.preventDefault();
  });

  $("#two").click(function () {
    $("#hideSmall").hide(200);
    $("#hideLarge").hide(200);
    event.preventDefault();
  });

  $("#three").click(function () {
    $("#hideLarge").hide(200);
    $("#hideMedium").hide(200);
    event.preventDefault();
  });
});
/***********************BUSINESS LOGIC**********************/
/***************CONSTRUCTORS**************************/

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
function myFunction() {
  confirm("click okay to confirm delivery @ Ksh 200!");
}

var priceSize = [800, 500, 400];
var priceTopping = [150, 100, 70];

/***********************input from crust Radio Buttons**********/
/**************************************************************/

$('#cripsy').click(function () {
  var value1 = document.getElementById('cripsy').value;
  alert(value1);
})
$('#gluttenFree').click(function () {
  var value2 = document.getElementById('gluttenFree').value;
  alert(value2);
})
$('#stuffed').click(function () {
  var value3 = document.getElementById('stuffed').value;
  alert(value3);
})
/***********************TOPPINGS CHECKBOXES***********************/
/*******************FOR LARGE***************************/
$('#four').click(function () {
  var value4 = document.getElementById('four').value;
  return value4;
})
$('#five').click(function () {
  var value5 = document.getElementById('five').value;
  alert(value5);
})
$('#six').click(function () {
  var value6 = document.getElementById('six').value;
  alert(value6);
})
/*******************FOR MEDIUM***************************/
$('#eight').click(function () {
  var value8 = document.getElementById('eight').value;
  alert(value8);
})
$('#nine').click(function () {
  var value9 = document.getElementById('nine').value;
  alert(value9);
})
$('#ten').click(function () {
  var value10 = document.getElementById('ten').value;
  alert(value10);
})
/*******************FOR SMALL***************************/
$('#twelve').click(function () {
  var value12 = document.getElementById('twelve').value;
  alert(value12);
})
$('#thirteen').click(function () {
  var value13 = document.getElementById('thirteen').value;
  alert(value13);
})
$('#fourteen').click(function () {
  var value14 = document.getElementById('fourteen').value;
  alert(value14);
})
/*******************CONDITIONAL LOOPS***********************/
/*******************FOR LARGE***************************/
