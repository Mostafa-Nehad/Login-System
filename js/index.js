var btnLogout = document.querySelector("#logout");

btnLogout.addEventListener("click", function() {
  logout();
})

var userName = localStorage.getItem("currentUserName");

if(userName == null) {
  window.location.href = "login.html";
}

if (userName) {
  document.querySelector("#username").innerHTML = `Welcome ${userName}`;}

function logout() {
  localStorage.removeItem("currentUserName");
  window.location.href = "login.html";}