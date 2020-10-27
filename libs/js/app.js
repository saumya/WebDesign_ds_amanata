// 
// @version : 1.0.0
// Application Entry
//

// JQuery: Ready : https://api.jquery.com/ready/
$(function(){
  console.log('ready!');
  // index.html
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function(){
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  })
  // index.html /
  // Portfolio.html
  $("#btn_left").on('click', function(){
    console.log('Left');
    return false;
  });
  $("#btn_right").on('click', function(){
    console.log('Right');
    return false;
  });
  // Portfolio.html /
})