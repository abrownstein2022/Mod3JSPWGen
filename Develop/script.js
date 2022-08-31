// Challenge 3 JavaScript Password Generator
//Alexis Brownstein 8/28/22  NOTE to self: JS is case-sensitive.  Watch how you spell variables, functions, etc.

let pwText = ""; //initialize for test purposes. Will clear out when working properly.
let isOK = false; //only call password generator if all criteria ok and set isOK to true
let bolInclLC = false;   //true/false - if users wants pw to contain lowercase letters
let bolInclUC = false;   //true/false - if users wants pw to contain uppercase letters
let bolInclNum = false;  //true/false - if users wants pw to contain numbers
let bolInclSpec = false; //true/false - if users wants pw to contain special characters

const txtAlphaUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const txtAlphaLC = "abcdefghijklmnopqrstuvwxyz";
const txtNumbers = "0123456789";
const txtSpecial = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";


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
  //generate the password before writing it
   let finalString = "";  //now figure out the string set to use from the 4 constant choices based on boolean values
   if (bolInclLC) {
    finalString = txtAlphaLC;
   }    
   if (bolInclUC) {
    finalString += txtAlphaUC;
   }
   if (bolInclNum) {
    finalString += txtNumbers;
   }
   if (bolInclSpec) {
    finalString += txtSpecial;
   } 

   for (let i = 1; i <= pwlen; i++) {
    var char = Math.floor(Math.random()
                * finalString.length + 1);
      
    pwText += finalString.charAt(char)
 }
  
return pwText;


  writePassword() + "\nThank you for using my password generator!"; 
 } else {
  return;
 }

};  //end to var genPassword = function() at top of code

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
