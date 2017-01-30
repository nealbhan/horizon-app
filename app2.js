if(!program.sum && !program.product) {
	throw "Error. Incorrect number of flags present"
}

var isNumber = function(x) {
	return !isNaN(parseFloat(x));
}

var numbers = args.filter(isNumber).map(parseFloat);
var result;

if(program.sum) {
	result = numbers.reduce(function(a,b) {return a+b})
}

if(program.product) {
	result = numbers.reduce(function(a,b) {return a*b})
}

console.log("hey");
console.log("result is %d", result);