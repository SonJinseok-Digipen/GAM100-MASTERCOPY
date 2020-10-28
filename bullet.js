 /*File Name: bullet.js
   Project Name: Centipede
   The course name: GAM100
   The term: Fall 2020
   Author(s): Junseo Bae

   All content © 2020 DigiPen (USA) Corporation, all rights reserved.*/

 class bullet 
 {
  constructor(x,y)
  {
   this.player_attack_width = 5; // width of a bullet
   this.player_attack_height = 25; // height of a bullet
   this.player_attack_x = x + 10; // x coordinate of a bullet
   this.player_attack_y = y; // y coordinate of a bullet

  }
  
  update()
  {
    this.player_attack_y -= 25; // bullet goes upward by 25 pixels.
  }

  draw()
  {
    if(this.player_attack_y > -25) // bullet disappear if it reached at the edge of the map
    {
    fill('magenta');
    rect(this.player_attack_x, this.player_attack_y, this.player_attack_width, this.player_attack_height);
    }
  }
}