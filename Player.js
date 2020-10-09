class Player{
  constructor(){
    this.player_size = 25;
    this.player_x = width / 2;
    this.player_y = height - this.player_size;
    this.map_boundary_x = width - 25;
    this.map_boundary_y = height - 175;
    this.player_xspeed = 10;
    this.player_yspeed = 10;
    this.player_acceleration_left = 1;
    this.player_acceleration_rigth=1;
    this.player_attack_x = -100;
    this.player_attack_y = this.player_y;
    this.player_attack_width = 5;
    this.player_attack_height = 30;
    this.isthiskeypressed = false;
    this.wasthiskeypressed = false;
    this.isbulletexist = false;
  }
  
  update(){
    this.isthiskeypressed = false;
     if(keyIsPressed)
    {
      if(key == 'c'){
        this.isthiskeypressed = true;
      }
      
     if(keyCode == RIGHT_ARROW && this.player_x < this.map_boundary_x)
      {
        this.player_x += this.player_xspeed;
        if(this.player_x < this.map_boundary_x && this.player_x > 0){
          this.player_xspeed += this.player_acceleration_rigth;
        }else{
          this.player_xspeed = 10;
        }
        
      }
     if(keyCode == LEFT_ARROW && this.player_x > 0 && keyCode != RIGHT_ARROW)
      {
                this.player_x -= this.player_xspeed;
        if(this.player_x < this.map_boundary_x && this.player_x > 0){
          this.player_xspeed += this.player_acceleration_left;
        }else{
          this.player_xspeed = 10;
        }
      }
      if(keyCode == UP_ARROW && this.player_y > this.map_boundary_y)
      {
        this.player_y -= this.player_yspeed;
      }
      if(keyCode == DOWN_ARROW && this.player_y < height - 25)
      {
        this.player_y += this.player_yspeed;
      }
    }
      if(this.isthiskeypressed == true && this.wasthiskeypressed == false){
        if(this.isbulletexist == false){
          this.player_attack_x = this.player_x + 10;
          this.player_attack_y = this.player_y - 60;
          this.isbulletexist = true;
        }
      }
    this.wasthiskeypressed = this.isthiskeypressed;
  }
  
  update_bullet(){
            fill('magenta');
        rect(this.player_attack_x, this.player_attack_y, this.player_attack_width, this.player_attack_height);
        this.player_attack_y -= 50;
        if(this.player_attack_y <= 0){
          this.isbulletexist = false;
        }
  }
  
  draw(){
    push()
    fill('gold');
    rect(this.player_x, this.player_y, this.player_size, this.player_size)
    pop()
  }
}