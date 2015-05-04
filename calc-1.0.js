/**
* Calc-1.0.js is a small calculator that handles small operations.
* Calc-1.0.js uses JQuery and JavaScript to operate the calculator
* This calculator is created by Naji Kadri and it is designed for the flat calculator web app
*/
var number = 0; //the value stored for calculation
var inUse = false; // checks if an operation is waiting already
var operation = ""; //checks what type of operation is selected

$(document).ready( function () { // code runs when the document is ready
	
	// numpad and operations visual effects
	
	$(".numpad").mouseleave(function () {
		$(this).fadeTo('slow',1);
	});
	
	$(".oper").mouseenter(function () {
		$(this).fadeTo('fast',0.5);
	});
	
	$(".oper").mouseleave(function () {
		$(this).fadeTo('slow',1);
	});
	
	// operations functions
	$("#clear").click( function () {
		var dat = document.getElementById("data");
		number = 0;
		dat.innerText = "0";
	});
	$("#equal").click( function () {
		if (inUse) {
		  if (operation === "add") {
			  var dat = document.getElementById("data");
			  var value = parseInt(dat.innerText);
			  number = number + value;
			  dat.innerText = number;
			  inUse =false;
		  }
		  else if (operation === "subtract") {
			 var dat = document.getElementById("data");
			 var value = parseInt(dat.innerText);
			 number = number - value;
			 dat.innerText = number;
			 inUse =false;
		  }
		  else if (operation === "divide") {
			  var dat = document.getElementById("data");
			  var value = parseInt(dat.innerText);
			  number = number / value;
			  dat.innerText = number;
			  inUse =false;
		  }
		  else if (operation === "multiply") {
			  var dat = document.getElementById("data");
			  var value = parseInt(dat.innerText);
			  number = number * value;
			  dat.innerText = number;
			  inUse =false;
		  }
		  
		}
	});
	
	$("#add").click( function () {
		if (!(inUse)) {
		inUse = true;
		var dat = document.getElementById("data");
		number = parseInt(dat.innerText);
		dat.innerText = "0";
		operation = "add";
		}
	});
	
	$("#subtract").click( function () {
		if (!(inUse)) {
		inUse = true;
		var dat = document.getElementById("data");
		number = parseInt(dat.innerText);
		dat.innerText = "0";
		operation = "subtract";
		}
	});
	
	$("#divide").click( function () {
		if (!(inUse)) {
		inUse = true;
		var dat = document.getElementById("data");
		number = parseInt(dat.innerText);
		dat.innerText = "0";
		operation = "divide";
		}
	});
	
	$("#multiply").click( function () {
		if (!(inUse)) {
		inUse = true;
		var dat = document.getElementById("data");
		number = parseInt(dat.innerText);
		dat.innerText = "0";
		operation = "multiply";
		}
	});
	
	//numpad functions
	
	$("#one").click(function() {
		var dat = document.getElementById("data");
		if (dat.innerText.length === 1 && dat.innerText === "0") {
			dat.innerText = "";
			dat.innerText = dat.innerText + "1";
		}
		else if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "1";
		}
	});
	
	$("#two").click(function() {
		var dat = document.getElementById("data");
		if (dat.innerText.length === 1 && dat.innerText === "0") {
			dat.innerText = "";
			dat.innerText = dat.innerText + "2";
		}
		else if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "2";
		}
	});
	
	$("#three").click(function() {
		var dat = document.getElementById("data");
		if (dat.innerText.length === 1 && dat.innerText === "0") {
			dat.innerText = "";
			dat.innerText = dat.innerText + "3";
		}
		else if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "3";
		}
	});
	
	$("#four").click(function() {
		var dat = document.getElementById("data");
		if (dat.innerText.length === 1 && dat.innerText === "0") {
			dat.innerText = "";
			dat.innerText = dat.innerText + "4";
		}
		else if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "4";
		}
	});
	
	$("#five").click(function() {
		var dat = document.getElementById("data");
		if (dat.innerText.length === 1 && dat.innerText === "0") {
			dat.innerText = "";
			dat.innerText = dat.innerText + "5";
		}
		else if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "5";
		}
	});
	
	$("#six").click(function() {
		var dat = document.getElementById("data");
		if (dat.innerText.length === 1 && dat.innerText === "0") {
			dat.innerText = "";
			dat.innerText = dat.innerText + "6";
		}
		else if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "6";
		}
	});
	
	$("#seven").click(function() {
		var dat = document.getElementById("data");
		if (dat.innerText.length === 1 && dat.innerText === "0") {
			dat.innerText = "";
			dat.innerText = dat.innerText + "7";
		}
		else if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "7";
		}
	});
	
	$("#eight").click(function() {
		var dat = document.getElementById("data");
		if (dat.innerText.length === 1 && dat.innerText === "0") {
			dat.innerText = "";
			dat.innerText = dat.innerText + "8";
		}
		else if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "8";
		}
	});
	
	$("#nine").click(function() {
		var dat = document.getElementById("data");
		if (dat.innerText.length === 1 && dat.innerText === "0") {
			dat.innerText = "";
			dat.innerText = dat.innerText + "9";
		}
		else if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "9";
		}
	});
	
	$("#zero").click(function() {
		var dat = document.getElementById("data");
		
		if (dat.innerText.length >= 1 && dat.innerText.length < 20) {
			dat.innerText = dat.innerText + "0";
		}
	});
});
