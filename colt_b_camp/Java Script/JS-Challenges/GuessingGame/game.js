// creat secretNumber
var secretNumber = 4;
// ask user for guess
var guess = prompt("Guess a number?");


// check if guess is right
if (Number(guess) === secretNumber) {
    alert("You got it right");
} else if (Number(guess) > 10) {
    alert("Number is too high!")
} else if (Number(guess) < 0) {
    alert("Number is too low!")
}

if (Number(guess) !== secretNumber) {
    alert("Sorry, not right. try again!")
}