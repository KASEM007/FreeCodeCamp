// Get age and convert it to a Number (prompt always returns a)
var age = Number(prompt("What is your age?"));

// if age is negative
if (age < 0) {
    console.log("Come back once you are out of womb");
}

// if age is 21
if (age === 21) {
    console.log("Happy 21st Birthday!");
}

// if age is odd
//(Not evenly visible by two)
if (age % 2 !== 0) {
    console.log("Your age is odd");
}

//if age is a perfect square
if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}