$(document).ready(function() {
  // User interface Logic:
  $("form#input").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    if (!number) {
      alert("You must enter a valid number.");
      location.reload();
    }else {
      alert("you enter: " + number);
     }
    $("#output").text(result);
  })
  //Business logic:
  var countnumbers, count, pingpong, result;
  //it does output result if i give result a value right here ex result=5, why is function not working?
  countnumbers= function(number) {
    for (var i = 1; i < number; i++) {
      result= i + 2;
    }
    alert(result);
  }



});
