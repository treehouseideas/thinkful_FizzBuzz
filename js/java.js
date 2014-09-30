function fizzBuzz(){
	var enterNumber = prompt("Please enter a number");
	var convertNumber = +enterNumber;
	//check for an illegal numbers
	if(isNaN(convertNumber)){
		prompt("Please enter a number only!");
	}
	else if(convertNumber % 1 !== 0)
	{
		prompt("Please enter a whole number only!");
	}else {
		for(var i = 1; i < +convertNumber +1; i++){
			if((i % 3 === 0) && (i % 5 === 0)){
			document.write("Fizz Buzz <br>");
			}
			else if(i % 3 === 0){
			document.write("Fizz <br>");
			}
			else if(i % 5 === 0){
			document.write("Buzz <br>");
			}
			else{
			document.write(" " + i + " <br>");
			}
	}
}
};
