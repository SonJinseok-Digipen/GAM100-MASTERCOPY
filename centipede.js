

class centipedeHead
{

 constructor(x,y)
 {

   this.tilemap=new Mushroom_tilemap();
   this.posx=x;
   this.posy=y;
   this.xspeed=25;
   this.yspeed=0;
    
   }

 Update()
 {
  this.posx=this.posx+this.xspeed;
  this.posy=this.posy+this.yspeed;
  if(this.posx>=725)
  {
    this.yspeed=25;
    this.xspeed=0;
  } 
   
  }
 
 Show()
{  
    push();
    fill(255,0,0);
    rect(this.posx,this.posy,25,25);
    pop();
 }


}

class centipedetale1
{

 constructor(track=new centipedeHead())
 {
   this.track=track;
   this.tail=[];
   this.total=1;
   this.posx=this.track.posx-(centipede1.xspeed)*1;
   this.posy=this.track.posy-(centipede1.yspeed)*1;
   this.xspeed=this.track.xspeed;
   this.yspeed=this.track.yspeed;
 }

 Update()
  {
   this.posx=this.track.posx-centipede1.xspeed;
   this.posy=this.track.posy-centipede1.yspeed;
  
  }

  
 Show()
 {
      
    push();
    fill(0,255,0);
    rect(this.posx,this.posy,25,25);
    pop();

 }

}

class centipedetale2
{

 constructor(track=new centipedetale1())
 {
   this.track=track;
   this.posx=this.track.posx-(centipede1.xspeed)*1;
   this.posy=this.track.posy-(centipede1.yspeed)*1;
  }

 Update()
  {
   this.posx=this.track.posx-centipede1.xspeed;
   this.posy=this.track.posy-centipede1.yspeed;
  }
 Show()
 {  
    push();
    fill(0,255,0);
    rect(this.posx,this.posy,25,25);
    pop();
 }

}




