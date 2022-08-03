const data = [
  [
    {
      img: "https://picsum.photos/600/600?random=6",
      title: "YOYO",
      desc: "loremakdajdnjkab djkab djknajkdajdajd",
    },
    {
      img: "https://picsum.photos/600/600?random=6",
      title: "YOYO",
      desc: "loremakdajdnjkab djkab djknajkdajdajd",
    },
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
// modal
// Modal Setup
var modal = document.getElementById("modal");
var imgGrid = document.getElementById("img-grid");
var modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", function () {
  modal.style.display = "none";
  const body = document.body;
  body.style.position = "";
  body.style.top = "";
});

// global handler
document.addEventListener("click", function (e) {
  if (e.target.className.indexOf("modal-target") !== -1) {
    var img = e.target;
    var modalImg = document.getElementById("modal-content");

    var captionText = document.getElementById("modal-caption");
    var captionTitle = document.getElementById("modal-title");
    var subEvent = document.getElementById("sub-event");
    var subTilte = document.getElementById("sub-tilte");
    const body = document.body;
    console.log(data[Number(img.dataset.key)]);
    if (data[Number(img.dataset.key)].length > 0) {
      subTilte.textContent = "SUB EVENTS";
    } else {
      subTilte.textContent = "";
    }
    const subX = data[Number(img.dataset.key)].map((item) => {
      return `<div >
      <img src=${item.img} class=" xx" />
      <h1 class=" p-2 text-2xl lg:p-5">${item.title}</h1>
      <h1 class="text-sm py-2 md:text-base">${item.desc}</h1>
    </div>`;
    });

    console.log(subX);
    subEvent.innerHTML = "";
    subX.forEach((item) => {
      subEvent.innerHTML += item;
    });

    body.style.position = "fixed";
    captionTitle.textContent = img.dataset.title;
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }
});
