
<<<<<<< HEAD
        function myFunction() {
          document.getElementById("myDropdown").classList.toggle("show");
        }
        
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }
=======
let Y = 200;
let X = 200;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background('lime');
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

function snakecolor() {
  
}
>>>>>>> main
