/*

if age is negative print an error message

if age is 21 print "happy 21st birthday"

if age is odd print "Your age is odd!"

if age is perfect square print "perfect square!"

*/


// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// If age is negative
if (age < 0) {
    console.log("Come back once you're out of the womb");
}

// If age is 21  
if (age === 21) {
    console.log("Happy 21st Birthday!");
}

// If age is odd
//(not evenly divisible by two)
if (age % 2 !== 0) {
    console.log("Your age is odd!");
}

// If age is a perfect square
if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}