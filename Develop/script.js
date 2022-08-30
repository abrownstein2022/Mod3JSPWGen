// Challenge 3 JavaScript Password Generator
//Alexis Brownstein 8/28/22  NOTE to self: JS is case-sensitive.  Watch how you spell variables, functions, etc.

let pwText = ""; //initialize for test purposes. Will clear out when working properly.
let isOK = false; //only call password generator if all criteria ok and set isOK to true
let bolInclLC = false;   //true/false - if users wants pw to contain lowercase letters
let bolInclUC = false;   //true/false - if users wants pw to contain uppercase letters
let bolInclNum = false;  //true/false - if users wants pw to contain numbers
let bolInclSpec = false; //true/false - if users wants pw to contain special characters

const txtAlphaLC="abcdefghijklmnopqrstuvwxyz";
const txtAlphaUC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const txtNumbers="0123456789";
// const txtSpec=' !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~';
// Space	U+0020
// !	Exclamation	U+0021
// ”	Double quote	U+0022
// #	Number sign (hash)	U+0023
// $	Dollar sign	U+0024
// %	Percent	U+0025
// &	Ampersand	U+0026
// ’	Single quote	U+0027
// (	Left parenthesis	U+0028
// )	Right parenthesis	U+0029
// *	Asterisk	U+002A
// +	Plus	U+002B
// ,	Comma	U+002C
// -	Minus	U+002D
// .	Full stop	U+002E
// /	Slash	U+002F
// :	Colon	U+003A
// ;	Semicolon	U+003B
// <	Less than	U+003C
// =	Equal sign	U+003D
// >	Greater than	U+003E
// ?	Question mark	U+003F
// @	At sign	U+0040
// [	Left bracket	U+005B
// \	Backslash	U+005C
// ]	Right bracket	U+005D
// ^	Caret	U+005E
// _	Underscore	U+005F
// `	Grave accent (backtick)	U+0060
// {	Left brace	U+007B
// |	Vertical bar	U+007C
// }	Right brace	U+007D
// ~


var generatePassword = function() {
// Ask user to enter password length
let pwLen = window.prompt("Please enter desired password length between 8 and 128");
 // window.alert(pwLen);

// If user pressed Cancel, immediately end function
if (!pwLen) {
   window.alert("You pressed cancel.  Exiting function.")
   return;
 }
   //window.alert(pwLen);

//validate pwLen between 8 and 128 inclusive
 if (pwLen < 8 || pwLen > 128){
   window.alert("Error: Password length must be between 8 and 128.  Please try again.")
   return;
 }

//does user want to include lowercase?
let txtLC = window.prompt("Do you want to include lowercase letters (y/n)");
if (!txtLC) {
  window.alert("You pressed cancel.  Exiting function.")
  return;
}
let result = txtLC.toUpperCase();  //convert to uppercase and check for that
//window.alert(result);
if (result != "Y" && result != "N") {
  window.alert("You must enter y or n");
  return;
} else {
  if (result === "Y") {
    bolInclLC = true;
  }
}

//does user want to include uppercase?
let txtUC = window.prompt("Do you want to include uppercase letters (y/n)");
if (!txtUC) {
  window.alert("You pressed cancel.  Exiting function.")
  return;
}
let result2 = txtUC.toUpperCase();  //convert to uppercase and check for that
if (result2 != "Y" && result2 != "N") {
  window.alert("You must enter y or n");
  return;
} else {
  if (result2 === "Y") {
    bolInclUC = true;
  }
}

//does user want to include numbers?
let txtNum = window.prompt("Do you want to include numbers (y/n)");
if (!txtNum) {
  window.alert("You pressed cancel.  Exiting function.")
  return;
}
let result3 = txtNum.toUpperCase();  //convert to uppercase and check for that
if (result3 != "Y" && result3 != "N") {
  window.alert("You must enter y or n");
  return;
} else {
  if (result3 === "Y") {
    bolInclNum = true;
  }
}

//does user want to include special characters?
let txtSpec = window.prompt("Do you want to include special characters (y/n)");
if (!txtSpec) {
  window.alert("You pressed cancel.  Exiting function.")
  return;
}
let result4 = txtSpec.toUpperCase();  //convert to uppercase and check for that
if (result4 != "Y" && result4 != "N") {
  window.alert("You must enter y or n");
  return;
} else {
  if (result4 === "Y") {
    bolInclSpec = true;
  }
}

//User must say yes at least one character type
if (!bolInclLC && !bolInclUC && !bolInclNum && !bolInclSpec) {
  window.alert("You must select at least one character type.  Please try again.");
  return;
 } else {
    isOK = true;  //now know ok to run generator below  
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
