// Variables
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = 'abcdefghijklmnopqrstuvwxyz'
var num = '1234567890'
var special = '!@#$%^&*()-+=_[]{};:?/><.,~`'

// Functions
// Write password to the #password input
function password(l, characters) {
  var pwd = '';
  for (var i = 0; i < l; i++) {
    console.log(characters)
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}

// Function to write password in text are and encapsulating all if / else statements.
function writePassword(){
var characterSet = ''

// Password Length if / else statement
var passLength = prompt('How many characters do you want your password to be? *Can only be between 8 and 128 characters.*')
if (passLength >= 8 && (passLength <= 128)) {
  console.log(passLength);
}
else {
  alert('Password must be between 8 and 128 characters. Try again.');
  return writePassword()
}

// Upper case characters pass into password
var passUpper = confirm('Would you like upper case characters in your password?');
if (passUpper) {
  characterSet += upper
};

// Lower case characters pass into password
var passLower = confirm('Would you like lower case characters in your password?');
if (passLower) {
  characterSet += lower
};

// Special characters pass into password
var passSpecial = confirm('Would you like special characters in your password?');
if (passSpecial) {
  characterSet += special
};

// Numbers pass into password
var passNum = confirm('Would you like numbers in your password?');
if (passNum) {
  characterSet += num
};

// Pulls password id from html
document.getElementById ('password').value = password (passLength, characterSet);
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);