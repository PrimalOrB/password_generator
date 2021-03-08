// Assignment code here
function generatePassword() {
  var settings = {}
  inputDigits( settings );;
  var conditions = [ 'lowercase', 'uppercase', 'numeric', 'special' ];
  inputCondition( settings, conditions );
 
  // loop over settings.length to build an empty array of length
  var passwordObj = []
  for ( var i = 0; i < settings.length; i++) {
    passwordObj[i] = ''
  };

  // extract settings / values from the settings object
  var selectedConditons = Object.entries(settings)

  // empty object to push false value to
  var validate = []

  // set initial value for sequance of 'true' conditions in the loop
  var sequence = 0

  // loop through selected conditions to check if they are selected. push false values into object
  for ( var i = 1; i < selectedConditons.length; i++ ) {
    // if the value is true, increment the "sequence" value so that the final entry can be identified to add any remainder values too
    if( selectedConditons[i][1] ) {
      sequence = sequence + 1
            selectedConditons[i][1] = sequence
    }
  };

  // check validate object length (pushed false values) against initial conditions object. If the same, then user has selected all values as false and must re-initiate the function
  if ( validate.length === conditions.length ) {
    alert('You must select at least one condition')
    generatePassword();
  };

  // equal allocation for each selection of the total length (take the input length, and divide by the total conditions - the false conditions)
  var allocationEach =  Math.floor( settings.length / Math.floor( conditions.length - validate.length ) )
  // remainder to add to last selected condition
  var remainder = settings.length % ( conditions.length - validate.length )

  // loop through selected conditions update the generated password with random characters
  for ( var i = 1; i < selectedConditons.length; i++ ) {
    // if number (truthy), as set by original loop
    if( selectedConditons[i][1] ) {
      var genObj = {
        selected: selectedConditons[i][0],
        series: selectedConditons[i][1],
        maxSeries: ( conditions.length - validate.length ),
        low: 0 + ( allocationEach * ( selectedConditons[i][1] - 1 ) ),
        high: allocationEach * ( selectedConditons[i][1] ) - 1,
        remainder: remainder,
      }
      handleInput( genObj, passwordObj )
    }
  }
// after passwordObj has successfully been created in segments (result of 20 index, 4 selection would be "aaaaabbbbbcccccddddd"), shuffle the index 
shuffle(passwordObj) ; 
// after the shuffle, the same input could be "bdaccabbdabdbaacdcdc"

//join and return the final password for posting to the DOM
return passwordObj.join('')
};




// function for input of length for the password
function inputDigits(a) {
  let val = Number( prompt("How many characters would you like for your password? Enter a number between 8 - 128") )
  //must be number, and must be between 8 and 128
  if ( !val || val < 8 || val > 128 ) {
    alert("Please enter a number between 8 - 128")
    return inputDigits();
  }
  a.length = val
};

// loop through input condition choices and post to settings object
function inputCondition(a, b) {
  for( var i = 0; i < b.length; i++ ) {
    let val = confirm(`Do you want your password to include ${b[i]} characters?`)
    a[`${b[i]}`] = val
  }
};

function handleInput( obj, outObj ) {
  // object containing the type of available strings
  var chars = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '1234567890',
    special: '!@#$%^&*()_+~`|}{[]\:;?><,./-=',
  };
  // if the series is the last selection, apply any remainder to the value
  if( obj.series === obj.maxSeries ) {
    obj.high = obj.high + obj.remainder
  }
  // loop through between low and high indexes and set the values to a random selection from the chars string
  for ( var i = obj.low; i <= obj.high; i++) {
    outObj[i] = chars[`${obj.selected}`][ Math.floor(Math.random() * ( chars[`${obj.selected}`].length ) ) ]
  }
}

// shuffle function
function shuffle(a) {
  for ( var i = 0; i < a.length - 1; i++ ) {
    // select a random number up to the length of the password
    var random = Math.floor( Math.random() * ( i ) )
    // set aside the value of original indexed selection
    var orig = a[i]
    // reset the value of the indexed selection to the value of a random index
    a[i] = a[random]
    // set the value of the same random index to the value of the original indexed selection
    a[random] = orig
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
