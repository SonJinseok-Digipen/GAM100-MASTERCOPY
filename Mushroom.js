class Mushroom{
  constructor(x, y){
    this.mushroom_x = x;
    this.mushroom_y = y;
    this.mushroom_life = 3;
    this.ismushroomdestroyed = false;
    this.mushroom_size = new Mushroom_tilemap();
    this.bullet = new Player();
  }
  
  update(){
    this.bullet.update();
    this.bullet.update_bullet();
    if((this.bullet.player_attack_x >= this.mushroom_x && this.bullet.player_attack_x <= this.mushroom_x + this.mushroom_size.tilesize)  && (this.bullet.player_attack_y == this.mushroom_y + this.mushroom_size.tilesize) || 
       (this.bullet.player_attack_x + this.bullet.player_attack_width <= this.mushroom_x + this.mushroom_size.tilesize && this.bullet.player_attack_x + this.bullet.player_attack_width >= this.mushroom_x) && (this.bullet.player_attack_y == this.mushroom_y + this.mushroom_size.tilesize)){
      this.mushroom_life--;
      this.bullet.isbulletexist = false;
      //console.log(this.bullet.isbulletexist)
    }
    //console.log(this.mushroom_life);
    //console.log(this.bullet.player_attack_x + this.bullet.player_attack_width)
    //console.log(this.bullet.player_attack_y)
    //console.log(this.bullet.player_attack_x)

   /* if(this.bullet.player_attack_y == (this.mushroom_y + this.mushroom_size.tilesize)){
      this.mushroom_life -= 1;
    }*/
  }

  draw(){
    push()
    fill('cyan');
    square(this.mushroom_x, this.mushroom_y, this.mushroom_size.tilesize);
    pop()
    if(this.mushroom_life < 0){
        this.ismushroomdestroyed = true;
        fill('silver')
        square(this.mushroom_x, this.mushroom_y, this.mushroom_size.tilesize)
      }
      this.ismushroomdestroyed = false;
  }
}