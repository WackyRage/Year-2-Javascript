// document.getElementById("hello").innerHTML = "Hello World";
// val morseArray = []

const morse = {
	"0":"-----", "1":".----", "2":"..---", "3":"...--", "4":"....-", "5":".....",
	"6":"-....", "7":"--...", "8":"---..", "9":"----.",
	"a":".-", "b":"-...", "c":"-.-.", "d":"-..", "e":".", "f":"..-.", "g":"--.",
	"h":"....", "i":"..", "j":".---", "k":"-.-", "l":".-..", "m":"--", "n":"-.",
	"o":"---", "p":".--.", "q":"--.-", "r":".-.", "s":"...", "t":"-", "u":"..-",
	"v":"...-", "w":".--", "x":"-..-", "y":"-.--", "z":"--..", 
	" ":"/", "!":"-.-.--", ".":".-.-.-", ",":"--..--"
};

function codingFunctie() {
	var original = document.getElementById('original').value;
 	var originalArray = original.split("");
 	var converted = [];
 	
 	for (var i = 0; i <= originalArray.length - 1; i++) {
 		converted.push(morse[originalArray[i]]);
 	}
 	
	document.getElementById("originalText").innerHTML = original;
	document.getElementById("codedText").innerHTML = converted.join(" ");
}

