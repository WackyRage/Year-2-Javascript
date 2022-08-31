var getal1;
var getal2;
var math1;
var math2;
var math3;
var sentence;

getal1 = Math.floor((Math.random() * 100) + 1);
getal2 = Math.floor((Math.random() * 100) + 1);

math1 = getal1 + getal2;
math2 = getal1 - getal2;
math3 = getal1 * getal2;

document.write(math1 + "<p>");
document.write(math2 + "<p>");
document.write(math3);