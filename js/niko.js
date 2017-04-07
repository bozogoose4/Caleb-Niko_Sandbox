$(document).ready(function(){
// IF it is a class then use: $(".name").whatever
// If it is a ID then use: $("#name").whatever
var ColorIsWhite = true;

$("#button_gerp").click(function(){

//  alert("Button Gerp was pressed");

  if (ColorIsWhite == true) {

    $("body").css("background-color","#ffff66");//Yellow
      ColorIsWhite = false;

  }else {

    $("body").css("background-color"," #e6e6e6");//White
      ColorIsWhite = true;

  }

})

});
