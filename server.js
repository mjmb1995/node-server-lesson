// We require/import the HTTP module
var http = require("http");

// ==================================

// Then define the ports we want to listen to
var PORTONE = 7000;
var PORTTWO = 7500;

// ==================================

// We need two different functions to handle requests, one for each port

function handleRequestOne(request, response){
	response.end("You're a Javascript mastermind!");
}

function handleRequestTwo(request, response){
	response.end("JavaScript must not be your forte..");
}

// ==================================

// Create our servers
var serverOne = http.createServer(handleRequestOne);

var serverTwo = http.createServer(handleRequestTwo);

// ==================================

// Starting our servers
serverOne.listen(PORTONE, function(){
	// Callback triggered when server is successfully listening
	console.log("Server listening on: http://localhost:" + PORTONE)
})

serverTwo.listen(PORTTWO, function(){
	// Callback triggered when server is successfully listening
	console.log("Server listening on: http://localhost:" + PORTTWO)
})