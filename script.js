// Assignment code here
function generatePassword(){
  var pw = '';
  var length;
  var possibleChars = [];

  
  length = prompt("How many characters would you like in your password?")

  if(length > 7 && length < 129) {
    // if length input is between 8-128, the next prompt/confirms will appear. Using "confirm", the input will output a boolean
    addUpper = confirm("Would you like uppercase letters?")
    if(addUpper){
      possibleChars.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    }
    addLower = confirm("Would you like lowercase letters?")
    if(addLower){
      possibleChars.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    }
    addNumber = confirm("Would you like numbers?")
    if(addNumber){
      possibleChars.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    }
    addSymbol = confirm("Would you like symbols?")
    if(addSymbol){
      possibleChars.push("`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", "/", " ' ", " \ ", ";", ":",  "?", ".", ">", ",", "<")
    }
    
    for(var i = 0; i <length; i++){
      pw += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    
    }
    return pw;
    
    console.log(length)
    console.log(addUpper)
    console.log(addLower)
    console.log(addNumber)
    console.log(addSymbol)
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
