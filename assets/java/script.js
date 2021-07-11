// Assignment code here
function generatePassword() {
    var numbers = ['0123456789'];
    var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    var lowerCase = ['abcdefghijklmnopqrstuvwxyz']
    var specialCharacters = ['!@#$%^&*()']

    var numQuestion = window.prompt('How many characters do you want your password to have?');
    
    var upCaseQuestion = window.confirm('Would you like to include Upper Case Letters?');
    if(upCaseQuestion){
        finalPassword = finalPassword(upperCase);
    }
    var lowCaseQuestion = window.confirm('Would you like to include Lower Case Letters?');
    if(lowCaseQuestion){
        finalPassword = finalPassword(lowerCase);
    }
    var specialCharactersQuestion = window.confirm('Would you like to include special characters?');
    if(specialCharactersQuestion){
        finalPassword = finalPassword(specialCharacters);
    }

    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
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
