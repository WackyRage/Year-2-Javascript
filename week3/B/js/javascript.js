var randomWordArray = ['pragmatisch', 'confabuleren', 'megalomaan', 'erudiet', 'obstinaat', 'jakkepoes', 'xenofobie',
						'gastrosexueel','paraskevidekatriafobie','epibreren','intervenieren','tutoyeren', 'demagogisch',
						'delibereren', 'insubordinatie', 'ostalgie', 'ridicuul','dactyloscopie'];
var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
var usedArray = [];

var s;
var count = 0;
var message = "";
var answerArray = [];

function startUp() {
	for (var i = 0; i < randomWord.length; i++) {
		answerArray[i] = "_";
	}
	s = answerArray.join(" ");
	document.getElementById("answer").innerHTML = s;
	document.getElementById("hangman").innerHTML = "<img src='img/" + count + ".jpg'>";
}

function reset() {
	randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
	count = 0;
	s = "";
	usedArray = [];
	answerArray = [];

	document.getElementById("counter").innerHTML = "";
	document.getElementById("stat").innerHTML = "";
	document.getElementById("answer").innerHTML = "";

	startUp();
}

function Letter() {
	var letter = document.getElementById("letter").value;

	if(count < 7) {
		if (letter.length === 1) {
			if(usedArray.includes(letter) === true) {
				message = letter + " has already been used.";
			} else {
				usedArray.push(letter);
				for (var i = 0; i < randomWord.length; i++) {
					if(randomWord[i] == letter) {
						answerArray[i] = letter;
					}
				}

				if(answerArray.includes(letter) === false) {
					count++;
				}
			}

			if(message.length > 1) {
			 	document.getElementById("stat").innerHTML = message;
			  	message = '';
			}  else {			 	
				document.getElementById("stat").innerHTML = message;
			}

			if(count < 7) {
				document.getElementById("counter").innerHTML = "Total missed: " + count;
			} else {
				document.getElementById("counter").innerHTML = "You made 7 mistakes <br> GAME OVER!";
			}

			document.getElementById("hangman").innerHTML = "<img src='img/" + count + ".jpg'>";

		} else {
			document.getElementById("stat").innerHTML = "1 letter at a time.";
		}
	} 

	document.getElementById("answer").innerHTML = answerArray.join(" ");
}