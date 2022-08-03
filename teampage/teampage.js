if (window.matchMedia("(max-width:738px)").matches) {
  $(document).ready(function () {
    $(".post").click(function () {
      $(".holder").toggle();
    });
  });
  /* The viewport is less than, or equal to, 700 pixels wide */
  $(document).ready(function () {
    $(".adv").click(function () {
      $(".advisers").toggle();
    });
  });
  $(document).ready(function () {
    $(".mark").click(function () {
      $(".market").toggle();
    });
  });
  $(document).ready(function () {
    $(".soc").click(function () {
      $(".social").toggle();
    });
  });
  $(document).ready(function () {
    $(".tech").click(function () {
      $(".technical").toggle();
    });
  });
  $(document).ready(function () {
    $(".eve").click(function () {
      $(".events").toggle();
    });
  });
  $(document).ready(function () {
    $(".lao").click(function () {
      $(".log").toggle();
    });
  });
  $(document).ready(function () {
    $(".ct").click(function () {
      $(".creative").toggle();
    });
  });
  $(document).ready(function () {
    $(".ip").click(function () {
      $(".internal").toggle();
    });
  });
  $(document).ready(function () {
    $(".dt").click(function () {
      $(".design").toggle();
    });
  });
  $(document).ready(function () {
    $(".et").click(function () {
      $(".external").toggle();
    });
  });
}
// $(window).scroll(function () {
//   var theta = ($(window).scrollTop() / 720) % Math.PI;
//   $(".kylogo").css({ transform: "rotate(" + theta + "rad)" });
// });
