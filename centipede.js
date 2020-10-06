

class centipede
{

 constructor(x,y)
 {
   
   this.Xindex=x;
   this.Yindex=y;
   this.xspeed=tilemap1.tilesize;
   this.yspeed=tilemap1.tilesize;
   this.total=6;
   this.tail=[];
 
   
 }

 Update()
 {
   for(let i=0; i<=this.total-1; i++)
   {
   this.tail[i]=createVector(this.Xindex+i,this.Yindex);
   } 
   this.Xindex+=1;
   this.Yindex+=0
   }


 Show()
 {
   for(let i=0; i<=this.total-1; i++)
   {
   	fill(0);
    rect(this.tail[i].x*this.xspeed,this.tail[i].y*this.yspeed,25,25);
  }
 }


}