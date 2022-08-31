var calculater = {
	calculate: '',
	arr: [],
	calculated: function() {
		this.calculate = eval(this.calculate);
        return this.calculate;
    },
    root: function() {
    	this.calculate = Math.sqrt(eval(this.calculate));
        return this.calculate;
    },
    remove: function() {
    	this.arr = this.calculate.split('');
    	this.arr.pop();
    	this.calculate = this.arr.join();
        return this.calculate;
    },
    Exponentiation: function() {
    	this.arr = this.calculate.split(', ');
    	this.calculate = Math.pow(eval(this.arr[0]), eval(this.arr[1]));
    	return this.calculate;
    }
};

function update() {
	document.getElementById("print").value = calculater.calculate;
}

function addZero() {
	calculater.calculate += '0';
	update();
}

function addOne() {
	calculater.calculate += '1';
	update();
}

function addTwo() {
	calculater.calculate += '2';
	update();	
}

function addThree() {
	calculater.calculate += '3';
	update();	
}

function addFour() {
	calculater.calculate += '4';
	update();	
}

function addFive() {
	calculater.calculate += '5';
    update();	
}

function addSix() {
	calculater.calculate += '6';
	update();	
}

function addSeven() {
	calculater.calculate += '7';
	update();	
}

function addEight() {
	calculater.calculate += '8';	
	update();
}

function addNine() {
	calculater.calculate += '9';	
	update();
}

function addDefide() {
	calculater.calculate += '/';
	update();	
}

function addTimes() {
	calculater.calculate += '*';
	update();	
}

function addMinus() {
	calculater.calculate += '-';	
	update();
}

function addPlus() {
	calculater.calculate += '+';	
	update();
}

function addOpen() {
	calculater.calculate += '(';	
	update();
}
function addClose() {
	calculater.calculate += ')';	
	update();
}

function Root() {
	calculater.root();	
	update();
}

function Exp() {
	calculater.Exponentiation();	
	update();
}

function addComma() {
	calculater.calculate += ', ';	
	update();
}

function Equels() {
	document.getElementById("print").value = calculater.calculated();	
}

function clean() {
	calculater.calculate = '';	
	update();
}

function remove() {
	calculater.remove();	
	update();
}