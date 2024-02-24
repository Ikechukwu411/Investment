// const axios = require("axios");
let form = document.querySelector("#form");
let email = document.getElementById("email");
let passWord = document.getElementById("password");
let confirm = document.getElementById("confirm");
let errorMsg = document.getElementsByClassName("error");
let successIcon = document.getElementsByClassName("success-icon");
let failureIcon = document.getElementsByClassName("failure-icon");

const signUp = async (email, password, confirm) => {
  try {
    const res = await axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://127.0.0.1:3000/api/v1/user",
      data: {
        email,
        password,
        confirm,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error.response.data);
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  signUp(email.value, password.value, confirm.value);
  engine(email, 0, "UserName Cannot Be Blank");
  engine(passWord, 1, "Password Cannot Be Blank");
  engine(confirm, 2, "Password Cannot Be Blank");
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
