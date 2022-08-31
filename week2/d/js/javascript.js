var counter = 100;

function sayHello() {
	if(counter == 0){
		document.getElementById("partOne").innerHTML = 'No more bottles of beer on the wall, no more bottles of beer. ';
		counter = 100;
		document.getElementById("partOne").innerHTML = 'Go to the store and buy some more,' + counter + 'bottles of beer on the wall.';

	} else {
		document.getElementById("partOne").innerHTML = counter + ' bottles of beer on the wall, ' + counter + ' bottles of beer.';
		
  		counter--;
		
		if(counter == 0){
			document.getElementById("partTwo").innerHTML = 'Take one down and pass it around, no bottles of beer on the wall.';
		} else {
			document.getElementById("partTwo").innerHTML = 'Take one down and pass it around, ' + counter +  ' bottles of beer on the wall.';
		}
	}
}

setInterval(sayHello, 3000);