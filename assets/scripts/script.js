// Challenge 3 JavaScript Password Generator
//Alexis Brownstein 8/28/22  NOTE to self: JS is case-sensitive.  Watch how you spell variables, functions, etc.

var generatePassword = function() {
//moved let statements from above to fix scope issue so vars are re-initialized if generate button pressed again without refresh
  let pwText = ""; 
  let isOK = false; //only call password generator if all criteria ok and set isOK to true
  let bolInclLC = false;   //true/false - if users wants pw to contain lowercase letters
  let bolInclUC = false;   //true/false - if users wants pw to contain uppercase letters
  let bolInclNum = false;  //true/false - if users wants pw to contain numbers
  let bolInclSpec = false; //true/false - if users wants pw to contain special characters
  
  //use constants to hold string values for each char type user can indicate they want to use
  const txtAlphaUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const txtAlphaLC = "abcdefghijklmnopqrstuvwxyz";
  const txtNumbers = "0123456789";
  const txtSpecial = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
  

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
/*Note:  I did not use Confirm here because confirm only offers OK and Cancel as options.  I thought
that was more awkward than y/n.
*/
let result = txtLC.toUpperCase();  //convert to uppercase so Y/n and N/n will both work as user input
//window.alert(result);
//user must enter Y/n or N/n 
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

//User must say yes to at least one character type
if (!bolInclLC && !bolInclUC && !bolInclNum && !bolInclSpec) {
  window.alert("You must select at least one character type.  Please try again.");
  return;
 } else {
    isOK = true;  //now know ok to run generator below  
}

// Passed all validations so generat password
 if (isOK){ 
 //figure out the string source to use from the 4 constant choices based on user input
   let finalString = ""; 
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

   // use random function and string source and pw length entered to generate random string for pw
   for (let i = 1; i <= pwLen; i++) {
    // console.log("this is for loop" + i);
    var char = Math.floor(Math.random() * finalString.length + 1);
    // console.log(char);
    // console.log(finalString);
    pwText += finalString.charAt(char)
    // console.log(pwText);
 }
  // console.log(pwText);
    return pwText;  //function returns generated password 
     
  } else {
  return;
 }

};  //end to var genPassword = function() at top of code

//below is included starter code
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password") 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
