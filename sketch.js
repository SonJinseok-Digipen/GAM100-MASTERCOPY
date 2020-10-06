//This code made by Jinseok Son
//Do not change any of this code if you can't understand code.

let tilemap1;
let centipede1;

function setup() {
  createCanvas(750, 750);
  tilemap1=new Mushroom_tilemap();
  centipede1=new centipede(0,10);
  tilemap1.Initialize();
  frameRate(10);
}

function draw() {
  background(220);
  drawgrid();
  centipede1.Update();
  centipede1.Show();
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
 		push();
 		fill(255);
 		rect(i*tilemap1.tilesize,j*tilemap1.tilesize,tilemap1.tilesize,tilemap1.tilesize);
 		pop();
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

function Draw_centipede()
{
   for(let i=0; i<=centipede1.total-1; i++)
   {
     rect(centipede1.tail[i].x,centipede1[i].y,25,25); 
   }

}
