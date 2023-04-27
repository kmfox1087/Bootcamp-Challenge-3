// Password variable values

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "_", "=", "+", "~", "`", ";", ":", ">", "<", "/", "?", "'", "[", "]", "{", "}"]
let numberic = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var multiSelect =[];
var keyLength;

// Generate password

function getPasswordOptions() {
  console.log("generate password");
  // Variables to get password to generate
  keyLength = prompt("Password must be between 8 and 128 characters!");
  var upperABC = confirm("Do you want uppercase letters?");
  var lowerABC = confirm("Do you want lowercase letters?");
  var characters = confirm("Do you want symbols?");
  var numbers = confirm("Do you want your password to have numbers?");
  // Get length of password and save to variable

  if (keyLength < 8 || keyLength > 128) {
    alert("Your password does not meet the critia");
    var keyLength = prompt("Password must be between 8 and 128 characters in length.");
  };

  // Alert if they don't pick one

  if (upperABC === false && lowerABC === false && characters === false && numbers === false) {
    alert("You must pick one character type to make a password!");
  };

// If statements to make password genterate

let passwordOptions = {
  keyLength,
  upperABC,
  lowerABC,
  numbers,
  characters,

}
console.log(passwordOptions);
  return passwordOptions;

}

function generatePassword() {
  var options = getPasswordOptions()
  console.log("options", options);
  if (options.upperABC === true) {
    multiSelect = multiSelect.concat(upperAlpha);
  };

  if (options.lowerABC === true) {
    multiSelect = multiSelect.concat(lowerAlpha);
  };

  if (options.characters === true) {
    multiSelect = multiSelect.concat(specialCharacters);
  };

  if (options.numbers === true) {
    multiSelect = multiSelect.concat(numberic);
  };
  console.log('multiSelect', multiSelect);
  
  result = ""; 
  console.log(keyLength);
  for (var i = 0; i < options.keyLength; i++) {
    console.log("inside for loop")
    var randomIndex = Math.floor(Math.random() * multiSelect.length)
    console.log(randomIndex)
    result += multiSelect[randomIndex]
  }
console.log("result", result);

return result;
 
}

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.textContent = '';
  console.log("write password");
  var password = generatePassword();
  

  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
