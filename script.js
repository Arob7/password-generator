// console.log(choices);

// var complexity = document.getElementById("slider").value;

// document.getElementById("slider").oninput = function(){

//   // get slider value to display as password "length"
//   document.getElementById("length").innerHTML = "Length: " + choice;

// }

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
  // if (document.getElementById("slider").value > 0) {

  document.getElementById("length").innerHTML =
    "Length: " + document.getElementById("slider").value;

  // } else {
  //   document.getElementById("length").innerHTML = "Length: 8";
  // }
};

//get password length
//get uppercase, lowercase, number, special

//validate input
// if (choicesMade){
//     generatePassword
// } else{
//     console.log("Please enter characters")
// }

//generate password

// get characters
//randomly select characters to make password of x length

//display password
