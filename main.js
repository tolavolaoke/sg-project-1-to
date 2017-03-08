console.log($);
console.log('Java Script Works!');

// FUNCTION THAT MAKES THE BLOCKS DROPDOWN WHEN START BUTTON IS CLICKED
$('.btn1').click(function(){
  setTimeout(function () {
    $('.blue-block').addClass('drop-down');
  }, 500);

  setTimeout(function () {
    $('.light-blue-block').addClass('drop-down');
  }, 1000);

});







// TEST-------------------------------------------------
// var block1 = new dropdown($('<div class="blue-block"></div>'));
// var block2 = new dropdown($('<div class="light-blue-block"></div>'));
// var block3 = new dropdown($('<div class="blue-block2"></div>'));
// var block4 = new dropdown($('<div class="light-blue-block2"></div>'));
// var block5 = new dropdown($('<div class="blue-block3"></div>'));
// var block6 = new dropdown($('<div class="light-blue-block3"></div>'));
// var blocks = [block1, block2, block3, block4, block5, block6];

// setTimeout(function(target){
