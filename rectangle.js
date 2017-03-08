// CLICK FUNCTION AND TOGGLE TO CHANGE COLOUR


$( '#rectangle' ).click(function() {
  if($(this).hasClass('blue')){
    $(this).removeClass('blue');
  }else{
    $(this).addClass('blue');
  }
});
