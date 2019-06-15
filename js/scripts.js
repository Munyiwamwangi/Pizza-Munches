$(document).ready(function(){
  function getValueforlarge(){
    var initiateLarge=document.getElementsByClassName('largePizza');
    var space='';
    for(i=0; i<3; i++){
      if(largePizza[i].checked===true){
        space += largePizza[i].value+ ''
      }
    }
})
alert(space);
