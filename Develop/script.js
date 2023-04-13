var enter;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password variable values

let character = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "_", "=", "+", "~", "`", ";", ":", ">", "<", "/", "?", "'", "[", "]", "{", "}"]
let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generate password
function generatePassword() {
  // get length of password and save to variable

 // enter = parseInt(prompt("How many characters would you like yout password to be? Choose between 8 and 128"))
// confirm including special characters
// confirm if including numbers
//confirm if lowercase characters
//confirm if uppercase characters
// alert if they don't pick one
 return "My-password"
}
