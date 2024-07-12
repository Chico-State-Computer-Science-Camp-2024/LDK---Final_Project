// const gameBoard = document.querySelector("#gameBoard");
// const ctx = gameBoard.getContext("2d");
// const scoreText = document.querySelector("#scoreText");
// const resetButton = document.querySelector("#resetButton");
// const gameWidth = gameBoard.width;
// const gameHeight = gameBoard.height;
// const boardBackground = "white";
// const snakeColor = "lightgreen";
// const snakeBorder = "black";
// const foodColor = "red";
// const unitSize = 24;
// let bg;
// let running = false;
// let xVelocity = unitSize;
// let yVelocity = 0;
// let foodX;
// let foodY;
// let score = 0;
// let snake = [
//   { x: unitSize * 4, y: 0 },
//   { x: unitSize * 3, y: 0 },
//   { x: unitSize * 2, y: 0 },
//   { x: 0, y: 0 },
// ];

// window.addEventListener("keydown", changeDirection);
// resetButton.addEventListener("click", resetGame);



// function preload(){
//     bg = loadImage("https://wallpaperbat.com/img/361132-free-download-beautiful-jungle-hd-wallpaper-hd-wallpaper.jpg")
// }

// function setup() {
//     createCanvas(600,400)
// }

// function draw() {
//     background(bg)
// }

// gameStart();

// function gameStart() {
//   running = true;
//   scoreText.textContent = score;
//   createFood();
//   drawFood();
//   nextTick();
// }

// function nextTick() {
//   if (running) {
//     setTimeout(() => {
//       clearBoard();
//       drawFood();
//       moveSnake();
//       drawSnake();
//       checkGameOver();
//       nextTick();
//     }, 100);
//   } else {
//     displayGameOver();
//   }
// }

// function clearBoard() {
//   ctx.fillStyle = boardBackground;
//   ctx.fillRect(0, 0, gameWidth, gameHeight);
// }

// function createFood() {
//   function randomFood(min, max) {
//     const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
//     return randNum;
//   }
//   foodX = randomFood(0, gameWidth - unitSize);
//   foodY = randomFood(0, gameHeight - unitSize);
// }

// function drawFood() {
//   ctx.fillStyle = foodColor;
//   ctx.fillRect(foodX, foodY, unitSize, unitSize);
// }

// function moveSnake() {
//   const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };

//   snake.unshift(head);
//   if (snake[0].x === foodX && snake[0].y === foodY) {
//     score += 1;
//     scoreText.textContent = score;
//     createFood();
//   } else {
//     snake.pop();
//   }
// }

// function drawSnake() {
//   ctx.fillStyle = snakeColor;
//   ctx.strokeStyle = snakeBorder;
//   snake.forEach(snakePart => {
//     ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
//     ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
//   });
// }

// function changeDirection(event) {
//   const keyPressed = event.keyCode;
//   const LEFT = 37;
//   const RIGHT = 39;
//   const UP = 38;
//   const DOWN = 40;

//   const goingUp = (yVelocity === -unitSize);
//   const goingDown = (yVelocity === unitSize);
//   const goingRight = (xVelocity === unitSize);
//   const goingLeft = (xVelocity === -unitSize);

//   switch (true) {
//     case (keyPressed === LEFT && !goingRight):
//       xVelocity = -unitSize;
//       yVelocity = 0;
//       break;
//     case (keyPressed === UP && !goingDown):
//       xVelocity = 0;
//       yVelocity = -unitSize;
//       break;
//     case (keyPressed === RIGHT && !goingLeft):
//       xVelocity = unitSize;
//       yVelocity = 0;
//       break;
//     case (keyPressed === DOWN && !goingUp):
//       xVelocity = 0;
//       yVelocity = unitSize;
//       break;
//   }
// }

// function checkGameOver() {
//   switch (true) {
//     case (snake[0].x < 0):
//       running = false;
//       break;
//     case (snake[0].x >= gameWidth):
//       running = false;
//       break;
//     case (snake[0].y < 0):
//       running = false;
//       break;
//     case (snake[0].y >= gameHeight):
//       running = false;
//       break;
//   }
//   for (let i = 1; i < snake.length; i += 1) {
//     if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
//       running = false;
//     }
//   }
// }

// function displayGameOver() {
//   ctx.font = "50px MV Boli";
//   ctx.fillStyle = "black";
//   ctx.textAlign = "center";
//   ctx.fillText("Game Over!", gameWidth / 2, gameHeight / 2);
//   running = false;
// }

// function resetGame() {
//   score = 0;
//   xVelocity = unitSize;
//   yVelocity = 0;
//   snake = [
//     { x: unitSize * 4, y: 0 },
//     { x: unitSize * 3, y: 0 },
//     { x: unitSize * 2, y: 0 },
//     { x: 0, y: 0 },
//   ];
//   gameStart();
// }










// /*let Y = 200;
// let X = 23;
// let gridWidth = 30;
// let gridHeight = 30;
// let startDi = "right";
// let direction = startDi;
// let snakeSeg = [];
// let startSeg = 10;
// let canvasWidth = 500;
// let canvasHeight = 500;

// function setup() { 
//   createCanvas(canvasHeight, canvasWidth);

//   noLoop();
// } 

// function draw() { 
//   background(0);
//   square(X, Y, 20);
  
