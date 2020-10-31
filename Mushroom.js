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
   //색깔에 따라서 버섯상태에 대한 이미지를 넣어줘야함
   if(this.life==3)
   {
    push()
    fill(255,0,0);
    square(this.posx,this.posy,this.size);
    pop()
   }
     //색깔에 따라서 버섯상태에 대한 이미지를 넣어줘야함
    if(this.life==2)
   {
    push()
    fill(0,255,0);
    square(this.posx,this.posy,this.size);
    pop()
   }
   //색깔에 따라서 버섯상태에 대한 이미지를 넣어줘야함
    if(this.life==1)
   {
    push()
    fill(50,120,30);
    square(this.posx,this.posy,this.size);
    pop()
   }
  
 

}

}
/*if(this.posx <= player.bullets[i].player_attack_x && this.posx + this.size >= player.bullets[i].player_attack_x && 
this.posy == player.bullets[i].player_attack_y && player_bullet.isbulletexist == true)*/