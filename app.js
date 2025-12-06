var city = prompt("Enter your City")
if(city === "Karachi"){
    alert("Welcome to City of Light")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your Gender")
if(gender === "Male"){
    alert("Good Morning Sir")
    
}   else if(gender === "Female"){
    alert("Good Morning Ma'am")
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var trafficSignal = prompt("Enter your Signal")
if(trafficSignal === "Red"){
    alert("Must Stop")
    
}   else if(trafficSignal === "Yellow"){
    alert("Ready to move")

}   else if(trafficSignal === "Green"){
    alert("Move now")
}

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var fuel = prompt("Enter your fuel")
if(fuel < "0.25 litre"){
    alert("Please refill the fuel in your car")

}

// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is true");
}

if(c === 14){
alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e. 
if (true){
alert("True");
}

if (false){
alert("False");
}

// f.
if("car" < "cat"){
alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

    var sub1 = +prompt("Enter marks of Subject 1:");
    var sub2 = +prompt("Enter marks of Subject 2:");
    var sub3 = +prompt("Enter marks of Subject 3:");
    var totalMarks = +prompt("Enter Total Marks:");

    var obtained = sub1 + sub2 + sub3;
    var percentage = (obtained / totalMarks) * 100;

    var grade;
    var remarks;

    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }

    // Show the total marks, marks obtained, percentage, grade & remarks like:

    document.write("<h2>Total marks : " + totalMarks + "</h2>");
    document.write("<h2>Marks obtained : " + obtained + "</h2>");
    document.write("<h2>Percentage : " + percentage.toFixed(0) + "%</h2>");
    document.write("<h2>Grade : " + grade + "</h2>");
    document.write("<h2>Remarks : " + remarks + "</h2>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 8
var guess = +prompt("Guess the secret number (1 to 10):")

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}
else {
    alert("Try again!");
}

// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var number = +prompt("Enter a number:");

if (number % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is NOT divisible by 3");
}

// Write a program that checks whether the given input is an
// even number or an odd number.

var number = +prompt("Enter a number:");

if (number % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var t = +prompt("Enter your temperature")

if(t === 40){
    alert("It is too hot outside")
}
 else if(t === 30){
    alert("The Weather today is Normal")
}
 else if(t === 20){
    alert("Today’s Weather is cool")
}
 else if(t === 10){
    alert("OMG! Today’s weather is so Cool")
} else {}

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else if (operation === "%") {
    result = num1 % num2;
}
else {
    result = "Invalid operation!";
}

alert("Result: " + result);

// chapter 12

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var ch = prompt("Enter a character:");

var ascii = ch.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    alert("It is a number");
}
else if (ascii >= 65 && ascii <= 90) {
    alert("It is an uppercase letter");
}
else if (ascii >= 97 && ascii <= 122) {
    alert("It is a lowercase letter");
}
else {
    
}

// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

if (num1 > num2) {
    alert(num1 + " is larger");
}
else if (num2 > num1) {
    alert(num2 + " is larger");
}
else {
    alert("Both numbers are equal");
}

// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number = +prompt("Enter a number:");

if (number > 0) {
    alert("The number is positive");
}
else if (number < 0) {
    alert("The number is negative");
}
else {
    alert("The number is zero");
}

// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var ch = prompt("Enter a single character:");

ch = ch.toLowerCase();   // Convert to lowercase for easy checking

if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    alert(true);
} else {
    alert(false);
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var correctPassword = "12345678";
var userPassword = prompt( "Enter your password");

if(userPassword === "" ||userPassword === null ){
    alert("Please enter your password");
}   
    else if (userPassword === correctPassword){
    alert("Correct! The password you entered matches the original password")
}
    else {
        alert("Incorrect password");
    }




