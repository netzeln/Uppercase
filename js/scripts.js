$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var textTypeInput = $("input#textType").val().toUpperCase();


    $(".textType").text(textTypeInput);
    $("#yellText").show();

    event.preventDefault();
  });
});
