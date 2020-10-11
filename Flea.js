class Flea{
  constructor(){
    this.flea_random = random(1, 29);
    this.flea_x = int(this.flea_random) * 25;
    this.flea_y = 0;
    this.flea_size = 25;
    this.flea_speed = 10;
  }
  
  update(){
    this.flea_y += this.flea_speed;
  }
  
  draw(){
    push()
    fill('purple');
    ellipseMode(CORNER);
    circle(this.flea_x, this.flea_y, this.flea_size);
    pop()
  }
}