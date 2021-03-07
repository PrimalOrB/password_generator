// Assignment code here
function generatePassword() {
  var settings = {}
  inputDigits( settings );
  var conditions = ['lowercase', 'uppercase', 'numeric', 'special']
  inputCondition( settings, conditions)
 
  console.log( settings )
}

function inputDigits(a) {
  let val = Number( prompt("How many characters would you like for your password? Enter a number between 8 - 128") )
  if ( !val || val < 8 || val > 128 ) {
    alert("Please enter a number between 8 - 128")
    return inputDigits();
  }
  a.length = val
};

function inputCondition(a, b) {
  for( var i = 0; i < b.length; i++ ) {
    let val = confirm(`Do you want your password to include ${b[i]} characters?`)
    a[`${b[i]}`] = val
  }
};




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
