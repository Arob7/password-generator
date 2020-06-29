//get uppercase, lowercase, number, special
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let specialChar = "!@#$%^&*()_+";
let includeSpecialCharacters = true;
let includeNumberCharacters = true;
let includeLowerCaseCharacters = true;
let includeUpperCaseCharacters = true;

function gen() {
  let val = "";

  if (includeSpecialCharacters) {
    val = val + specialChar;
  }
  // else {
  //   includeSpecialCharacters = false;
  //   val = lowercase + uppercase + numbers;
  // }
  if (includeNumberCharacters) {
    val = val + numbers;
  }
  // else {
  //   includeNumberCharacters = false;
  //   val = lowercase + uppercase + specialChar;
  // }
  if (includeLowerCaseCharacters) {
    val = val + lowercase;
  }
  // else {
  //   includeLowerCaseCharacters = false;
  //   val = uppercase + numbers + specialChar;
  // }
  if (includeUpperCaseCharacters) {
    val = val + uppercase;
  }
  // else {
  //   includeUpperCaseCharacters = false;
  //   val = lowercase + numbers + specialChar;
  // }

  let password = "";
  var choice = document.getElementById("slider").value;
  for (var i = 0; i < choice; i++) {
    //randomly select characters to make password of x length
    password =
      password +
      val.charAt(Math.floor(Math.random() * Math.floor(val.length - 1)));
  }

  // //display password
  document.getElementById("display").value = password;
}

// //get password length
document.getElementById("length").innerHTML = "Length: 12";

document.getElementById("slider").oninput = function () {
  document.getElementById("length").innerHTML =
    "Length: " + document.getElementById("slider").value;
};

// CONDITION STATEMENT FOR CHECKBOXES
function upperCaseCheckbox() {
  var upperCaseCheckbox = document.getElementById("uppercase");
  if (upperCaseCheckbox.checked === true) {
    includeUpperCaseCharacters = true;
    console.log("adds uppercase");
  } else {
    includeUpperCaseCharacters = false;
    console.log("excludes uppercase");
  }
}
function lowerCaseCheckbox() {
  var lowerCaseCheckbox = document.getElementById("lowercase");
  if (lowerCaseCheckbox.checked === true) {
    includeLowerCaseCharacters = true;
    console.log("adds lowercase");
  } else {
    includeLowerCaseCharacters = false;
    console.log("excludes lowercase");
  }
}
function numberCheckbox() {
  var numberCheckbox = document.getElementById("number");
  if (numberCheckbox.checked === true) {
    includeNumberCharacters = true;
    console.log("adds number");
  } else {
    includeNumberCharacters = false;
    console.log("excludes number");
  }
}
function specialCharCheckBox() {
  var specialCharCheckbox = document.getElementById("special-char");
  if (specialCharCheckbox.checked === true) {
    includeSpecialCharacters = true;
    console.log("adds special-char");
  } else {
    includeSpecialCharacters = false;
    console.log("excludes special-char");
  }
}

// function box() {
//   allChecked (document.querySelectorAll(#uppercase,
//     #lowercase,
//     #numbers,
//     #specialChar))

//   var checkbox = document.getElementById(

//   );
//   // var text = document.getElementById("text");
//   if (checkbox.checked === true) {
//     console.log("boxes checked");
//     // } else {
//     //   text.display = "none";
//     // }
//   }
// }
