class Mushroom_tilemap
{

 constructor()
 {
    this.xcordinate=0;
    this.ycordinate=0;
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