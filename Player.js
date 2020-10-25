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
    this.isthiskeypressed = false;
    this.bullet= new bullet(this.player_x,this.player_y);
    this.bullets=[];
    }
  
  update(){
   
     if(keyIsPressed)
    {
      if(key == 'c'){
        this.isthiskeypressed = true;
        this.bullets.push(new bullet(this.player_x,this.player_y));
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



     







    ///////////////////////////////////////
    for(let i=0; i<this.bullets.length; i++)
    {
      this.bullets[i].update();

    }
  
}
  
  draw(){
    push()
    fill('gold');
    rect(this.player_x, this.player_y, this.player_size, this.player_size)
    pop()

   for(let i=0; i<this.bullets.length; i++)
    {
      this.bullets[i].draw();
    }
  }


}