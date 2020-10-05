class Player{
  constructor(){
    this.player_x = width / 2;
    this.player_y = height - 15;
    this.map_boundary_x = width - 15;
    this.map_boundary_y = height - 135;
    this.player_size = 30;
    this.player_xspeed = 10;
    this.player_yspeed = 10;
    this.player_acceleration = 0;
    this.player_attack_x = this.player_x - 7.5;
    this.player_attack_y = this.player_y - 85;
    this.player_attack_width = 15;
    this.player_attack_height = 45;
  }
  
  update(){
     if(keyIsPressed)
    {
     if(keyCode == RIGHT_ARROW && this.player_x < this.map_boundary_x)
      {
        this.player_x += this.player_xspeed;
      }
     if(keyCode == LEFT_ARROW && this.player_x > 15)
      {
        this.player_x -= this.player_xspeed;
      }
      if(keyCode == UP_ARROW && this.player_y > this.map_boundary_y)
      {
        this.player_y -= this.player_yspeed;
      }
      if(keyCode == DOWN_ARROW && this.player_y < height - 15)
      {
        this.player_y += this.player_yspeed;
      }
      if(key == 'c' || key == 'C' || key == 'x' || key == 'X')
      {
       //Fire bullets
        if(this.player_attack_y >= 0){
          this.player_attack_y -= 50;
        }
        
      }
    }
  }
  
  draw(){
    push()
    fill('gold');
    circle(this.player_x, this.player_y, this.player_size);
    rect(this.player_attack_x, this.player_attack_y, this.player_attack_width, this.player_attack_height);
    pop()
  }
}