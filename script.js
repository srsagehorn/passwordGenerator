// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());

$("generateBtn").on("click", writePassword());

function writePassword() {
  password = writePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function writePassword() {
  let length = prompt("Please input desired length, between 8-128 characters");
  const lowerL = confirm("Would you like there to be lowercase letters?");
  const upperL = confirm("Would you like uppercase letters?");
  const number = confirm("Would you like there to be numbers?");
  const char = confirm("Would you like special characters? ex: ! @ # $");
  let passChar = "";
  let passSample = "";
  length = parseInt(length);

  if (length < 8 || length > 128) {
    alert("Password must be within 8-128 characters. Please select again.");
    length = prompt(
      "Please choose a correct length, between 8 and 128 characters."
    );
    length = parseInt(length);
  }

  if (
    lowerL === false &&
    upperL === false &&
    number === false &&
    char == false
  ) {
    alert("You must select at least one option to generate a password");
    writePassword();
  } else {
    if (lowerL === true) {
      passChar = "abcdefghijklmnopqrstuvwxyz";
    }
    if (upperL === true) {
      passChar = passChar + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (number === true) {
      passChar = passChar + "012356789";
    }
    if (char === true) {
      passChar = passChar + "!@#$%&?()";
    }
    for (var i = 0; i < length; i++) {
      passSample =
        passSample +
        passChar.charAt(Math.floor(Math.random() * passChar.length));
      console.log(passSample);
      console.log(passSample.length);
    }
  }
  return passSample;
}
