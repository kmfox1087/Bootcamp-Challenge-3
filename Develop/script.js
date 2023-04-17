function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password variable values

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "_", "=", "+", "~", "`", ";", ":", ">", "<", "/", "?", "'", "[", "]", "{", "}"]
let numberic = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var multiSelect =[];

// Variables to get password to generate

var keyLength = prompt("Password must be between 8 and 128 characters!");
var upperABC = confirm("Do you want uppercase letters?");
var lowerABC = confirm("Do you want lowercase letters?");
var characters = confirm("Do you want symbols?");
var numbers = confirm("Do you want your password to have numbers?");

// Generate password

function generatePassword() {

  // Get length of password and save to variable

  if (keyLength < 8 || keyLength > 128) {
    alert("Your password does not meet the critia");
    var keyLength = prompt("Password must be between 8 and 128 characters in length.");
  };

  // Alert if they don't pick one

  if (upperAlpha === false && lowerAlpha === false && specialCharacters === false && numberic === false) {
    return "You've enetered no values! We can't make a password with no values!";
    };
  }
  if (!upperAlpha && !lowerAlpha && !numberic && !specialCharacters) {
    userSelection = alert("You entered no values, we can't make a password without values!");
  }
  else if (upperAlpha && lowerAlpha && numberic && specialCharacters) {
    userSelection = (specialCharacters, lowerAlpha, upperAlpha);
  }
  else if (upperAlpha && lowerAlpha && numberic) {
    userSelection = (lowerAlpha, upperAlpha);
  }
  else if (upperAlpha && lowerAlpha && specialCharacters) {
    userSelection = (lowerAlpha, upperAlpha);
  }
  else if (upperAlpha && numberic && specialCharacters) {
    userSelection = (specialCharacters, upperAlpha);
  }
  else if (lowerAlpha && numberic && specialCharacters) {
    userSelection = (specialCharacters, lowerAlpha);
  }
  else if (upperAlpha && lowerAlpha) {
    userSelection = (lowerAlpha); 
  }
  else if (upperAlpha && numberic) {
    userSelection = (numberic);
  }
  else if (upperAlpha && specialCharacters) {
    userSelection = (specialCharacters);
  }
  else if (numberic && lowerAlpha) {
    userSelection = (lowerAlpha);
  }
  else if (specialCharacters && lowerAlpha) {
    userSelection = (lowerAlpha);
  }
  else if (specialCharacters && numberic) {
    userSelection = (numbers);
  }
  else if (numberic) {
    userSelection = numbers;
  }
  else if (specialCharacters) {
    userSelection = specialCharacters;
  }
  else if (lowerAlpha) {
    userSelection = lowerAlpha;
  }
  else if (upperAlpha) {
    userSelection = upperAlpha;
  }
{
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");

}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);