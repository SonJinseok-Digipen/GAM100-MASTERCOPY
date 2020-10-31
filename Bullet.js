 class bullet 
 {
  constructor(x,y)
  {
   this.player_attack_width = 5;
   this.player_attack_height = 25;
   this.player_attack_x = x + 10;
   this.player_attack_y = y;

  }
  
  update()
  {

          //this.player_attack_x +=  10;
          this.player_attack_y -= 25;
          console.log(this.player_attack_y)
  }
  draw()
  {
      if(this.player_attack_y > -25){
      push()
      noStroke();
      fill('olive');
      rect(this.player_attack_x, this.player_attack_y, this.player_attack_width, this.player_attack_height);
      pop()
      }
  }
}
      




 