# JavaScript: Password Generator

Created an application to generate a password given specific parameters by the user. I created functions to create a random number generator calling characters from a variable that was a string of upper case letters, lower case letters, special characters, and numbers. From the random character generator I plugged in the random characters into an empty string variable that output the password to the browser. With the if statement block I was able to allow the user to choose what kind of characters they would like in their password.

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
