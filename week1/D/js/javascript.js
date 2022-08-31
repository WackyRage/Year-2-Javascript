var newItem = ["tijgerbrood", 
					"bruinbrood", 
					"jam", 
					"koffie",
					"suiker", 
					"gevulde koeken", 
					"milkshake", 
					"Melk", 
					"chocolade melk", 
					"kipnuggets"];


function changeItem() {
	var randomInt = Math.floor(Math.random() * 10);
	document.getElementById("7").innerHTML = newItem[randomInt];

}