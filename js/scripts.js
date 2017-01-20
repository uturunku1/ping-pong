$(document).ready(function() {
  // User interface Logic:
  $("form#input").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    if (!number) {
      alert("You must enter a valid number.");
      location.reload();
    }


    //Business logic:
    var i, index, countnumbers, count, pingpong, result= [];

    //countnumbers = function() {
       for (i=1;i <= number;i++) {
         result+=i +"<br>";
            if (result[i] === 3)
            return result[i] = "Ping";
       }
    document.getElementById('output').innerHTML += result;
    //var res = str.replace(/i/3===0/g, "Ping");
     //}
    //countnumbers();

  })
});
//a.forEach(function(item, i) { if (item == 3452) a[i] = 1010; });
