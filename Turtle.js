class Turtle{
  constructor(){
    this.turtle_x = random(0, width);
    this.turtle_y = 0;
    this.turtle_size = 40;
    this.turtle_speed = 5;
  }
  
  update(){
    this.turtle_y += this.turtle_speed;
  }
  
  draw(){
    push()
    fill('purple');
    circle(this.turtle_x, this.turtle_y, this.turtle_size);
    pop()
  }
}