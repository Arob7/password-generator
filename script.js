//generate password
function generate() {
  //get uppercase, lowercase, number, special
  let choice = document.getElementById("slider").value;
  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  // get characters
  let password = "";

  //validate input
  // if (choicesMade){
  //     generatePassword
  // } else{
  //     console.log("Please enter characters")
  // }

  for (var i = 0; i <= choice; i++) {
    //randomly select characters to make password of x length
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //display password
  document.getElementById("display").value = password;

  //get password length
  document.getElementById("length").innerHTML = "Length: 25";

  document.getElementById("slider").oninput = function () {
    if (document.getElementById("slider").value > 0) {
      document.getElementById("length").innerHTML =
        "Length: " + document.getElementById("slider").value;
    } else {
      document.getElementById("length").innerHTML = "Length: 1";
    }
  };
}
