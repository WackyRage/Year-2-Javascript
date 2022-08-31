function getFortune(){
	var fortuneArray = ['The fortune you seek is in another cookie.',
					'A closed mouth gathers no feet.',
					'A conclusion is simply the place where you got tired of thinking.',
					'A cynic is only a frustrated optimist.',
					'A foolish man listens to his heart. A wise man listens to cookies.',
					'You will die alone and poorly dressed.',
					'A fanatic is one who cant change his mind, and wont change the subject.',
					'If you look back, you’ll soon be going that way.',
					'You will live long enough to open many fortune cookies.',
					'An alien of some sort will be appearing to you shortly.',
					'Do not mistake temptation for opportunity.',
					'Flattery will go far tonight.',
					'He who laughs at himself never runs out of things to laugh at.',
					'He who laughs last is laughing at you.'];
	var fortune = fortuneArray[Math.floor(Math.random() * fortuneArray.length)];

	document.getElementById("answer").innerHTML = fortune;
}
