// FUNCTION THAT DETECTS IF THE ELEMENTS TOUCH/COLLIDE

var pos = $('.section').position();
console.dir(pos);




function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}

function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var box = $('rectangle')[0];
  var pos = getPositions(box);

  var pos2 = getPositions(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;
  if (match) { $('section').append('<p>COLLISION !!!</p>'); }
}














// var overlaps = (function () {
//   function getPositions( blocks ) {
//     var pos, width, height;
//     pos = $( blocks ).position();
//     width = $( blocks ).width();
//     height = $( blocks ).height();
//     return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
//   }
//
//   function comparePositions( p1, p2 ) {
//     var rect1, rect2;
//     rect1 = p1[0] < p2[0] ? p1 : p2;
//     rect2 = p1[0] < p2[0] ? p2 : p1;
//     return rect1[1] > rect2[0] || rect1[0] === rect2[0];
//   }
//
//   return function ( a, b ) {
//     var pos1 = getPositions( a ),
//       pos2 = getPositions( b );
//     return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
//   };
// })();
//
// $(function () {
//   var area = $( '#area' )[0],
//     box = $( '#box0' )[0],
//     html;
//
//   html = $( area ).children().not( box ).map( function ( i ) {
//     return '<p>Red box + Box ' + ( i + 1 ) + ' = ' + overlaps( box, this ) + '</p>';
//   }).get().join( '' );
//
//   $( 'section' ).append( html );
// });
// ----------------------------------------------------------------------------







// console.log(isOverlap('#rectangle','.blue-block'));//true
// console.log(isOverlap('#rectangle','light-blue-block'));//false
// console.log(isOverlap('.blue-block','light-blue-block'));//true
//
// var overlap = isOverlap('#rectangle','.blue-block');
//
// if (overlap) {
//  $('.blue-block','.light-blue-block').hide();// Do something when elements are overlapping
// } else {
//  // Do something when elements are not overlapping
// }
//
// $("#result").text(isOverlap('#rectangle','.blue-block')+","+isOverlap('#rectangle','.light-blue-block');
//
// function isOverlap(idOne,idTwo){
//         var objOne=$(idOne),
//             objTwo=$(idTwo),
//             offsetOne = objOne.offset(),
//             offsetTwo = objTwo.offset(),
//             topOne=offsetOne.top,
//             topTwo=offsetTwo.top,
//             leftOne=offsetOne.left,
//             leftTwo=offsetTwo.left,
//             widthOne = objOne.width(),
//             widthTwo = objTwo.width(),
//             heightOne = objOne.height(),
//             heightTwo = objTwo.height();
//         var leftTop = leftTwo > leftOne && leftTwo <
//         leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,             rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
//         return leftTop || rightTop || leftBottom || rightBottom;
// }
// ------------------------------------------------------------------------------



// function getPositions(box) {
//   var $box = $(box);
//   var pos = $box.position();
//   var width = $box.width();
//   var height = $box.height();
//   return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
// }
//
// function comparePositions(p1, p2) {
//   var x1 = p1[0] < p2[0] ? p1 : p2;
//   var x2 = p1[0] < p2[0] ? p2 : p1;
//   return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
// }
//
// function checkCollisions(){
//   var box = $('rectangle')[0];
//   var pos = getPositions(box);
//
//   var pos2 = getPositions(this);
//   var horizontalMatch = comparePositions(pos[0], pos2[0]);
//   var verticalMatch = comparePositions(pos[1], pos2[1]);
//   var match = horizontalMatch && verticalMatch;
//   if (match) { $('section').append("<p>COLLISION !!!</p>"); }
// }


// -----------------------------------------------------------------------

// var rect1 = {x: 5, y: 5, width: 50, height: 50};
// var rect2 = {x: 20, y: 10, width: 10, height: 10};
//
// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.height + rect1.y > rect2.y) {
//     // collision detected!
// }
//
// // filling in the values =>
//
// if (5 < 30 &&
//     55 > 20 &&
//     5 < 20 &&
//     55 > 10) {
//     // collision detected!
// }
// this.color("green");
// } else {
//   // no collision
//   this.color("blue");
// }
// });
