console.log($);
console.log('Java Script Works!');

// source: http://stackoverflow.com/a/4550514
// CREATES ARRAY AND RANDOMIZES THE ORDER OF THE ELEMENTS
function selectRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function addRandomBlock() {
  var blockTypeClasses = ['blue-block', 'light-blue-block'];
  var randomBlockTypeClass = selectRandomArrayElement(blockTypeClasses);
  var $block = $('<div class="' + randomBlockTypeClass + '"></div>');
  var $blockContainer = $('#block-container');

  $blockContainer.append($block);

  return $block;
}

//FUNCTION THAT MAKES THE BLOCKS FALL/DROPDOWN WHEN START BUTTON IS CLICKED
$('.startBtn').click(function(){

  // var intervalID = window.setInterval(checkCollisions, 100);

  var numberOfBlocks = 20; // total number of blocks in the loop
  var $randomBlocks = [];
  var intervalBetweenBlockDrops = 1000; // milliseconds


  for (var i = 1 ; i <= numberOfBlocks ; i++) {
    $randomBlocks.push(addRandomBlock());
  }
  $randomBlocks.forEach(function ($randomBlock, i) {
    setTimeout(function () {


      $randomBlock.addClass('drop-down');
      var intervalID = window.setInterval(function () {
        var hasCollided = checkCollision($randomBlock.offset().top);
        if (hasCollided) {
          window.clearInterval(intervalID);
          collisionDetected($randomBlock);
        }
      }, 100);


    }, intervalBetweenBlockDrops * (i+1));
  });
});

function collisionDetected ($el) {
  console.log('we have a collision!');
  $el.fadeOut();
}
function checkCollision (randomOffsetTop) {
  console.log('checking offset....');
  // console.log(baseOffset)
  // console.log(randomOffsetTop)
  // console.log()
  return randomOffsetTop === 608;

}
