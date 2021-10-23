$(".accordian").click(function() {
  var panel = $(this).next();
  if (panel.css("display") === "block") {
    panel.css("display", "none");
    panel.prev().css("font-weight", "400");
    $(".arrow")
    var arrow_id = panel.prev().children().children().attr("id");
    $("#" + arrow_id).removeClass("rotate");
  } else {
    panel.prev().css("font-weight", "700");
    panel.css("display", "block");
    var arrow_id = panel.prev().children().children().attr("id");
    $("#" + arrow_id).addClass("rotate");
  }
});
