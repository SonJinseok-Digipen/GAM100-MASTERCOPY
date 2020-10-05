var screen_width = 600;
var screen_height = 600;
let player;
function setup() {
  createCanvas(screen_width, screen_height);
  player = new Player();
}

function draw() {
  background(220);
  for (x = 0; x < width; x += 30) {
    for (y = 0; y < height; y += 30) {
      rect(x, y, 40, 40);
    }
  }
  player.update();
  player.draw();
  
} 