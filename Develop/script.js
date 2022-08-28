// Challenge 3 JavaScript Password Generator
//Alexis Brownstein 8/28/22  NOTE to self: JS is case-sensitive.  Watch how you spell variables, functions, etc.

let pwText = "yourpassword"; //initialize for test purposes. Will clear out when go live.
let isOK = false; //only call password generator if all criteria ok and set isOK to true

var generatePassword = function() {
// Ask user to enter password length
let pwLen = window.prompt("Please enter desired password length");
  
// If user pressed Cancel, immediately end function
if (!pwLen) {
   window.alert("You pressed cancel.  Exiting function.")
   return;
 }
   //window.alert(pwLen);

//validate pwLen between 8 and 128 inclusive
 if (pwLen < 8 || pwLen > 128){
   window.alert("Error: Password length must be between 8 and 128.  Please try again.")
 }

// Passed all validations so display generated password
 if (isOK){ 
  writePassword() + "\nThank you for using my password generator!"; 
 } else {
  return;
 }

};  //end to var genPassword = function() at top of code

generatePassword();
//end Alexis code

//below is included starter code
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
