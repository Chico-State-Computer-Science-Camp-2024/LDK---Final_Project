let Y = 200;
let X = 23;
let gridWidth = 30;
let gridHeight = 30;
let startDi = "right";
let direction = startDi;
let snakeSeg = [];
let startSeg = 10;
let canvasWidth = 500;
let canvasHeight = 500;

function setup() { 
  createCanvas(canvasHeight, canvasWidth);

  noLoop();
} 

function draw() { 
  background(0);
  square(X, Y, 20);
  
  X += 3;
  Y += 2;

  if (keyIsPressed) {
    if(key === "a"){
      X -= 3;
    } else if (key === "d"){
      X += 3;
    } else if (key === "w"){
      Y -= 3;
    } else if (key === "s"){
      Y += 3;
    } 
  }

 collision();
}


function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function start(){

  snakeSeg = [];

  for (let x = X; x < X + startSeg; x += 1) {
    // Create a new vector at the current position
    let segmentPos = createVector(x, Y);

    // Add it to the beginning of the array
    snakeSeg.unshift(segmentPos);
  }

  direction = startDi;
  score = 0;
 // gameStarted = true;
  loop();

}

function collision(){
  if(X > width + 23){
    X = -23
  } 
   if (Y > width + 23) {
    Y = -23;
   } 
   
  
   }
  

function Fruit() {
  stroke(255, 64, 32);
  point(fruit.x, fruit.y); 
}



/*
function frute() {
  fill(56, 12,9)
  square(200,200, 20)
if (y > width + 25) {
    x = random(0, canvasWidth-Width);
    y = random(0, canvasWidth-Width);
    y = -25;
  }
}
  */