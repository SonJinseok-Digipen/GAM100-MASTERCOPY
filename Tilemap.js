//This code made by Jinseok Son
//Do not change any of this Code If you can't understand how this code work

 
class Mushroom_tilemap
{

 constructor()
 {
    this.rows=30;
    this.cols=30;
    this.tilesize=25;
    this.layers=[];
}
 
 Initialize()
 {

   for(let i=0; i<this.rows; i++)
    {
    this.layers[i]=[];  
    for(let j=0; j<this.cols; j++)
    {
      this.layers[i][j]=0;
    }
  }

 
  for(let i=0; i<32; i++)
  {
    this.layers[int(random(3,this.rows))][int(random(0,this.cols))]=1;
  }
    

  for(let i=this.rows-3; i<this.rows; i++)
  {
    this.layers[i]=[];
    for(let j=0; j<this.cols; j++)
    {
      this.layers[i][j]=0;
    }
  }
 
 
}
 

 
 }












	

