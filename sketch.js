//This code made by Jinseok Son
//Do not change any of this code if you can't understand code.

let tilemap1;
let centipede1;
let tail1;
let player;

function setup() {
  createCanvas(750, 750);
  tilemap1=new Mushroom_tilemap();
  centipede1=new centipedeHead(0,0);
  tail1=new centipedetale1(centipede1);
  tail2=new centipedetale2(tail1);
  tail3=new centipedetale2(tail2);
  player = new Player();
  //tail4=new centipedetale2(tail3);
  //tail5=new centipedetale2(tail4);
  //tail6=new centipedetale2(tail5);
  tilemap1.Initialize();
  frameRate(20)
}

function draw() {
  background(220);
  drawgrid();
  centipede1.Update();
  tail1.Update();
  tail2.Update();
  tail3.Update();
  //tail4.Update();
  //tail5.Update();
  centipede1.Show();
  tail1.Show();
  tail2.Show();
  tail3.Show();
  //tail4.Show();
  //tail5.Show();
  player.update();
  player.update_bullet();
  player.draw();
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