const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

$(document).ready(function () {
  $(".links").click(function () {
    $(".icon-burger").click();
  });
});
// if (window.innerHeight < window.innerWidth) {
//   var prevScrollpos = window.pageYOffset;
//   window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("navbar").style.top = "0";
//     } else {
//       document.getElementById("navbar").style.top = "-64px";
//     }
//     prevScrollpos = currentScrollPos;
//   };
// }

// var checkbox = document.querySelector(".links");

// checkbox.addEventListener("change", function () {
//   if (checkbox.checked) {
//     console.log("jldvb paks ,");
//   }
// });

//cliping path
var pos = document.documentElement;
pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--xo", e.offsetX + "px");
  pos.style.setProperty("--yo", e.offsetY + "px");
  //console.log(e);
  console.log(window.innerHeight, window.innerWidth);
});

// For carousel
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 300,
  effect: "fade",
  loop: true,
  mousewheel: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});
setTimeout(function () {
  $(".preloader").fadeToggle();
}, 1500);

// For Laser Cursor
const cursor = document.querySelector("#addclass");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.top = y - 15 + "px";
  cursor.style.left = x - 15 + "px";
  cursor.style.display = "block";
});

document.addEventListener("mouseout", (e) => {
  cursor.style.display = "none";
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
$(document).ready(function () {
  $("#test").hover(function () {
    $("#addclass").toggleClass("cursor");
  });
});
const counters = document.querySelectorAll(".counter");
const speed = 60;
function runCounter() {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute("data-target"));
      const count = parseInt(counter.innerText);

      const inc = Math.trunc(target / speed);

      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 85);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

let counterSection = document.querySelector(".counter");
const sectionObserver = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting) {
    runCounter();
  }
});
sectionObserver.observe(counterSection);
