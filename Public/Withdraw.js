"use strict";
const Transfer = document.getElementById("Transfer");
const Thankyou = document.querySelector(".thankYou");
const ok = document.querySelector("#ok");

Transfer.addEventListener("click", () => {
  Thankyou.classList.add("thankyouReveal");
});

ok.addEventListener("click", () => {
  Thankyou.classList.remove("thankyouReveal");
});
