var slide = 1;

function showDiv(n) {
  	var i;
  	var x = document.getElementsByClassName("slide");

  	if (n > x.length) {
  		slide = 1;
  	}    
  	
  	if (n < 1) {
  		slide = x.length;
  	}
  
  	for (i = 0; i < x.length; i++) {
     	x[i].style.display = "none";  
  	}
  
  	x[slide-1].style.display = "block";  
}

function changeDiv(n) {
  showDiv(slide += n);
}

showDiv(slide);