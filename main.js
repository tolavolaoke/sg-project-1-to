console.log($);
console.log('Java Script Works!');


// ---------------------------Creating the Arrays of objects---------------------------------------------

// Create Array of blue blocks
// Create array of light blue blocks
// Create Random function linked to a animated drop/falling function

//-------------------------- Matching the colours of the falling blocks with thr main block ------------------------

// If the colour of the falling block matches the main block player scores a point.
// Else if it doesn't match post the message 'You loose!' and link to start game.

//----------------  MODAL JS ------------------------------
// Create a bootstrap js modal bar for instructions!
//.........................................................................
//Click rectangle to change colour

var target = document.getElementById('rectangle');
target.addEventListener('click', function () {
  target.style.background = 'blue';
});


//Array
// var blocks = ['blue-block', 'light-blue-block'];
// document.getElementsByClassName('blue-block', 'light-blue-block').innerHTML;
//
// console.log(blocks);

// Dropdown function for the light blue block and blue block jquery----------
$('.btn1').click(function(){
  setTimeout(function () {
    $('.blue-block').addClass('drop-down');
  }, 1000);

  setTimeout(function () {
    $('.light-blue-block').addClass('drop-down');
  }, 2000);

});
