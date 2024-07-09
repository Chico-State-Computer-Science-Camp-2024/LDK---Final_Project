
let Y = 200;
let X = 200;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  square(X, Y, 20);
  
  if (keyIsPressed) {
    if(key === "a"){
      X -= 5;
    } else if (key === "d"){
      X += 5;
    } else if (key === "w"){
      Y -= 5;
    } else if (key === "s"){
      Y += 5;
    }
  }
}
