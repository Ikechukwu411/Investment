"use strict";

const navbarBurger = document.querySelector(".navbar-burger");
const navMenu = document.querySelector(".navbar-menu");
const transferModal = document.querySelector(".transferModal");
// const depositModal = document.querySelector(".depositModal");
const transferCancel = document.querySelector(".transferCancel");
// const depositCancel = document.querySelector(".depositCancel");
const transferContainer = document.querySelector(".transferContainer");
const depositContainer = document.querySelector(".depositContainer");
const transfer = document.querySelector(".transfer");
// const deposit = document.querySelector(".deposit");
const text = document.getElementById("text-to-copy").innerText.trim();
const copy = document.querySelector(".fa-copy");

navbarBurger.addEventListener("click", function () {
  navMenu.classList.toggle("is-active");
});

transfer.addEventListener("click", () => {
  transferModal.classList.remove("hidden");
  transferContainer.classList.remove("hidden");
  transferCancel.classList.remove("hidden");
});
deposit.addEventListener("click", () => {
  depositModal.classList.remove("hidden");
  depositContainer.classList.remove("hidden");
  depositCancel.classList.remove("hidden");
});
transferCancel.addEventListener("click", () => {
  transferModal.classList.add("hidden");
  transferContainer.classList.add("hidden");
  transferCancel.classList.add("hidden");
});
depositCancel.addEventListener("click", () => {
  depositModal.classList.add("hidden");
  depositContainer.classList.add("hidden");
  depositCancel.classList.add("hidden");
});
transferModal.addEventListener("click", () => {
  transferModal.classList.add("hidden");
  transferContainer.classList.add("hidden");
  transferCancel.classList.add("hidden");
});
depositModal.addEventListener("click", () => {
  depositModal.classList.add("hidden");
  depositContainer.classList.add("hidden");
  depositCancel.classList.add("hidden");
});

function copyText() {
  var input = document.createElement("input");
  input.setAttribute("value", text);
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(input);
  alert("Copied!");
}
copy.addEventListener("click", copyText);
// function copyText() {
//   input.setAttribute("value", text);
//   document.body.appendChild(input);
//   input.select();
//   input.setSelectionRange(0, 99999);
//   document.execCommand("copy");

//   document.body.removeChild(input);

//   alert("Copied!");
// }
// copyIcon.addEventListener("click", copyText);

// deposit.addEventListener("click", () => {
//   depositModal.classList.remove("hidden");
//   depositContent.classList.remove("hidden");
//   Depositcancel.classList.remove("hidden");
// });
// Depositcancel.addEventListener("click", () => {
//   depositModal.classList.add("hidden");
//   depositContent.classList.add("hidden");
//   Depositcancel.classList.add("hidden");
// });
// depositModal.addEventListener("click", () => {
//   depositModal.classList.add("hidden");
//   depositContent.classList.add("hidden");
//   Depositcancel.classList.add("hidden");
// });

// Calender
// const daysTag = document.querySelector(".days");
// const currentDate = document.querySelector(".current-date");
// const prevNextIcon = document.querySelectorAll(".icons span");

// let date = new Date();
// let currentYear = date.getFullYear();
// let currentMonth = date.getMonth();

// Storing Months in Array
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const renderCalender = () => {
//   let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(); // getting first day of month
//   let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // getting last date of month
//   let lastDayofMonth = new Date(
//     currentYear,
//     currentMonth,
//     lastDateofMonth
//   ).getDay(); // getting last day of month
//   let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate(); // getting last date of previous month
//   let liTag = "";

//   for (let i = firstDayofMonth; i > 0; i--) {
//     // creating li of previous month last days
//     liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
//   }
//   for (let i = 1; i <= lastDateofMonth; i++) {
//     // creating li of all days of current month
//     // adding active class to li if the current day, month, and year matched
//     let isToday =
//       i === date.getDate() &&
//       currentMonth === new Date().getMonth() &&
//       currentYear === new Date().getFullYear()
//         ? "active"
//         : "";
//     liTag += `<li class="${isToday}">${i}</li>`;
//   }
//   for (let i = lastDayofMonth; i < 6; i++) {
//     // creating li of next month first days
//     liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
//   }
//   currentDate.innerText = `${months[currentMonth]} ${currentYear}`; // passing current mon and yr as currentDate text
//   daysTag.innerHTML = liTag;
// };
// renderCalender();

// prevNextIcon.forEach((icons) => {
//   icons.addEventListener("click", () => {
//     currentMonth = icons.id === "prev" ? currentMonth - 1 : currentMonth + 1;
//     if (currentMonth < 0 || currentMonth > 11) {
//       date = new Date(currentYear, currentMonth, new Date().getDate());
//       currentYear = date.getFullYear(); // updating current year with new date year
//       currentMonth = date.getMonth();
//     } else {
//       date = new Date();
//     }
//     renderCalender();
//   });
// });
const coinImage = [
  "https://assets.coincap.io/assets/icons/btc@2x.png",
  "https://assets.coincap.io/assets/icons/eth@2x.png",
  "https://assets.coincap.io/assets/icons/usdt@2x.png",
  "https://assets.coincap.io/assets/icons/bnb@2x.png",
  "https://assets.coincap.io/assets/icons/xrp@2x.png",
  "https://assets.coincap.io/assets/icons/usdc@2x.png",
  "https://assets.coincap.io/assets/icons/sol@2x.png",
  "https://assets.coincap.io/assets/icons/ada@2x.png",
  "https://assets.coincap.io/assets/icons/doge@2x.png",
  "https://assets.coincap.io/assets/icons/trx@2x.png",
];

function formatNumber(number) {
  return parseFloat(number).toFixed(0);
}
fetch("https://api.coincap.io/v2/assets/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const topAssets = data.data.slice(0, 10);
    const tableBody = document.getElementById("assetTableBody");
    topAssets.forEach((asset, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${asset.rank}</td>
           
            <td><img src="${coinImage[i]}" alt="${asset.name}" width="20px">${
        asset.name
      } (${asset.symbol})</td>
            <td>${formatNumber(asset.priceUsd)}$</td>
            <td class="is-hidden-mobile">${formatNumber(asset.supply)}</td>
           
            <td class="is-hidden-mobile">${formatNumber(
              asset.marketCapUsd
            )}</td>
          `;
      tableBody.appendChild(row);
    });
  });

function populateBottomNav() {
  fetch("https://api.coincap.io/v2/assets/")
    .then((response) => response.json())
    .then((data) => {
      const topAssets = data.data.slice(0, 10);
      const bottomNav = document.getElementById("bottomNav");
      bottomNav.innerHTML = "";

      topAssets.forEach((asset, i) => {
        const navItem = document.createElement("div");
        navItem.classList.add("nav-item");
        navItem.innerHTML = `
            <img src="${coinImage[i]}" alt="${asset.name}" style="width: 30px; height: 30px; margin-right: 5px;">
            ${asset.name}
          `;
        bottomNav.appendChild(navItem);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}
populateBottomNav();
setInterval(populateBottomNav, 5 * 60 * 1000);
