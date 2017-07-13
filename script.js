
function postComment() {
  var tempComment = $("#comment").val();
  var tempName = $("#name").val();
  $(".commentBox").append("<br><br>" + tempName + " | " + tempComment);
}

function activePage() {
  $(".activePage").toggleClass(".activeLink");
}

function setup()
{
  $("#send_button").click(postComment);
  $(".navigation").click(activePage);
}

$(document).ready(setup)
