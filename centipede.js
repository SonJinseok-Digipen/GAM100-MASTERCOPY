class centipedeHead
{

 constructor(x,y)
 {

   this.tilemap=new Mushroom_tilemap();
   this.posx=x;
   this.posy=y;
   this.xspeed=25;
   this.yspeed=0;
   this.direction1=true;
   this.direction2=false;
    
   }

 Update()
 {
if(this.direction1)
{
    switch(this.posy)

  {
   case 25:
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 75:
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 125 :
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 175 :
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 225 :
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 275 :
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 325 :
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 375 :
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 425:
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 475:
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 525:
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 575:
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 625:
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 675:
   this.yspeed=0;
   this.xspeed=-25;
   break;
   case 725:
   this.yspeed=0;
   this.xspeed=-25
   this.direction1=false;
   this.direction2=true;
   break;
   
  }
  switch(this.posy)
  {
   case 50:
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 100:
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 150 :
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 200 :
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 250 :
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 300 :
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 350 :
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 400 :
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 450:
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 500:
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 550:
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 600:
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 650:
   this.yspeed=0;
   this.xspeed=25;
   break;
   case 700:
   this.yspeed=0;
   this.xspeed=25;
   break;
   }
 
  if((this.posx==725 &&this.xspeed==25) || (this.posx==0 && this.xspeed==-25))
  {
    this.yspeed=25;
    this.xspeed=0;
  } 
}
if(this.direction2)
{
    switch(this.posy)

  {
  
   case 675:
   this.yspeed=0;
   this.xspeed=-25;

   break;
   case 725:
   this.yspeed=0;
   this.xspeed=-25;
   break;
   
  }
  switch(this.posy)
  {
   case 650:
   this.yspeed=0;
   this.xspeed=25;
   this.direction1=true;
   this.direction2=false;
   break;
   case 700:
   this.yspeed=0;
   this.xspeed=25;
   break;
   }
 
  if((this.posx==725 &&this.xspeed==25) || (this.posx==0 && this.xspeed==-25))
  {
    this.yspeed=-25;
    this.xspeed=0;
  } 
  
 

 
}

   this.posx=this.posx+this.xspeed;
   this.posy=this.posy+this.yspeed;

  
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
    //console.log(this.track.posx,this.track.posy,this.posx,this.posy);
    pop();

 }

}

class centipedetale2
{

 constructor(track=new centipedetale1())
 {
   this.track=track;
   this.posx=this.track.posx-(this.track.xspeed);
   this.posy=this.track.posy-(this.track.yspeed);
   this.xspeed=this.track.xspeed;
   this.yspeed=this.track.yspeed;
   this.track.direction1=true;
   this.track.direction2=false;
  }

 Update()
  {
 if(this.track.direction1)
 {
   this.posx=this.track.posx-this.track.xspeed;
   this.posy=this.track.posy-this.track.yspeed;
  }
  if(this.track.direction2)
   {
   this.posx=this.track.posx-this.track.xspeed;
   this.posy=this.track.posy+this.track.yspeed;
   }



 switch(this.track.posy)
  {
   case 25:
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 75:
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 125 :
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 175 :
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 225 :
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 275 :
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 325 :
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 375 :
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 425:
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 475:
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 525:
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 575:
   this.track.yspeed=0;
   this.track.xspeed=-25;
   break;
   case 625:
   this.track.yspeed=0;
   this.track.xspeed=-25;
    
   break;
   case 675:
   this.track.yspeed=0;
   this.track.xspeed=-25;
  break;
   case 725:
   this.track.yspeed=0;
   this.track.xspeed=-25;
   this.track.direction1=false;
   this.track.direction2=true;
   
   break;
   
  }
switch(this.track.posy)
  {
   case 50:
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 100:
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 150 :
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 200 :
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 250 :
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 300 :
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 350 :
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 400 :
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 450:
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 500:
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 550:
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   case 600:
   this.track.yspeed=0;
   this.track.xspeed=25;

   break;
   case 650:
   this.track.yspeed=0;
   this.track.xspeed=25;
   if(this.direction2)
   {
   this.track.direction1=true;
   this.track.direction2=false;
   }
   break;
   case 700:
   this.track.yspeed=0;
   this.track.xspeed=25;
   break;
   }
   

 
    if((this.track.posx==725 &&this.track.xspeed==25) || (this.track.posx==0 && this.track.xspeed==-25))
  {

    this.track.yspeed=25;
    this.track.xspeed=0;
  }

 }





 Show()
 {  
    push();
    fill(0,255,0);
    rect(this.posx,this.posy,25,25);
    //console.log(this.track.posx,this.track.posy,this.posx,this.posy);
    pop();
 }

}

