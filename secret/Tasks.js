// Task 1
const a = 5,
	b = 10,
	S = a*b, //50
	P = 2*(a+b); //30

//-----------------------------------------------------------------
// Task 2
const num1 = 10,
	num2 = 4,
	num1Square = num1**2, //100
	num2Square = num2**2, //16
	addition = num1Square + num2Square, //116
	subtraction = num1Square - num2Square, //84
	multiplication = num1Square * num2Square, //1600
	division = num1Square / num2Square; //6.25

//-----------------------------------------------------------------
// Task 3
let A = 8;
let helpA;
let outA = [];

function A8() {
	for (let i = 0; i < 3; i++) {
		helpA = A**2;
		A = helpA;
		outA.push(helpA);
	}
	return outA;
}

//-----------------------------------------------------------------
// Task 4
let year = 1901,
	century = 0;

let indexOfYear;
function checkCentury(){
	let last2OfYear;
	let indexLast2OfYear;
	if (String(year).length == 4) {
		last2OfYear = Number(String(year).substr(1,year.length))
		indexLast2OfYear = 2;
	} else {
		last2OfYear = Number(String(year).substr(2,year.length))
		indexLast2OfYear = 1;
	}
	if (last2OfYear>0){
		return century = Number(String(year).substr(0,indexLast2OfYear))+1;
	} 
	if (last2OfYear==0){
		return century = Number(String(year).substr(0,indexLast2OfYear));
	}
}

//-----------------------------------------------------------------
// Task 5
let numbers = [30,7,99];
function maxNumbersAddition(){
	let indexOfMinNum = numbers.indexOf(Math.min(...numbers));
	numbers.splice(indexOfMinNum,1); //[30,99]
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum; //129
}

//-----------------------------------------------------------------
// Task 6
let numA = 6,
	numB = 12;
function sum(){
	let sum = 0;
	for (var i = numA; i <= numB; i++) {
		sum += i;
	}
	return sum;
}

//-----------------------------------------------------------------
// Task 7
let array = ["HTML","CSS","JS"];
let arrayReverse = array.reverse(); // ["JS","CSS","HTML"];

//-----------------------------------------------------------------
// Task 8
let number = 1,
	timesTo1 = 0;

function transformation(){
	if(number != 1){
		if ((number%2)!=0) {
			number++;
			timesTo1++;
		}

		for (let i = number; number != 1; i++) {
			if ((number%2)!=0) {
				number++;
				timesTo1++;
			}
			number = number/2;
			timesTo1++;
		}
		return timesTo1;
	} else {
		return timesTo1;
	}
}