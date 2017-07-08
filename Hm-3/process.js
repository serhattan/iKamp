//Listening the some dom elements and fetch their values
//Calling operations function from Calculator class
//Sending values to operations function parameters



var classname = document.getElementsByClassName("btn");

//To store clicked button's number
var digits = [];
var operand = "";
var result;
digitProcess = function(e) {
	// e.target.innerHTML is the button's number like 5, 6 
	digits.push(e.target.innerHTML);
	var number = digits.join("");
	document.getElementById("screen").innerHTML = number;
};

calculate = function() {
	data = document.getElementById("screen").innerHTML;
	
	// Gets the first index where a operand occours
	if (data.indexOf("+")!=-1) {
		var index = data.indexOf("+");
		operation = "sum";
	} else if (data.indexOf("-")!=-1) {
		var index = data.indexOf("-");
		operation = "subtraction";
	} else if (data.indexOf("*")!=-1) {
		var index = data.indexOf("*");
		operation = "multiply";
	} else if (data.indexOf("/")!=-1) {
		var index = data.indexOf("/");
		operation = "division";
	}
	// Gets the first part
	var number1 = data.substr(0, index);
	// Gets the second part
	var number2 = data.substr(index + 1);

	var calculator = new Calculator();
	result = calculator[operation](number1, number2);
	document.getElementById("resultScreen").innerHTML= result;
}
console.log(document.getElementById("screen").innerHTML);

clearScreen = function() {
	digits = [];
	document.getElementById("screen").innerHTML= " ";
	document.getElementById("resultScreen").innerHTML= " ";
}

//getElementsByClassName("btn-info") return array like object
for (var i = 0; i < classname.length; i++) {
	classname[i].addEventListener('click', digitProcess, false);
}
