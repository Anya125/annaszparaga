// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu-nav");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("collapsed");
  // Do something else, like open/close menu
});


// function addBGimg() {
//   document.getElementById("newHeaderBG").style.backgroundImage = "url('img/gradient.jpg')";
// }


var button = document.querySelector("#newHeaderBG");

button.addEventListener("click", function () {
  const curImage = document.getElementById("newHeaderBG").style.backgroundImage;

  console.log(curImage);

  if (curImage === 'url("img/gradient.jpg")') {
    document.getElementById("newHeaderBG").style.backgroundImage = "";
  } else {
    document.getElementById("newHeaderBG").style.backgroundImage = 'url("img/gradient.jpg")';
  }
});