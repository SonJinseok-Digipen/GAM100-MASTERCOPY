/*File Name: Turtle.js
   Project Name: Centipede
   The course name: GAM100
   The term: Fall 2020
   Author(s): 

   All content © 2020 DigiPen (USA) Corporation, all rights reserved.*/

class Turtle{
  constructor(){
    this.turtle_x = random(0, width);
    this.turtle_y = 0;
    this.turtle_size = 40;
    this.turtle_speed = 5;
  }
  
  update(){
    this.turtle_y += this.turtle_speed;
  }
  
  draw(){
    push()
    fill('purple');
    ellipseMode(CORNER);
    circle(this.turtle_x, this.turtle_y, this.turtle_size);
    pop()
  }
}