//get uppercase, lowercase, number, special
function gen() {
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "1234567890";
  let specialChar = "!@#$%^&*()_+";
  let val = lowercase + uppercase + numbers + specialChar;

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

// NEED CONDITION STATEMENT FOR CHECKBOXES
function box() {
  var checkbox = document.getElementById(uppercase);

  if (checkbox == true) {
    console.log("pulls uppercase");
  } else {
    console.log("excludes uppercase");
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
