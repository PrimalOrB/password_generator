// Assignment code here
function generatePassword() {
  var settings = {}
  inputDigits( settings );
  var conditions = ['lowercase', 'uppercase', 'numeric', 'special']
  inputCondition( settings, conditions)
 
  // loop over settings.length to build an empty array of length
  var passwordObj = []
  for ( var i = 0; i < settings.length; i++) {
    passwordObj[i] = ''
  }

  // extract settings / values from the settings object
  var selectedConditons = Object.entries(settings)
  // empty object to push false value to
  var validate = []
  var loop = 0
  // loop through selected conditions to check if they are selected. push false values into object
  for ( var i = 1; i < selectedConditons.length; i++ ) {
    switch( selectedConditons[i][0] ){
      case 'lowercase':
        if( selectedConditons[i][1] ) {
          loop = loop+1
          selectedConditons[i][1] = loop
          break 
        }
        validate.push( selectedConditons[i][1] )
        break
      case 'uppercase':
        if( selectedConditons[i][1] ) {
          loop = loop+1
          selectedConditons[i][1] = loop
          break 
        }
        validate.push( selectedConditons[i][1] )
        break
      case 'numeric':
        if( selectedConditons[i][1] ) {
          loop = loop+1
          selectedConditons[i][1] = loop
          break 
        }
        validate.push( selectedConditons[i][1] )
        break
      case 'special':
        if( selectedConditons[i][1] ) {
          loop = loop+1
          selectedConditons[i][1] = loop
          break 
        }
        validate.push( selectedConditons[i][1] )
        break
      default:
        break
    }
  }
  // check validate object length (pushed false values) against initial conditions object. If the same, then user has selected all values as false and must re-initiate the function
  if ( validate.length === conditions.length ) {
    alert('You must select at least one condition')
    generatePassword();
  };

  // equal allocation for each selection of the total length (take the input length, and divide by the total conditions - the false conditions)
  var allocationEach =  Math.floor( settings.length / Math.floor( conditions.length - validate.length ))
  // remainder to add to last selected condition
  var remainder = settings.length % ( conditions.length - validate.length )

  // loop through selected conditions update the generated password with random characters
  for ( var i = 1; i < selectedConditons.length; i++ ) {
    switch( selectedConditons[i][0] ){
      case 'lowercase':
        if( selectedConditons[i][1] ) {
          if(selectedConditons[i][1] < ( conditions.length - validate.length ) ) {
            var low = 0 + ( allocationEach * ( selectedConditons[i][1] - 1 ) )
            var high = allocationEach * ( selectedConditons[i][1] ) - 1
            lowercaseInput( passwordObj, low, high )
          } else {
            var low = 0 + ( allocationEach * ( selectedConditons[i][1] - 1 ) )
            var high = allocationEach * ( selectedConditons[i][1] ) -1 + remainder
            lowercaseInput( passwordObj, low, high )
         }
          break 
        }
        break
      case 'uppercase':
        if( selectedConditons[i][1] ) {
          if(selectedConditons[i][1] < ( conditions.length - validate.length ) ) {
            var low = 0 + ( allocationEach * ( selectedConditons[i][1] - 1 ) )
            var high = allocationEach * ( selectedConditons[i][1] ) - 1
            uppercaseInput( passwordObj, low, high )
          } else {
            var low = 0 + ( allocationEach * ( selectedConditons[i][1] - 1 ) )
            var high = allocationEach * ( selectedConditons[i][1] ) -1 + remainder
            uppercaseInput( passwordObj, low, high )
         }
          break 
        }
        break
      case 'numeric':
        if( selectedConditons[i][1] ) {
          if(selectedConditons[i][1] < ( conditions.length - validate.length ) ) {
            var low = 0 + ( allocationEach * ( selectedConditons[i][1] - 1 ) )
            var high = allocationEach * ( selectedConditons[i][1] ) - 1
            numericInput( passwordObj, low, high )
          } else {
            var low = 0 + ( allocationEach * ( selectedConditons[i][1] - 1 ) )
            var high = allocationEach * ( selectedConditons[i][1] ) -1 + remainder
            numericInput( passwordObj, low, high )
         }
          break 
        }
        break
      case 'special':
        if( selectedConditons[i][1] ) {
          if(selectedConditons[i][1] < ( conditions.length - validate.length ) ) {
            var low = 0 + ( allocationEach * ( selectedConditons[i][1] - 1 ) )
            var high = allocationEach * ( selectedConditons[i][1] ) - 1
            specialInput( passwordObj, low, high )
          } else {
            var low = 0 + ( allocationEach * ( selectedConditons[i][1] - 1 ) )
            var high = allocationEach * ( selectedConditons[i][1] ) -1 + remainder
            specialInput( passwordObj, low, high )
         }
          break 
        }
        break
      default:
        break
    }
  }
shuffle(passwordObj) ; 

return passwordObj.join('')
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

function lowercaseInput(a, b, c) {
  var chars = 'abcdefghijklmnopqrstuvwxyz'
  for ( var i = b; i <= c; i++) {
    a[i] = chars[Math.floor(Math.random() * (chars.length))]
  }
}

function uppercaseInput(a, b, c) {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for ( var i = b; i <= c; i++) {
    a[i] = chars[Math.floor(Math.random() * (chars.length))]
  }
}

function numericInput(a, b, c) {
  var chars = '1234567890'
  for ( var i = b; i <= c; i++) {
    a[i] = chars[Math.floor(Math.random() * (chars.length))]
  }
}

function specialInput(a, b, c) {
  var chars = '!@#$%^&*()_+~`|}{[]\:;?><,./-='
  for ( var i = b; i <= c; i++) {
    a[i] = chars[Math.floor(Math.random() * (chars.length))]
  }
}

function shuffle(a) {
  for ( var i = 0; i < a.length - 1; i++ ) {
    var random = Math.floor( Math.random() * ( i ) )
    var orig = a[i]
    a[i] = a[random]
    a[random] = orig
  }
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
