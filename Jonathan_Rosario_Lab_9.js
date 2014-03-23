//alert("JavaScript works!");

//Jonathan Rosario
//Scalable Data Infrastructures
//Lab 9
//Jonathan Rosario
//This class is the best ever!!!

//Problem 1
var myNum1 = 5;
var myNum2 = 2;

var myDec = function(myNum1, myNum2) {
	
	var newNum = myNum1.toFixed(myNum2);
	
	return newNum;
		
};

console.log("The number " + myNum1 + " is now called Mr. Decimal " + myDec(myNum1, myNum2));


//Problem 2

var numAsString = "31";

var numString = function(numAsString) {
	
	var numAsStringValue = parseFloat(numAsString);
	
	return numAsStringValue;
	
};

console.log("Hi, I'm " + numString(numAsString) + " and I am a recovering string addict.");

//Problem 3

var today = new Date();
var nextWeek = new Date("March 29, 2014");

console.log(today)
console.log(nextWeek);

var inBetween = nextWeek - today;

console.log("Jessica Alba will be my wife in " + Math.ceil(inBetween/1000/60/60/24) + " days. You watch!");
