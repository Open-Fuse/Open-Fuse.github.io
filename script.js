//var slideIndex = 1;
//showSlides(slideIndex);

function postComment() {
  var tempComment = $("#comment").val();
  var tempName = $("#name").val();
  $(".commentContent").append("<br><br>" + tempComment);
  $(".commentName").append("<br><br>" + tempName);
  console.log("Comment posted")
}
function setup()
{
  $("#send_button").click(postComment);
}
/*
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/
$(document).ready(setup)
