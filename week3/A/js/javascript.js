var fibonacci = [0];
var sentence;

while (fibonacci.length <= 20 ) {
  if(fibonacci.length === 1) {
    sentence = "The fibonacci begins with: " + fibonacci[fibonacci.length - 1];
    fibonacci.push(1);
  
  } else {
    if (fibonacci.length === 2) {
      sentence = "When the only number is: " + fibonacci[fibonacci.length - 2] + " the next will be " + fibonacci[fibonacci.length - 1];
      
    } else {
      sentence = "By adding " + fibonacci[fibonacci.length -2] + " to " + fibonacci[fibonacci.length -  3] + " you get: " + fibonacci[fibonacci.length -  1];
      
    }
    fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
  }
  document.getElementById("print").innerHTML += sentence + "<br>";
}

