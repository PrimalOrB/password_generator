// Assignment code here
function generatePassword() {
  var digits =  inputDigits()
  return digits
}

function inputDigits() {
  let val = Number( prompt("How many characters would you like for your password? Enter a number between 8 - 128") )
  if ( !val || val < 8 || val > 128 ) {
    alert("Please enter a number between 8 - 128")
    return inputDigits();
  }
  return val
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
