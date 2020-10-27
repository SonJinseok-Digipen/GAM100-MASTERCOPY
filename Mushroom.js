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
        if(dist(player.bullets[i].player_attack_x,player.bullets[i].player_attack_y,this.posx,this.posy)<=20)
        {
          this.life=this.life-1;
          player.bullets.pop();
        }
      }
         if(this.life<=0)
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