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
// $(document).ready(function(){
//     $("#largeSelected").change(function(){
//         var selectedPizza = $(this).children("option#largeSelected").val();
//         alert("Cost " + selectedPizza);
//     });
// });

// $(document).ready(function() {
//   $(".largeSelected").select(function() {
//     $(".toppingsSelectorMedium").hide();
//     $(".toppingsSelectorSmall").hide();
// });
// });
//prototypes for collecting input
$(document).ready(function() {
  $("select.pizzaSize").change(function() {
    var selectedPizza = $(this)
      .children("option:selected").val();
    alert("You have selected the pizza - " + selectedPizza);
  });
});
