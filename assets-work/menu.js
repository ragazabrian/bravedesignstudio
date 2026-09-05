
$(function () {
   $(".menu-open").click(function (event) {
       event.stopPropagation();
       $("body").toggleClass("no-scroll");
       $(".menu-button").toggleClass("active");
       $(".hamburger-menu").toggleClass("active");
   });
 });
 
 //Esc
 $(document).keydown(function (e) {
   if (e.keyCode == 27) {
    $(".menu-button").removeClass("active");
    $(".hamburger-menu").removeClass("active");
    $("body").toggleClass("no-scroll");
   }
 });

 $(document).ready(function () {
  if ($(window).width() > 1024) {
    $(function () {
      var header = $("header");

      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
          header.addClass("scrolled");
        } else {
          header.removeClass("scrolled");
        }
      });
    });

    'use strict';
    var c, currentScrollTop = 0,
        navbar = $('header');

    $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();

      currentScrollTop = a;

      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const langButton = document.querySelector(".lang-button");
  const langItem = langButton.querySelector(".lang-item");
  const langMenu = langButton.querySelector(".select-lang-menu");
  const langName = langItem.querySelector("span");

  langItem.addEventListener("click", (e) => {
    e.stopPropagation();
    langButton.classList.toggle("active");
  });

  langMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const currentLang = langName.textContent;
      const newLang = e.target.textContent;

      langName.textContent = newLang;

      const newLi = document.createElement("li");
      newLi.textContent = currentLang;
      langMenu.appendChild(newLi);

      e.target.remove();
      langButton.classList.remove("active");
    }
  });

  document.addEventListener("click", () => {
    langButton.classList.remove("active");
  });

  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    langButton.classList.remove("active");
  });
});

//Menu
const menuopen = document.querySelector(".menu-open");
const menu = document.querySelector(".menu-content");
const menuitem = menu.querySelectorAll(".menu-content .menu ul li a");
const bottommenu = menu.querySelectorAll(".menu-content .bottom a");
const icon = menu.querySelectorAll(".main-menu .icon img");

var tl = gsap.timeline({ paused: true });

// Menü açılışı animasyonu
tl.to(menu, {
  duration: 1,
  opacity: 1,
  top: "0",
  ease: "expo.inOut",
  visibility: "visible",
  willChange: "transform",
})
.from([menuitem, bottommenu, icon], {
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  y: 320,
  stagger: 0.1,
  willChange: "transform",
}, "-=0.1");

// Header Items
tl.to("header .logo svg", {
  fill: "#fff",
}, 0);
tl.to("header .text", {
  color: "#fff",
}, 0);
tl.to("header .right .button", {
  color: "#fff",
  borderColor: "#fff"
}, 0);
tl.to("header .time-zone-items", {
  color: "#fff",
}, 0);
tl.to(".menu-button .lines .line", {
  backgroundColor: "#fff",
}, 0);
tl.to(".select-lang span", {
  color: "#fff"
}, 0);
tl.to(".select-lang svg", {
  fill: "#fff",
}, 0);

let isMenuOpen = false;

menuopen.addEventListener("click", () => {
  if (!isMenuOpen) {
    tl.play();
    isMenuOpen = true;
  } else {
    tl.reverse();
    isMenuOpen = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isMenuOpen) {
    tl.reverse();
    isMenuOpen = false;
  }
});

// Menü kapanırken inline CSS değiştirilmesin
tl.eventCallback("onReverseComplete", () => {
  menu.removeAttribute("style");
});
