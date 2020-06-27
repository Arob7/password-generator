//generate password
function generate() {
  //get password length
  let choice = document.getElementById("slider").value;

  //get uppercase, lowercase, number, special
  let values =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  let password = "";

  //validate input
  // if (choicesMade){
  //     generatePassword
  // } else{
  //     console.log("Please enter characters")
  // }

  // get characters
  for (var i = 0; i <= choice; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //randomly select characters to make password of x length

  //display password
  document.getElementById("display").value = password;
}
