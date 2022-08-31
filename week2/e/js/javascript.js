function codingFunctie() {
	var original = document.getElementById('original').value;
 	var originalArray = original.split("");
 	var arrayLenght = originalArray.length - 1;

 	for (var i = 0; i < arrayLenght; i++) {
 		if(originalArray[i] == originalArray[arrayLenght]) {
			document.getElementById("palindrome").innerHTML = "Dit is een palindrome";
 		} else {
 			document.getElementById("palindrome").innerHTML = "Dit is geen palindrome";
 			break;
 		}
 		arrayLenght--;
 	}
}

