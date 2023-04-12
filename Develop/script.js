
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Password variable values
character = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "_", "=", "+", "~", "`", ";", ":", ">", "<", "/", "?", "'", "[", "]", "{", "}"]
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
