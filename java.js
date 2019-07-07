var user2 = prompt("whats second")
console.log("your full name is " + user + " " + user2);
var user1 = prompt("how old are you?");
console.log("you are " + user1 + " years old");

var age = prompt("whats your age?");
var days = age*356.25;Z
alert(age + " years is " + days + " days");

var x =10;
var y =10;
cal = x<10 && y!==5;

console.log("common point")
var num = 5;
while(num <= 50){
	if(num % 5 === 0 && num 3=== 0)
	{
		console.log(num);
	}
	num+=1;
}


console.log("guessing game")
var secretNum = 4;
var guess = prompt("guess a number");
if(Number(guess)===secretNum) {
	alert("you got it dude");
}
else if(Number(guess) > secretNum) {
	alert("too high try again");
}
else{
	alert("too LOW try again");
}
 
 console.log("odd")

var num = 300;
while(num <= 333){
	if(num % 2 !== 0){
		console.log(num);
	}
	num+=1;
}