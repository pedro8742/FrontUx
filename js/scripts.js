$(document).ready(function () {
  $("#toggleButton").click(function () {
    $("#menu").toggle();
  });
});

$(document).ready(function () {
  $("#fontButton").click(function () {
    $("body").toggleClass("font-large");
    $("header").toggleClass("font-large");
    $(".containerCima .header-inner2 i").toggleClass("font-large");
    $(".containerCima .header-inner2 button").toggleClass("font-large");
    $(".containerBaixo a").toggleClass("font-large");
  });
});

$(document).ready(function () {
  $("#darkMode").click(function () {
    $("body").toggleClass("dark-mode");
  });
});
