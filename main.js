console.log($);
console.log('Java Script Works!');

//---------------------CANVAS -----------------------------
// var canvas = document.getElementById('canvas');//referencing the canvas element to the canvas variable
// var ctx = canvas.getContext('2d'); //varaible to store the 2D shape (rectangle)
// // The rectangle shape (the main colour changing block)


//---------DRAWING RECTANGLE OBJECT ONTO CANVAS------------

//
// ctx.beginPath();
// ctx.rect(200, 570, 100, 30);//(x- axis, y- axis, width, height of the rectangle block)
// ctx.fillStyle = 'black';
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(235, 0, 30, 80);//(x- axis, y- axis, width, height of the rectangle block)
// ctx.fillStyle = 'blue';
// ctx.fill();
// ctx.closePath();
// ...............................................


// ---------------------------Creating the Arrays of objects---------------------------------------------

// Create Array of blue blocks
// Create array of light blue blocks
// Create Random function linked to a animated drop/falling function

//-------------------------- Matching the colours of the falling blocks with thr main block ------------------------

// If the colour of the falling block matches the main block player scores a point.
// Else if it doesn't match post the message 'You loose!' and link to start game.

//----------------  MODAL JS ------------------------------
// Create a bootstrap js modal bar for instructions!

//Click rectangle to change colour
var target = document.getElementById('rectangle');
target.addEventListener('click', function () {
  target.style.background = 'blue';
});

//Array
// var block []
// int index = new Random().nextInt(someArray.length);
