$(document).ready(function(){
var enterNumber = prompt("Please enter a number to Fizz Buzz");
var convertNumber = +enterNumber;
var fizzBuzzFunc = function(){
	for(var i = 1; i < +convertNumber +1; i++){
		if((i % 3 === 0) && (i % 5 === 0)){
	document.write("Fizz Buzz ");
	}
		else if(i % 3 === 0){
	document.write("Fizz ");
	}
		else if(i % 5 === 0){
	document.write("Buzz ");
	}
		else{
	document.write(" " + i + " ");
	}
}
};
//check for an illegal number
if(isNaN(convertNumber)){
	prompt("Please enter a number only!");
}
else if(convertNumber % 1 !== 0)
{
	prompt("Please enter a whole number only!");
}
else{
	fizzBuzzFunc();
}

$("#numbers").append(fizzBuzzFunc());
});