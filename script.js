// Assignment Code
var generateBtn = document.querySelector("#generate");
var validUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var validLower = "abcdefghijklmnopqrstuvwxyz"
var validNumber = "0123456789"
var validSpecial = "!@#$%^&*()-=+?><"

// WHEN I click the button to generate a password
generateBtn.addEventListener("click", function(){
  var passwordLength = 0
  while(passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Your password must contain at least 8 characters, and it cannot exceed 128 characters");
  }
  console.log(passwordLength);
    var upperCase = false
    var lowerCase = false
    var numberChar = false
    var specialChar = false

  while(!upperCase && !lowerCase && !numberChar && !specialChar){
    var upperCase = confirm("Would you like to include uppercase characters in your password?");
    var lowerCase = confirm("Would you like to include lowercase characters in your password?");
    var numberChar = confirm("Would you like to include any numeric characters in your password?");
    var specialChar = confirm("Would you like to include any special characters in your password?");
  }
  // data validation 
    var validchar = []
    if (upperCase) {
      validchar += validUpper 
    }
    if (lowerCase) {
      validchar += validLower 
    }
    if (numberChar) {
      validchar += validNumber 
    }
    if (specialChar) {
      validchar += validSpecial 
    }
  console.log(validchar)
  var password = ""
  for (let i=1; i <= passwordLength; i++){
  var index = Math.floor(Math.random()*validchar.length);
  password += validchar[index]
}
var passwordText = document.querySelector("#password");
  passwordText.value = password;
})