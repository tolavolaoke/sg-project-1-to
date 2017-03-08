// FUNCTION THAT MAKES THE BLOCKS DROPDOWN WHEN START BUTTON IS CLICKED

$('.btn1').click(function(){
  setTimeout(function () {
    $('blocks').addClass('drop-down');
  }, 1000);

function dropdown(element) {
  this.$element = element;
  this.init();
}

Test.prototype.init = function () {
  this.$element.appendTo('.section');
  this.$element.addClass('drop-down');
};
