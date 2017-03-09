// FUNCTION THAT DETECTS IF THE ELEMENTS TOUCH/COLLIDE

function myFunction() {
  setInterval(function(){
    document.getElementById('blue-block').hide();
  }, 1000);
}






//source:https://www.sitepoint.com/jquery-coordinates-element/
// To find the current postion of the section relative to the offset parent using the position method.

// function collidesWith ('#rectangle', '.blue-block') {
//   var Element1 = {document.getElementById'rectangle'};
//   var Element2 = {document.getElementByClassName'blue-block'};
//
//   Element1.top = $(element1).offset().top;
//   Element1.left = $(element1).offset().left;
//   Element1.right = Number($(element1).offset().left) + Number($(element1).width());
//   Element1.bottom = Number($(element1).offset().top) + Number($(element1).height());
//
//   Element2.top = $(element2).offset().top;
//   Element2.left = $(element2).offset().left;
//   Element2.right = Number($(element2).offset().left) + Number($(element2).width());
//   Element2.bottom = Number($(element2).offset().top) + Number($(element2).height());
//
//  if (Element1.right > Element2.left && Element1.left < Element2.right && Element1.top < Element2.bottom && Element1.bottom > Element2.top) {
//       // Do your stuff here
//   }






//---------------------------------------------------------------------
//
// var pos = $('#rectangle').position();
// console.dir(pos);
// //Result left: 0 right: 157
//
// // To find the current position of the section relative to the document using the offset method.
// var offset = $('#rectangle').offset();
// console.dir(offset);
// //Result: left: 140, top: 157
//
// // Offset method to retrieve the co ordinates
// var elem = $('.blue-block');
// var x = $('.blue-block').offset().left;
// var y = $('.blue-block').offset().top;
// console.log('x: ' + x + ' y: ' + y);
// //Result x: 140 y: 157
//
//
// var rectangle = {x: 140, y: 157, width: 100, height: 50};
// var blueBlock = {x: 5, y: 5, width: 50, height: 50};
// var lightBlueBlock = {x: 5, y: 5, width: 50, height: 50};
