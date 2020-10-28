class Collision{
  constructor(){
    this.iscollisionhappened = false;
    this.ismushroomhit = false;
    this.mushroom = new Mushroom();
  }
  
  update(){
    if(this.bullet.player_attack_x >= this.mushroom_x && this.bullet.player_attack_x <= this.mushroom_x + this.mushroom_size.tilesize && this.bullet.player_attack_y == this.mushroom_y + this.mushroom_size.tilesize){
      this.iscollisionhappened = true;
      this.ismushroomhit = true;
      this.mushroom.update();
      this.mushroom.update_mushroom();
    }
  }
  
  draw(){
    this.mushroom.draw();
  }
}