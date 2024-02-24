let userName = document.getElementById("username");
let passWord = document.getElementById("password");
let errorMsg = document.getElementsByClassName("error");
let successIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("failure-icon");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(userName, 0, "UserName Cannot Be Blank");
  engine(passWord, 1, "Password Cannot Be Blank");
});

function engine(id, num, message) {
  if (id.value.trim() === "") {
    errorMsg[num].innerHTML = message;
    failureIcon[num].style.opacity = "1";
    successIcon[num].style.opacity = "0";
  } else {
    errorMsg[num].innerHTML = "";
    failureIcon[num].style.opacity = "0";
    successIcon[num].style.opacity = "1";
  }
}
