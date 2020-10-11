class scolpion
{
	constructor(){
    this.scolpion_random = random(1, 16);
    this.scolpion_x = 0;
    this.scolpion_y = int(this.scolpion_random) * 25;
    this.scolpion_size = 25;
    this.scolpion_speed = 10;
  }
  
  update(){
    this.scolpion_x += this.scolpion_speed;
  }
  
  draw(){
    push()
    fill('purple');
    ellipseMode(CORNER);
    circle(this.scolpion_x, this.scolpion_y, this.scolpion_size);
    pop()
  }
}