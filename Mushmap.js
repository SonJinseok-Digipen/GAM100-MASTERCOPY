class Mushmap
{
  constructor(tilemap)
  {
    this.tilemap=tilemap;
    this.Mushrooms=[];
    this.mscore = 0;
    
  }

  Initialize()
  {

for(let i=0; i<this.tilemap.rows; i++)
    {
    for(let j=0; j<this.tilemap.cols; j++)
    {
      if(this.tilemap.layers[j][i]!=0)
      {
       this.Mushrooms.push(new Mushroom(i,j));
      }
      
    }
     }
  }
  
  update()
  {
    for(let i=0; i<this.Mushrooms.length; i++)
    {
      this.Mushrooms[i].update();
       if(this.Mushrooms[i].isdie)
      {
        this.Mushrooms.splice(i,1);
      }
    }
         
    
    
  }


 

  draw()
  {
   for(let i=0; i<this.Mushrooms.length; i++)
    {
      this.Mushrooms[i].draw();
    }
          
  }

}