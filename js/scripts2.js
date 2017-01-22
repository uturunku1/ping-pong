$(document).ready(function() {
  // User interface Logic:
  $("form#input").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    if (!number) {
      alert("You must enter a valid number.");
      location.reload();
    }
    format= function() {
      document.getElementById('output').innerHTML= array.toString().replace(/,/g, '<br>');
    }

    //Business logic:
    var i, array= [], pingpong, format;
    for (i=1;i <= number;i++) {
      array.push(i);
    }
    pingpong= function() {
      array.forEach(function(item,i) {
        if (item%3===0 && item%5===0) {
          array[i]="Ping-pong";
        }else if (item%3===0) {
          array[i]="Ping";
        }else if (item%5===0) {
          array[i]= "Pong";
        }
      })
    }
    format(pingpong());
  })
});
