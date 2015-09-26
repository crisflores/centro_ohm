$(document).ready(function(){


$("#titulo1").click(function(event){
$("#subitem1").slideToggle(800);
});

$("#titulo2").click(function(event){
event.preventDefault();
$("#subitem2").slideToggle(800);
});

$("#titulo4").click(function(event){
event.preventDefault();
$("#subitem4").slideToggle(800);
});


});




