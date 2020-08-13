$(".btn").on("click", function writePassword() {
  let length = prompt(
    "How long does the password need to be? (between 8 and 124)"
  );
  const low = confirm("Include lowercase letters?");
  const up = confirm("Include uppercase letters?");
  const num = confirm("Include numbers?");
  const spec = confirm("Would you like special characters? ex: ! @ # $");
  let chars = "";
  let password = "";
  length = parseInt(length);

  if (length < 8 || length > 124) {
    alert("Password must be between 8 and 124 characters.");
    length = prompt("Choose a length between 8 and 124 characters.");
    length = parseInt(length);
  }

  if (low == false && up == false && num == false && spec == false) {
    alert("You must select at least one option to generate a password.");
  } else {
    if (low == true) {
      chars = "abcdefghijklmnopqrstuvwxyz";
    }
    if (up == true) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (num == true) {
      chars += "012356789";
    }
    if (spec == true) {
      chars += "!@#$%&?()";
    }
    for (var i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }
  $("#password").text(password);
});
