/*File Name: Mushroom.js
   Project Name: Centipede
   The course name: GAM100
   The term: Fall 2020
   Author(s): 

   All content © 2020 DigiPen (USA) Corporation, all rights reserved.*/

class Mushroom
{
  constructor(x, y){
    this.posx = x*25;
    this.posy = y*25;
    this.size=25;
    this.isdie=false;
    this.life=4;
    this.IsCollison=false;
    
    }
  
  update()
  {

      for(let i=0; i<player.bullets.length; i++)
      {
        if(this.posx <= player.bullets[i].player_attack_x && this.posx + this.size >= player.bullets[i].player_attack_x && 
this.posy + this.size == player.bullets[i].player_attack_y && this.life > 0)
        {
          this.life=this.life-1;
          player.bullets.pop();
        }
      }
         if(this.life==0)
         {
          this.isdie=true;
         }

   }

  draw()
  {
    if(this.isdie==false)
    {
    push()
    fill('cyan');
    square(this.posx,this.posy,this.size);
    pop()
   }
  
 

}

}
/*if(this.posx <= player.bullets[i].player_attack_x && this.posx + this.size >= player.bullets[i].player_attack_x && 
this.posy == player.bullets[i].player_attack_y && player_bullet.isbulletexist == true)*/