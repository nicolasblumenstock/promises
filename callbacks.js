//Callbacks
//in JS functions are just objects.
//Therefore... You can pass functions around your code.

// ===== these are the same ====
// $('btn').click(function(){console.log('click')});

// var clickFunction = function(){console.log('click')};
// $('btn').click(clickFunction);

// ==== somewhere in jQuery, is this.. ====
// var $ = {};
// $.click = function(callbackToRunLater){
// ==== this is where the magic happens ====	
// 	callbackToRunLater();
// };

// ==== consider the following ====
function x(y){
// ==== version 1 ====	
	// return function(z){
	// 	console.log('y tho')
	// }
// ==== version 2 ====
	var funcToReturn = function(z){
		console.log(y+z);
	};
	return funcToReturn;
};
x(2)(3);

// ==== the only way this works is if x returns a function ====
// ==== the function will take a paramater ====
// ==== a function to pass around, this is a higher order function ====

// ==== this is a thing ====
function print(thingToPrint){
	console.log(thingToPrint);
};

// ==== the function doesn't need to be passed around. because we have access to it locally ====
// ==== think blackjack. deal was a utility function. we called it when we needed it ====

function b(number){
	let localNum = number * number;
// ==== call the print function above ====
	print(localNum);	
};

function c(theString){
	let localString = theString + " is what was passed";
	print(localString);
};

b(2);
c('Test');

// ==== could also make print a prototype of a constructor. ====
// ==== but what if we didn't have access to the code that needed to run our code? ====
// ==== ie what if we didn't have access to the print function ====

var a = function(theVar){
	console.log(theVar);
};

var d = function(number, callback){
	let localNum = number * number;
	callback(localNum);
};

d(3,a);
