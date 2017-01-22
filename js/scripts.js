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
    var i, array= [], count="<ul>";
    for (i=0;i <= number;i++) {
      array.push(i);
    }

    array.forEach(function(item,index) {
      if (item%3===0 && item%5===0) {
        array[index]="Ping-pong";
      }else if (item%3===0) {
        array[index]="Ping";
      }else if (item%5===0) {
        array[index]= "Pong";
      }
      count+= "<li>"+ array[item]+ "</li>";

    })

    count+= "</ul>";
    document.getElementById('output').innerHTML= count;

  })
});
