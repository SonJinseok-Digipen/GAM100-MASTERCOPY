class Mushroom{
  constructor(x, y){
    this.mushroom_x = x;
    this.mushroom_y = y;
    this.mushroom_life = 4;
    this.ismushroomdestroyed = false;
    this.mushroom_size = new Mushroom_tilemap();
    this.bullet = new Player();
    this.bullet_update = this.bullet.update_bullet();
    this.bullet_update2 = this.bullet.update();
  }
  
  update(){
    this.bullet_update2 = true;
    this.bullet_update = true;
    if(dist(this.mushroom_x, this.mushroom_y + this.mushroom_size.tilesize, this.bullet.player_attack_x + this.bullet.player_attack_width, this.bullet.player_attack_y) == 0){
      this.mushroom_life--;
    fill('orange');  
    square(this.mushroom_x, this.mushroom_y, this.mushroom_size.tilesize);
    }
    //console.log(this.mushroom_life);
    //console.log(this.bullet.player_attack_x + this.bullet.player_attack_width)
    //console.log(this.bullet.player_attack_y);
    console.log(dist(this.mushroom_x, this.mushroom_y + this.mushroom_size.tilesize, this.bullet.player_attack_x + this.bullet.player_attack_width, this.bullet.player_attack_y))
  }
  
  
  draw(){
    push()
    fill('cyan');
    square(this.mushroom_x, this.mushroom_y, this.mushroom_size.tilesize);
    pop()
  }
}