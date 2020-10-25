// Assignment Code
var generateBtn = document.querySelector("#generate");

// WHEN I click the button to generate a password
generateBtn.addEventListener("click", function() {
  var passwordLength = 0
  while(passwordLength < 8 || passwordLength >128){
    var passwordLength = prompt("Your password must contain at least 8 characters, and it cannot exceed 128 characters");
  }
  
    var upperCase = confirm("Would you like to include uppercase characters in your password?");
    var lowerCase = confirm("Would you like to include lowercase characters in your password?");
    var numberChar = confirm("Would you like to include any numeric characters in your password?");
    var specialChar = confirm("Would you like to include any special characters in your password?");
    
  });
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password
  var passwordLength = prompt["Password must be between 8 and 128 characters"];
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var item = items[Math.floor(Math.random()*items.length)];

  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  else
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}