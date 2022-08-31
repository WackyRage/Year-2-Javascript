var completeZin = "";

function zinFunctie() {
	var zinEen = document.getElementById('eerste').value;
	var zinTwee = document.getElementById('tweede').value;
	
	completeZin += zinEen + " " + zinTwee + "<p>";

	document.getElementById("zinCollectie").innerHTML = completeZin;
}