//   X += 3;
//   Y += 2;

//   if (keyIsPressed) {
//     if(key === "a"){
//       X -= 3;
//     } else if (key === "d"){
//       X += 3;
//     } else if (key === "w"){
//       Y -= 3;
//     } else if (key === "s"){
//       Y += 3;
//     } 
//   }

//  collision();{

//  }



// function mousePressed() {
//   // Start/stop the animation loop
//   if (isLooping()) {
//     noLoop();
//   } else {
//     loop();
//   }
// }

// function start(){

//   snakeSeg = [];

//   for (let x = X; x < X + startSeg; x += 1) {
//     // Create a new vector at the current position
//     let segmentPos = createVector(x, Y);

//     // Add it to the beginning of the array
//     snakeSeg.unshift(segmentPos);
//   }

//   direction = startDi;
//   score = 0;
//  // gameStarted = true;
//   loop();

// }

// function collision(){
//   if(X > width + 23){
//     X = -23
//   } 
//    if (Y > width + 23) {
//     Y = -23;
//    } 
   
  
//    }
  

// function Fruit() {
//   stroke(255, 64, 32);
//   point(fruit.x, fruit.y);  
// }
// */



// /*
// function frute() {
//   fill(56, 12,9)
//   square(200,200, 20)
// if (y > width + 25) {
//     x = random(0, canvasWidth-Width);
//     y = random(0, canvasWidth-Width);
//     y = -25;
//   }
// }
//   */





















const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");

// Select the score text and reset button elements
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");

// Set the game board dimensions
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 24;
let bgImage = new Image(); // Image object for background
let running = false;
let xVelocity = unitSize; // Snake's horizontal velocity
let yVelocity = 0; // Snake's vertical velocity
let foodX;
let foodY;
let score = 0;
let snake = [
  { x: unitSize * 4, y: 0 },
  { x: unitSize * 3, y: 0 },
  { x: unitSize * 2, y: 0 },
  { x: 0, y: 0 },
];

// Store the ID of the setTimeout
let gameLoopTimeout;

// Event Listeners
window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame);

// Preload image
bgImage.src = "https://wallpaperbat.com/img/361132-free-download-beautiful-jungle-hd-wallpaper-hd-wallpaper.jpg";
bgImage.onload = () => {
  // Image is loaded, start the game
  gameStart();
};

function gameStart() {
  running = true;
  scoreText.textContent = score;
  createFood();
  nextTick();
}

function nextTick() {
  if (running) {
    // Clear previous timeout if it exists
    if (gameLoopTimeout) {
      clearTimeout(gameLoopTimeout);
    }

    gameLoopTimeout = setTimeout(function() {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    }, 100);
  } else {
    displayGameOver();
  }
}

function clearBoard() {
  // Draw background image
  context.drawImage(bgImage, 0, 0, gameWidth, gameHeight);
}

function createFood() {
  function randomFood(min, max) {
    const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randNum;
  }
  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameHeight - unitSize);
}

function drawFood() {
  context.fillStyle = foodColor;
  context.fillRect(foodX, foodY, unitSize, unitSize);
}

function moveSnake() {
  const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };

  snake.unshift(head);
  if (snake[0].x === foodX && snake[0].y === foodY) {
    score += 1;
    scoreText.textContent = score;
    createFood();
  } else {
    snake.pop();
  }
}

function drawSnake() {
  context.fillStyle = snakeColor;
  context.strokeStyle = snakeBorder;
  snake.forEach(function(snakePart) { // each part of the snake 
    context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
    context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
  });
}

function changeDirection(event) {
  const keyPressed = event.keyCode;
  const LEFT = 65;
  const RIGHT = 68;
  const UP = 87;
  const DOWN = 83;

  const goingUp = (yVelocity === -unitSize);
  const goingDown = (yVelocity === unitSize);
  const goingRight = (xVelocity === unitSize);
  const goingLeft = (xVelocity === -unitSize);

  switch (true) {
    case (keyPressed === LEFT && !goingRight):
      xVelocity = -unitSize;
      yVelocity = 0;
      break;
    case (keyPressed === UP && !goingDown):
      xVelocity = 0;
      yVelocity = -unitSize;
      break;
    case (keyPressed === RIGHT && !goingLeft):
      xVelocity = unitSize;
      yVelocity = 0;
      break;
    case (keyPressed === DOWN && !goingUp):
      xVelocity = 0;
      yVelocity = unitSize;
      break;
  }
}

function checkGameOver() {
  // Snake collisions
  switch (true) {
    case (snake[0].x < 0):
    case (snake[0].x >= gameWidth):
    case (snake[0].y < 0):
    case (snake[0].y >= gameHeight):
      running = false;
      break;
  }
  // Self crash
  for (let i = 1; i < snake.length; i += 1) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      running = false;
    }
  }
}

function displayGameOver() {
  context.font = "50px italic";
  context.fillStyle = "black";
  context.textAlign = "center";
  context.fillText("Game Over!", gameWidth / 2, gameHeight / 2); // Display
  running = false;
}

function resetGame() {
  // Clear the current game loop
  if (gameLoopTimeout) {
    clearTimeout(gameLoopTimeout);
  }

  score = 0;
  xVelocity = unitSize;
  yVelocity = 0;
  snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: 0, y: 0 },
  ];
  gameStart();
}
