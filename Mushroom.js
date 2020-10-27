class Mushroom
{
  constructor(x, y){
    this.posx = x;
    this.posy = y;
    this.size=25;
    //this.isdie=false;
    this.life=4;
    //this.IsCollison=false;
    }
  
  update()
  {
  if(this.posx <= player.player_attack_x + player.player_attack_width && this.posx + this.size >= player.player_attack_x && this.posy == player.player_attack_y && this.life > 0 && player.isbulletexist == true){
    this.life -= 1;
    player.isbulletexist = false;
  }
      /*dist(player.player_attack_x ,player.player_attack_y ,this.posx ,this.posy)  <= this.size*/  /*|| dist(player.player_attack_x ,player.player_attack_y ,this.posx + this.size ,this.posy + this.size) == 0*/


   /*if(this.IsCollison==true)
   {
    this.life=this.life-1;
    // console.log(this.life)
   }*/
   
    
  }

  draw()
  {
    //if(this.isdie==false)
    if(this.life > 0)
    {
    push()
    fill('cyan');
    square(this.posx,this.posy,this.size);
    pop()
    
    }
  }

}