console.log($);
console.log('Java Script Works!');

//---------CANVAS AND DRAWING OBJECT---------------------
var canvas = document.getElementById('canvas');//referencing the canvas element to the canvas variable
var ctx = canvas.getContext('2d'); //varaible to store the 2D shape (rectangle)
// The rectangle shape (the main colour changing block)
ctx.beginPath();
ctx.rect(200, 570, 100, 30);//(x- axis, y- axis, width, height of the rectangle block)
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();
