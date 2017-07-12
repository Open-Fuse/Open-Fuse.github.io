
function postComment() {
  var tempComment = $("#comment").val();
  var tempName = $("#name").val();
  $("body").after("<br><br>" + tempName + " | " + tempComment);
}

function setup()
{
  $("#send_button").click(postComment);
}

$(document).ready(setup)
