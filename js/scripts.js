$(document).ready(function(){
    $("#largeSelected").change(function(){
        var selectedPizza = $(this).children("option#largeSelected").val();
        alert("Cost " + selectedPizza);
    });
});

// $(document).ready(function() {
//   $(".largeSelected").select(function() {
//     $(".toppingsSelectorMedium").hide();
//     $(".toppingsSelectorSmall").hide();
// });
// });
