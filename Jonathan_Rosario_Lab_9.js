//alert("JavaScript works!");

//Jonathan Rosario
//Scalable Data Infrastructures
//Lab 9

//Problem 1
var myNum1 = 5;
var myNum2 = 2;

var myDec = function(num1, num2) {
	
	var newNum = myNum1.toFixed(myNum2);
	
	return newNum;
		
};

console.log("The number is now a decimal " + myDec(myNum1, myNum2));


//Problem 2

var numAsString = "31";

var numString = function(numAsString) {
	
	var numAsStringValue = parseFloat(numAsString);
	
	return numAsStringValue;
	
};

console.log("Hi, I'm " + numString(numAsString) + " and I am a string addict.");

//Problem 3

var myFirstDate = "3/12/2014";
var mySecondDate = "3/22/2014";
var days = prompt("Enter days");

var dateType = function(myFirstDate, mySecondDate, days) {
	
	var a = new Date(myFirstDate);
	var b = new Date(mySecondDate);
	var variationBetweenDates = a - b;
	
	console.log(variationBetweenDates);
	
	if (days === "hours") {
	
	return ((variationBetweenDates/1000)/60/60);
	
	}else if (days === "days") {
		
		return ((variationBetweenDates/1000/60/60)/24);
		
	}	

};

console.log("The dates have been successfully changed " + dateType(myFirstDate, myFirstDate, days));