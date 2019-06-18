/***********************USER INTERFACE**********************/
/**************************************************************/
// $(document).ready(function () {
//    $("#one").click(function () {
//       $("#hideMedium").hide(200);
//       $("#hideSmall").hide(200);
//        event.preventDefault();
//    });

//    $("#two").click(function () {
//       $("#hideSmall").hide(200);
//       $("#hideLarge").hide(200);
//        event.preventDefault();
//    });

//    $("#three").click(function () {
//       $("#hideLarge").hide(200);
//       $("#hideMedium").hide(200);
//        event.preventDefault();
//    });
// });

// /***********************input from crust Radio Buttons**********/
// /**************************************************************/
//
// $('#cripsy').click(function () {
//    var value1 = document.getElementById('cripsy').value;
//    alert(value1);
// })
// $('#gluttenFree').click(function () {
//    var value2 = document.getElementById('gluttenFree').value;
//    alert(value2);
// })
// $('#stuffed').click(function () {
//    var value3 = document.getElementById('stuffed').value;
//    alert(value3);
// })
// /***********************TOPPINGS CHECKBOXES***********************/
// /*******************FOR LARGE***************************/
// $('#four').click(function () {
//    var value4 = document.getElementById('four').value;
//    alert(value4);
// })
// $('#five').click(function () {
//    var value5 = document.getElementById('five').value;
//    alert(value5);
// })
// $('#six').click(function () {
//    var value6 = document.getElementById('six').value;
//    alert(value6);
// })
// /*******************FOR MEDIUM***************************/
// $('#eight').click(function () {
//    var value8 = document.getElementById('eight').value;
//    alert(value8);
// })
// $('#nine').click(function () {
//    var value9 = document.getElementById('nine').value;
//    alert(value9);
// })
// $('#ten').click(function () {
//    var value10 = document.getElementById('ten').value;
//    alert(value10);
// })
// /*******************FOR SMALL***************************/
// $('#twelve').click(function () {
//    var value12 = document.getElementById('twelve').value;
//    alert(value12);
// })
// $('#thirteen').click(function () {
//    var value13 = document.getElementById('thirteen').value;
//    alert(value13);
// })
// $('#fourteen').click(function () {
//    var value14 = document.getElementById('fourteen').value;
//    alert(value14);
// })
// /***********************BUSINESS LOGIC**********************/
// /***************CONSTRUCTORS**************************/
// var totalCost =[];
//
//
// function pizza(large, medium, small, price) {
//    this.pizzaSmall = small;
//    this.pizzaMedium = medium;
//    this.pizzaLarge = large;
//    this.price = 0; //initializing
// }
//
// function crustType(cripsy, stuffed, gluttenFree) {
//    this.cripsy = cripsy;
//    this.stuffed = stuffed;
//    this.glutten_free = glutenFree;
// }
// function topping(black_olives, glutenFree, stuffed){
//    this.black_olives = black_olives;
//    this.gluttenFree = glutenFree;
//    this.stuffed = stuffed;
// }
// var size =['large', 'medium', 'small'];
// var crust=['cripsy', 'glutenFree', 'stuffed'];
// var topping=['black-olives', 'pepperoni', 'sausage'];


/*******************CONDITIONAL LOOPS***********************/
/*******************FOR LARGE***************************/
// pizza.prototype.costOfPrice = function(){
//    if(this.size===size[0]){
//       this.price += 800;
//    }
//    else if (this.size === size[1]) {
//       this.price = 500;
//    }
//    else if (this.size === size[2]) {
//       this.price += 400;
//    }
//    if(this.crust === crust[0]){
//       this.price += 100;
//    }
//    else if (this.crust === crust[1]) {
//       this.price += 100;
//    }
//    else if (this.crust === crust[2]) {
//       this.price += 80;
//    }
//    if(this.topping === topping[0]) {
//       this.price += 150;
//    }
//    else if (this.topping = topping[1]) {
//       this.price += 100;
//    }
//    else if (this.sausage === topping[2]) {
//       this.price += 200;
//    }
//    return price;
// };
//
var number = parseFloat(document.getElementById('number').value);
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var twelve = document.getElementById("twelve");
var thirteen = document.getElementById("thirteen");
var fourteen = document.getElementById("fourteen");
var stuffed = document.getElementById("stuffed");
var cripsy = document.getElementById("cripsy");
var glutenFree = document.getElementById("glutenFree");
var price = 0;
/**********************************************************/
/**********************************************/
function myFunction() {
   var prompting=prompt("Enter Your Location: Constant delivery cost @ Ksh 200!");

   confirm('Thank you for shopping with us. Your pizza will be delivered at '+ prompting);
   if(prompting==true){
     alert('Thank you for shopping with us. Your pizza will be delivered at')
   }
};

$(document).ready(function(e) {

  $("#totalCost").click(function(e) {


    if ($("#three").is(":checked")) {
      console.log("true");

      price += 400;
      console.log(price);
    } else if ($("#three").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }

    if ($("#two").is(":checked")) {
      console.log("true");

      price += 500;
      console.log(price);
    } else if ($("#two").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }

    if ($("#one").is(":checked")) {
      console.log("true");

      price += 700;
      console.log(price);
    } else if ($("#one").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#cripsy").is(":checked")) {
      console.log("true");

      price += 150;
      console.log(price);
    } else if ($("#cripsy").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#gluttenFree").is(":checked")) {
      console.log("true");

      price += 150;
      console.log(price);
    } else if ($("#gluttenFree").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#stuffed").is(":checked")) {
      console.log("true");

      price += 200;
      console.log(price);
    } else if ($("#stuffed").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#four").is(":checked")) {
      console.log("true");

      price += 150;
      console.log(price);
    } else if ($("#four").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#five").is(":checked")) {
      console.log("true");

      price += 150;
      console.log(price);
    } else if ($("#five").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#six").is(":checked")) {
      console.log("true");

      price += 150;
      console.log(price);
    } else if ($("#six").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#eight").is(":checked")) {
      console.log("true");

      price += 200;
      console.log(price);
    } else if ($("#eight").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#nine").is(":checked")) {
      console.log("true");

      price += 300;
      console.log(price);
    } else if ($("#nine").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#ten").is(":checked")) {
      console.log("true");

      price += 250;
      console.log(price);
    } else if ($("#ten").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#twelve").is(":checked")) {
      console.log("true");

      price += 100;
      console.log(price);
    } else if ($("#twelve").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#thirteen").is(":checked")) {
      console.log("true");

      price += 150;
      console.log(price);
    } else if ($("#thirteen").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    if ($("#twelve").is(":checked")) {
      console.log("true");

      price += 100;
      console.log(price);
    } else if ($("#twelve").is(":not(:checked)")) {
      price += 0;
      console.log("false");
      console.log(price);
    }
    function grandTotal(){
      return  price+200;
    };
     var done = alert(
       "Your Cost of your pizza is Ksh " +price +" Do you want it delivered at an extra Ksh 200 ?"
     );

  });

});
