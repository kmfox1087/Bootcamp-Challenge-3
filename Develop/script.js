var enter;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Variables to get password to generate

var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to continue.");
var characterprompt = confirm("Your password should have a symbol!");
var numberprompt = confirm("Your password should have a number!");
var alphaprompt = confirm("Your password should have an lowercase letter!");
var upperAlphaprompt = confirm("Your password should have an uppercase letter!");


// Password variable values

let character = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "_", "=", "+", "~", "`", ";", ":", ">", "<", "/", "?", "'", "[", "]", "{", "}"]
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var multiSelect =[];

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Generate password

function generatePassword() {

  // Get length of password and save to variable

  if (keyLength < 8 || keyLength > 128) {
    alert("Your password does not meet the critia");
    var keyLength = prompt("Password must be between 8 and 128 characters in length.");
  };

  // Alert if they don't pick one

  if (upperAlpha === false && lowerAlpha === false && character === false && number === false) {
    return "Your choices do not meet the password critia!";
    };

// Confirm including special characters
// Confirm if including numbers
// Confirm if lowercase characters

if (lowerAlpha) {multiSelect += lowerAlpha};

// Confirm if uppercase characters

if (upperAlpha) {multiSelect += upperAlpha};

}
