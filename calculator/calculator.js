function add (num1, num2) {
return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2; 
}

function sum (someArray) {


return someArray.reduce((total, current) => total + current, 0);

/*  my original loop code

		if (someArray.length === 0){
			return 0;
		}
		else if (someArray.length === 1){
			return someArray[0];
		}
		else if (someArray.length === 2){
			return (someArray[0] + someArray[1]);
		}
		else {
			let arrayTogether = 0; 
			for (arraySpot = 0; arraySpot < someArray.length; arraySpot ++ ){
				arrayTogether += someArray[arraySpot];
			}
			return arrayTogether;

		} */

}

function multiply (someArray) {
return someArray.reduce((total, current) => total * current, );

/* my original loop code 
	if (someArray.length === 2)
	{
		return (someArray[0] * someArray[1]);

	}
	else {
		let arrayMultiplied = 1; 
		for (arraySpot = 0; arraySpot < someArray.length; arraySpot ++ ){
			arrayMultiplied *= someArray[arraySpot];
		}
		return arrayMultiplied;
	} */

} 

function power(num,pow) {
	let answer = 1;
	for (times = 0; times < pow; times ++) {
	answer *= num;
	}
	return answer;
}

function factorial(num) {

if (num === 0){
	return 1;
}
else if (num == 1 ){
	return 1;
}
else { //only valid for 2 and above
	let answer = num; 
	for (factor = (num - 1); factor >= 1; factor -- ){
		answer *= factor;
	}
	return answer;

} 
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}