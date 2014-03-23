//alert("JavaScript works!");

//Jonathan Rosario
//Scalable Data Infrastructures
//Lab 9

//Problem 1
var myNum1 = 5;
var myNum2 = 2;

var myDec = function(myNum1, myNum2) {
	
	var newNum = myNum1.toFixed(myNum2);
	
	return newNum;
		
};

console.log("The number " + myNum1 + " is now a decimal " + myDec(myNum1, myNum2));


//Problem 2

var numAsString = "31";

var numString = function(numAsString) {
	
	var numAsStringValue = parseFloat(numAsString);
	
	return numAsStringValue;
	
};

console.log("Hi, I'm " + numString(numAsString) + " and I am a recovering string addict.");

//Problem 3

var myFirstDate = "3/12/2014";
var mySecondDate = "3/22/2014";
var time = prompt("Enter the number of days or hours");

var dateType = function(myFirstDate, mySecondDate, time) {
	
	var a = new Date(myFirstDate);
	var b = new Date(mySecondDate);
	var myChangedDates = mySecondDate - myFirstDate;
	
	console.log(myChangedDates);
	
	if (time === "hours") {
	
	return ((myChangedDates/1000)/60/60);
	
	}else if (time === "days") {
		
		return ((myChangedDates/1000/60/60)/24);
		
	}	

};

console.log("The dates have been successfully changed " + dateType(myFirstDate, myFirstDate, time));
