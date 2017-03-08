// CLICK FUNCTION AND TOGGLE TO CHANGE COLOUR

// var target = document.getElementById('rectangle');
// target.addEventListener('click', function () {
//   target.style.background = 'blue';
// });

$( '#rectangle' ).click(function() {
  if($(this).hasClass('blue')){
    $(this).removeClass('blue');
  }else{
    $(this).addClass('blue');
  }
});
