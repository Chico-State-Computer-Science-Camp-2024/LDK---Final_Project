var X = 200;
var Y = 200;

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





/*if (keyCode == RIGHT_ARROW) {
    X +=5; 
   }  else if (keyCode == LEFT_ARROW) {
     X -= 5;
   } else if (keyCode == UP_ARROW) {
     Y -= 5; 
   } else if (keyCode == DOWN_ARROW) {
     Y +=5; 
   }
  } */