"use strict";
// Tab Component
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      const targetTabId = event.target.getAttribute("href").substring(1);

      // Hide all content divs
      const contentDivs = tab.parentElement.querySelectorAll(".tab-content");
      contentDivs.forEach((div) => {
        div.style.display = "none";
      });

      // Show the selected content div
      const targetTab = document.getElementById(targetTabId);
      targetTab.style.display = "block";

      const tabItems = tab.querySelectorAll("li");
      tabItems.forEach((item) => {
        item.classList.remove("is-active");
      });
      event.target.parentElement.classList.add("is-active");
    });
  });
});

// Reveal Section On Scroll
const allSection = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// Navbar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.offsetHeight + 100) {
    navbar.classList.add("is-active");
  } else {
    navbar.classList.remove("is-active");
  }
});

// slideshow
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 1;

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (window.innerWidth >= 768) {
      slides[slideIndex - 1].style.display = "flex";
    } else {
      slides[slideIndex - 1].style.display = "block";
    }
  }

  showSlides(slideIndex);

  // Next/Prev
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
  });

  document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
  });

  // Update display style on window resize
  window.addEventListener("resize", function () {
    showSlides(slideIndex);
  });
});

// NavBar
const navBurger = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector(".navbar-menu");

navBurger.addEventListener("click", function () {
  navbarMenu.classList.toggle("is-active");
});

// Translate Imagge
const rightTranslate = document.querySelector(".rightTranslate");
const infoImages = document.querySelector(".info-images");
const leftTranslate = document.querySelector(".leftTranslate");
rightTranslate.addEventListener("click", function () {
  infoImages.classList.add("reveal-overflow");
});
leftTranslate.addEventListener("click", function () {
  infoImages.classList.remove("reveal-overflow");
});
