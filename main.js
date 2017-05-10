
// To reload after clicking the endGameBtn
$('.endGameBtn').click(function() {
  document.location.assign('file:///Users/Tech-A23/Development/sg-project-1-to/start.html');
});




console.log('It works! Fabulous!');
console.log($);

// source: http://stackoverflow.com/a/4550514
// CREATES ARRAY AND RANDOMIZES THE ORDER OF THE ELEMENTS
function selectRandomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function that will add multiple falling blocks
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
  var $randomBlocks = []; // an empty array where the new random blocks will be created
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
      }, 100); // Every 100 milliseconds the positions of the falling blocks will be checked

    }, intervalBetweenBlockDrops * (i+1));
  });
});
// A function to detect when the base block and the falling blocks have touched.
function collisionDetected ($el) {
  console.log('we have a collision!');// Will print out 'we have a collision' To test the function in JavaScript
  $el.fadeOut(); // The falling block will fade when in contact with the base block
}

function checkCollision (randomOffsetTop) { // Function to check if there is collision
  console.log('checking offset....');
  return randomOffsetTop === 563; //The position where the base block and falling block meets
}
