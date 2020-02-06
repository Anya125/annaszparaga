// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu-nav");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("collapsed");

  // tutaj kasuje zielone tlo na kompach
  const curImage = document.getElementById("newHeaderBG").style.backgroundImage;

  if (curImage === 'url("img/gradient.jpg")') {
    document.getElementById("newHeaderBG").style.backgroundImage = "";
  } else {
    document.getElementById("newHeaderBG").style.backgroundImage = 'url("img/gradient.jpg")';
  }
});