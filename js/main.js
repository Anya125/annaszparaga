let url = new URL(window.location.href);
let contactFormSent = url.searchParams.get("contact_form_sent");
if (contactFormSent) {
  let btnSubmit = document.getElementById("btn-submit");
  btnSubmit.innerHTML = "Thank you for your message!";
}

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
    document.getElementById("newHeaderBG").style.backgroundImage =
      'url("img/gradient.jpg")';
  }
});

//Testimonials

$(".testimonials").slick({
  dots: true,
  arrows: false,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});