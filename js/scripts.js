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


    //Business logic:
    var i, countnumbers, count, pingpong;
    var result= "";
    // countnumbers = function() {
       for (i=1;i <= number;i++) {
          result += i + "<br>";
       }
    document.getElementById('output').innerHTML += result;

     //}
    // countnumbers();

  })
});
