var scroll_distance = 850;
var transparent = true;
document.addEventListener("scroll", function() {
  if ($(document).scrollTop() > scroll_distance) {
    if (transparent) {
      transparent = false;
      $('.the_navigator').addClass('changeColor');
      $('.the_navigator').addClass('addPaddings');
    }
  } else {
    if (!transparent) {
      transparent = true;
      $('.the_navigator').removeClass('changeColor');
      $('.the_navigator').removeClass('addPaddings');
    }
  }
});