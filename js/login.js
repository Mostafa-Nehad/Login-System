var inputAddEmail = document.querySelector("#signInEmail");
var inputAddPassword = document.querySelector("#signInPassword");
var btnSignIn = document.querySelector("#signIn");
var messageValidation = document.querySelector(".textToValidation");

var users = JSON.parse(localStorage.getItem("users"));

btnSignIn.addEventListener("click", function(){
  signIn();
})

function signIn(){
  var email = inputAddEmail.value;
  var password = inputAddPassword.value;

if (users) {
        var user = users.find(function(user) {
          return user.email === email && user.password === password;});

      if (user) {
      localStorage.setItem("currentUserName", user.name);
      window.location.href = "index.html";
      } else {
      messageValidation.classList.remove("d-none");
      messageValidation.classList.add("d-block");
      messageValidation.style.color = "red";
      messageValidation.innerHTML = "Invalid email or password!";
      }
          }
  
else {
    messageValidation.classList.remove("d-none");
    messageValidation.classList.add("d-block");
    messageValidation.style.color = "red";
    messageValidation.innerHTML = "No users registered!";
  }
}