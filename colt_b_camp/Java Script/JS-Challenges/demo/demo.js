//var socialMedia = {firstName:"Osama", lastName: "Mohamed"};
var yourAge = prompt("What is your age?");

if (yourAge < 18) {
    document.getElementById('test').innerHTML = 
    "Sorry your age is " + yourAge + " you are not allowed Here";

} else {
    document.getElementById('test').innerHTML = 
        "Hello your age is " + yourAge + " you are welcome here";
}

