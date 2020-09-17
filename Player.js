class Player{
  constructor(){
    this.player_x = width / 2;
    this.player_y = height - 40;
    this.map_boundary_x = width - 40;
    this.map_boundary_y = height - height / 4;
    this.player_size = 40;
    this.player_xspeed = 40;
    this.player_yspeed = 40;
  }
  
  update(){
     if(keyIsPressed)
    {
     if(keyCode == RIGHT_ARROW && this.player_x < this.map_boundary_x)
      {
        this.player_x += this.player_xspeed;
      }
     if(keyCode == LEFT_ARROW && this.player_x > 0)
      {
        this.player_x -= this.player_xspeed;
      }
      if(keyCode == UP_ARROW && this.player_y > this.map_boundary_y)
      {
        this.player_y -= this.player_yspeed;
      }
      if(keyCode == DOWN_ARROW && this.player_y < height - 40)
      {
        this.player_y += this.player_yspeed;
      }
      if(key == 'c' || key == 'C' || key == 'x' || key == 'X')
      {
       //Fire bullets
      }
    }
  }
  
  draw(){
    push()
    fill('gold');
    square(this.player_x, this.player_y, this.player_size);
    pop()
  }
}