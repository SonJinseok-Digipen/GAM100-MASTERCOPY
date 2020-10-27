class Player{
  constructor(){
    this.player_size = 25;
    this.player_x = width / 2;
    this.player_y = height - this.player_size;
    this.map_boundary_x = width - 25;
    this.map_boundary_y = height - 175;
    this.player_velocity = 25;
    this.player_acceleration = 1;
    this.player_max_velocity = 40;
    this.player_attack_x = -10;
    this.player_attack_y = this.player_y;
    this.player_attack_width = 5;
    this.player_attack_height = 25;
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
        this.player_x += this.player_velocity;
        if(this.player_x < this.map_boundary_x && this.player_x > 0){
          this.player_velocity += this.player_acceleration;
        }
        if(this.player_x + this.player_velocity > this.map_boundary_x){
          this.player_x = this.map_boundary_x;
          this.player_velocity = 25;
        }
        /*if(this.player_velocity > this.player_max_velocity){
          this.player_velocity = this.player_max_velocity;
          this.player_acceleration = 0;
        }*/
        
      }if(keyCode == LEFT_ARROW && this.player_x > 0)
      {
        this.player_x -= this.player_velocity;
        if(this.player_x < this.map_boundary_x && this.player_x > 0){
          this.player_velocity += this.player_acceleration;
        }
        if(this.player_x - this.player_velocity < 0){
          this.player_x = 0;
          this.player_velocity = 25;
        }
        
        /*if(this.player_velocity > this.player_max_velocity){
          this.player_velocity = this.player_max_velocity;
          this.player_acceleration = 0;
        }*/
      }
      if(keyCode == UP_ARROW && this.player_y > this.map_boundary_y)
      {
        this.player_y -= this.player_velocity;
         /*if(this.player_y < this.map_boundary_y && this.player_y > height-25){
          this.player_velocity += this.player_acceleration;
        }*/
        if(this.player_y - this.player_velocity < this.map_boundary_y){
          this.player_y = this.map_boundary_y;
          this.player_velocity = 25;
        }
      }
      if(keyCode == DOWN_ARROW && this.player_y < height - 25)
      {
        this.player_y += this.player_velocity;
        /*if(this.player_y < this.map_boundary_y && this.player_y > height-25){
          this.player_velocity += this.player_acceleration;
        }*/
        if(this.player_y + this.player_velocity > height - 25){
          this.player_y = height - 25;
          this.player_velocity = 25;
        }
      }
    }else{
      this.player_velocity = 25;
    }
      if(this.isthiskeypressed == true && this.wasthiskeypressed == false){
        if(this.isbulletexist == false){
          this.player_attack_x = this.player_x + 10;
          this.player_attack_y = this.player_y - 25;
          this.isbulletexist = true;
        }
      }
    this.wasthiskeypressed = this.isthiskeypressed;
    //console.log(this.player_velocity)
  }
  
  update_bullet(){
    if(this.isbulletexist == true){
      if(this.player_attack_y > -50){
      fill('magenta');
        rect(this.player_attack_x, this.player_attack_y,       this.player_attack_width, this.player_attack_height);
        this.player_attack_y -= 25;
        if(this.player_attack_y <= -25){
          this.isbulletexist = false;
        }
      }
    }
    
    //console.log(this.isbulletexist)
   //console.log(this.isbulletexist)

  }
  
  draw(){
    push()
    fill('gold');
    rect(this.player_x, this.player_y, this.player_size, this.player_size)
    pop()
  
  }
}
//|| dist(this.player_attack_x,this.player_attack_y,25,25)<30