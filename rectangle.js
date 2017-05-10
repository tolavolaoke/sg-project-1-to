// CLICK FUNCTION AND TOGGLE TO CHANGE COLOUR

$( '#rectangle' ).click(function() {
  if($(this).hasClass('blue')){
    $(this).removeClass('blue');
  }else{
    $(this).addClass('blue'); // Adds class called blue to the rectangle id placed in html which will allow it to change colour.
  }
});
