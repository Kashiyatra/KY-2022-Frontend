const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    // this is till here
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

var box1 = document.querySelector(".show1");
var box2 = document.querySelector(".show2");
var box3 = document.querySelector(".show3");

var part1 = document.getElementById("basic");
var part2 = document.getElementById("accomodation");
var part3 = document.getElementById("others");

window.onload = function () {
  part2.style.display = "none";
  part3.style.display = "none";
};

// style.textDecoration = "underline";

function show1() {
  // if (part2.style.display == "block") {
  part2.style.display = "none";
  // } else {
  //   part2.style.display = "none";
  // }
  // if (part3.style.display == "block") {
  part3.style.display = "none";
  // } else {
  //   part3.style.display = "none";
  // }
  // if (part1.style.display == "none") {
  part1.style.display = "block";
  // } else {
  //   part1.style.display = "block";
  // }
  box1.classList.add("active");
  box2.classList.remove("active");
  box3.classList.remove("active");
}
function show2() {
  // if (part1.style.display == "block") {
  part1.style.display = "none";
  // } else {
  //   part1.style.display = "none";
  // }
  // if (part3.style.display == "block") {
  part3.style.display = "none";
  // } else {
  //   part3.style.display = "none";
  // }
  // if (part2.style.display == "none") {
  //   part2.style.display = "block";
  // } else {
  part2.style.display = "block";
  // }
  box2.classList.add("active");
  box1.classList.remove("active");
  box3.classList.remove("active");
}
function show3() {
  // if (part2.style.display == "block") {
  part2.style.display = "none";
  // } else {
  //   part2.style.display = "none";
  // }
  // if (part1.style.display == "block") {
  part1.style.display = "none";
  // } else {
  //   part1.style.display = "none";
  // }
  // if (part3.style.display == "none") {
  part3.style.display = "block";
  // } else {
  //   part3.style.display = "block";
  // }
  box3.classList.add("active");
  box2.classList.remove("active");
  box1.classList.remove("active");
}
