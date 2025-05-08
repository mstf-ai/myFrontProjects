var myCanvas = document.getElementById('c'),
myContext = myCanvas.getContext('2d');

myCanvasWidth = myCanvas.width,
myCanvasHeight = myCanvas.height;
    
    myContext.fillStyle = '#000'; // Fill Color
    
// ------------------------------------

myContext.fillRect(0, 0, myCanvasWidth, myCanvasHeight); // Rectangle filled inside Canvas

// myContext.strokeStyle = '#f00';

// myContext.lineWidth = 5;

// // Top left line

// myContext.moveTo(10, 10);

// myContext.lineTo(180, 180);

// // Top right line

// myContext.moveTo(390, 10);

// myContext.lineTo(220, 180);

// // Bottom left line

// myContext.moveTo(10, 390);

// myContext.lineTo(180, 220);

// // Bottom right line

// myContext.moveTo(390, 390);

// myContext.lineTo(220, 220);

// myContext.stroke();

myContext.font = '20px Arial';

myContext.fillStyle = '#f00';

myContext.fillText('M', 50, 200);

myContext.fillStyle = '#ff0';

myContext.fillText('O', 80, 200);

myContext.fillStyle = '#0f0';

myContext.fillText('S', 110, 200);

myContext.fillStyle = '#0ff';

myContext.fillText('T', 140, 200);

myContext.fillStyle = '#00f';

myContext.fillText('A', 170, 200);

myContext.fillStyle = '#fff';

myContext.fillText('F', 200, 200);

myContext.fillStyle = '#f0f';

myContext.fillText('A', 230, 200);

myContext.fillStyle = '#aaa';

myContext.fillText('300 x 300', 110, 150);

// // // // // //
