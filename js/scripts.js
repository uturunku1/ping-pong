//Business logic:
function countPingPong(inputNumber) {
  var arrayPingPong=[], count="<ul>";

  for (var i=1;i <=inputNumber;i++) {
    arrayPingPong.push(i);
  }
  arrayPingPong.forEach(function(item,index) {
    if (item%3===0 && item%5===0) {
      arrayPingPong[index]="Ping-pong";
    }else if (item%3===0) {
      arrayPingPong[index]="Ping";
    }else if (item%5===0) {
      arrayPingPong[index]= "Pong";
    }
    count+= "<li>"+ arrayPingPong[index]+ "</li>";
  })
  return count+= "</ul>";
};


// User interface Logic:
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    if (!inputNumber) {
      alert("You must enter a valid number.");
      location.reload();
    }
    var outputNumbers= countPingPong(inputNumber);
    document.getElementById('output').innerHTML= outputNumbers;
  })
});
