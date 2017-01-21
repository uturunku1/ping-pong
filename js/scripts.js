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
    var i, count="", ping, array= [];

    for (i=1;i <= number;i++) {
      count += i + "<br>";
      array.push(i);
    }
    //function to say "ping" for every number divisible by 3
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

    pingpong();
    document.getElementById('output').innerHTML= array;

    //document.getElementById('output').innerHTML= count;


    //var res = str.replace(/i/3===0/g, "Ping");


  })
});
