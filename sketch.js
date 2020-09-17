var screen_width = 1280;
var screen_height = 720;
let player;
let turtle;
function setup() {
  createCanvas(screen_width, screen_height);
  player = new Player();
  turtle = new Turtle();
}

function draw() {
  background(220);
  for (x = 0; x < width; x += 40) {
    for (y = 0; y < height; y += 40) {
      rect(x, y, 50, 50);
    }
  }
  player.update();
  player.draw();
  turtle.update();
  turtle.draw();
}