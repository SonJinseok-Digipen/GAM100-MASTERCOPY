class centipedeHead
{

 constructor(x,y,tilemap=tilemap1)
 {

   this.posx=x;
   this.posy=y;
   this.xspeed=25;
   this.yspeed=0;
   this.direction1=true;
   this.direction2=false;
   this.searcharea1=tilemap1.layers[(this.posy)/25][(this.posx+(this.xspeed))/25];
   this.searcharea2=tilemap1.layers[(this.posx)/25][(this.posx-this.xspeed)/25];  
   this.isdie=false;
   }

 Update()
 {
 this.searcharea1=tilemap1.layers[(this.posy)/25][(this.posx+(this.xspeed))/25]; 
 this.searcharea2=tilemap1.layers[(this.posy)/25][(this.posx-this.xspeed)/25];  


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
 
  if((this.posx==725 &&this.xspeed==25) || (this.posx==0 && this.xspeed==-25)||this.searcharea1!=0)
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
 
  if((this.posx==725 &&this.xspeed==25) || (this.posx==0 && this.xspeed==-25)||this.searcharea2!=0)
  {
    this.yspeed=-25;
    this.xspeed=0;
  } 


 
}
 this.posx=this.posx+this.xspeed;
 this.posy=this.posy+this.yspeed;



 for(let i=0; i<player.bullets.length; i++)
  {
     if(dist(this.posx+12.5,this.posy+12.5,player.bullets[i].player_attack_x,player.bullets[i].player_attack_y)<=15)
     {
     this.isdie=true;
      }

  }
  
 


    
  
  }
 
 Show()
{  
    if(this.isdie==false)
    {
    //push();
   // fill(255,0,0);
    //rect(this.posx,this.posy,25,25);
    image(centipede_head_art, this.posx, this.posy, 25);
    //pop();
   }
   else
   {
    return 0;
   }


 }


}

class centipedetale1
{

 constructor(track=new centipedeHead())
 {
   this.track=track;
   this.tail=[];
   this.total=1;
   this.posx=this.track.posx-(this.track.xspeed)*1;
   this.posy=this.track.posy-(this.track.yspeed)*1;
   this.xspeed=this.track.xspeed;
   this.yspeed=this.track.yspeed;
   this.isdie==false;
   this.searcharea1=tilemap1.layers[(this.posy)/25][(this.posx+(this.xspeed))/25]; 
   this.searcharea2=tilemap1.layers[(this.posy)/25][(this.posx-this.xspeed)/25];  
 }

 Update()
  {
   this.posx=this.track.posx-this.track.xspeed;
   this.posy=this.track.posy-this.track.yspeed;
   if(this.searcharea1!=0)
   {
    this.xspeed=0;
    this.yspeed=0;
   }
  for(let i=0; i<player.bullets.length; i++)
  {
     if(dist(this.posx+12.5,this.posy+12.5,player.bullets[i].player_attack_x,player.bullets[i].player_attack_y)<=15)
     {
     this.isdie=true;
    
    }

  }

}

  
 Show()
 {

    if(this.isdie==true)
    {
      return;
    }

    if(this.track.isdie==true)
    {
    image(centipede_head_art, this.posx, this.posy, 25);
    }
    else
    {
    image(centipede_body_art, this.posx, this.posy, 25);
    }

    
     



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
   this.isdie=false;

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

    for(let i=0; i<player.bullets.length; i++)
  {
     if(dist(this.posx+12.5,this.posy+12.5,player.bullets[i].player_attack_x,player.bullets[i].player_attack_y)<=15)
     {
     this.isdie=true;
  }

 

 }
}





 Show()
 {  

    
    if(this.isdie==true)
    {
      return 0;
    }


    else if(this.track.isdie==true)
    {
    image(centipede_head_art, this.posx, this.posy, 25);
    }
    else
    {
    image(centipede_body_art, this.posx, this.posy, 25);
    }


 }

}

