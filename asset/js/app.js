$("ul").on("click", "li", function(){
  $(this).toggleClass('completed');
})

$("ul").on("click", "span", function(event) {
  /* Act on the event */
  $(this).parent().fadeOut(1200, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on('keypress', function(e) {
  if (e.which === 13) {
    let todoText = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash fa-lg'></i></span> " + todoText + "</li>");
    $(this).val("");
  }
});

$("#show-todo").on('click', function() {
  $("#todo").fadeToggle(1200);
});
