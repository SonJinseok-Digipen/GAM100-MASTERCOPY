//This code made by Jinseok Son
//Do not change any of this code if you can't understand code.

let tilemap1;

function setup() {
  createCanvas(750, 750);
  tilemap1=new Mushroom_tilemap();
  tilemap1.Initialize();
}

function draw() {
  background(220);

  drawgrid();

}

function drawgrid()
{
  let current_mushnumber=0; 
 for(let j=0; j<tilemap1.rows; j++)
 {
 	for(let i=0; i<=tilemap1.cols; i++)
 	{
 		if(tilemap1.layers[j][i]==0)
 		{
 		 rect(i*tilemap1.tilesize,j*tilemap1.tilesize,tilemap1.tilesize,tilemap1.tilesize);
 		}

        if(tilemap1.layers[j][i]==1)
 		{
 		 push();
 		 fill(0,0,255);
 		 rect(i*tilemap1.tilesize,j*tilemap1.tilesize,tilemap1.tilesize,tilemap1.tilesize);
 		 current_mushnumber++;
 		 pop();

 	    }
 	   
 	}
 }
 
}
