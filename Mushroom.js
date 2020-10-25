class Mushroom
{
  constructor(x, y){
    this.posx = x;
    this.posy = y;
    this.mushroom_life = 3;
    this.size=25;
    this.isdie=false;
    this.life=4;
    this.IsCollison=false;
    }
  
  update()
  {
  if(dist(player.bullet.x,player.bull,this.posx,this.psy))
  {
     this.IsCollison=true;
     console.log( this.IsCollison);
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