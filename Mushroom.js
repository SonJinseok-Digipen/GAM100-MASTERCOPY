class Mushroom
{
  constructor(x, y){
    this.posx = x;
    this.posy = y;
    this.size=25;
    this.isdie=false;
    this.life=4;
    this.IsCollison=false;
   }
  
  update()
  {


   console.log(player.bullets);

  for(let i=0; i<player.bullets.length; i++)
  {
    if(dist(player.bullets[i].player_x,player.bullets[i].player_y,this.posx,this.posy)<100)
    {
      console.log("hello");
    }
  }



   if(this.IsCollison==true)
   {
    this.life=this.life-1;
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