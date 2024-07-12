// Select the game board canvas element and get its 2D rendering context
const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
// Select the score text and reset button elements
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");
// Set the game board dimensions
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
// Define game colors and unit size
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 24;
// Initialize game state variables
let running = false;
let xVelocity = unitSize; // Snake's horizontal velocity
let yVelocity = 0; // Snake's vertical velocity
let foodX;
let foodY;
let score = 0;
// start position of the snake
let snake = [ { x: unitSize * 4, y: 0 }, { x: unitSize * 3, y: 0 }, { x: unitSize * 2, y: 0 }, { x: 0, y: 0 } ];
// event listeners for keyboard input and reset button click
window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame);

gameStart();




function gameStart() {
  running = true;
  scoreText.textContent = score;
  createFood();
  drawFood();
  nextTick();

}

function nextTick() {
  if (running) {
    setTimeout(function() {
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
  context.fillStyle = boardBackground; //color
  context.fillRect(0, 0, gameWidth, gameHeight); // clear
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
  //snake collisins 
  switch (true) {
    case (snake[0].x < 0):
      running = false;
      break;
    case (snake[0].x >= gameWidth):
      running = false;
      break;
    case (snake[0].y < 0):
      running = false;
      break;
    case (snake[0].y >= gameHeight):
      running = false;
      break;
  }
  //self crash
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
  context.fillText("Game Over!", gameWidth / 2, gameHeight / 2); // display
  running = false;
}

function resetGame() {
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

/*function mousePressed() {

}
*/





