class Mushroom {
    constructor(x, y) {
        this.posx = x * 25;
        this.posy = y * 25;
        this.size = 25;
        this.isdie = false;
        this.life = 4;
        this.IsCollison = false;

    }

    update() {

        for (let i = 0; i < player.bullets.length; i++) {
            if (this.posx <= player.bullets[i].player_attack_x && this.posx + this.size >= player.bullets[i].player_attack_x &&
                this.posy + this.size == player.bullets[i].player_attack_y && this.life > 0) {
                this.life = this.life - 1;
                player.bullets.pop();
            }
        }
        if (this.life == 0) {
            mushmap.mscore += 1;
             tilemap1.layers[this.posy/25][this.posx/25]=0;
            this.isdie = true;
        }

    }

    draw() {
        if (this.isdie == false) {
            if (this.life == 4) {
                image(full_mushroom_art, this.posx, this.posy, this.size);
            }
            //색깔에 따라서 버섯상태에 대한 이미지를 넣어줘야함
            if (this.life == 3) {
                image(worn_mushroom_art, this.posx, this.posy, this.size);
            }
            //색깔에 따라서 버섯상태에 대한 이미지를 넣어줘야함
            if (this.life == 2) {
                image(damaged_mushroom_art, this.posx, this.posy, this.size);
            }
            //색깔에 따라서 버섯상태에 대한 이미지를 넣어줘야함
            if (this.life == 1) {
                image(badly_damaged_mushroom_art, this.posx, this.posy, this.size);
            }
        }


    }

}
/*if(this.posx <= player.bullets[i].player_attack_x && this.posx + this.size >= player.bullets[i].player_attack_x && 
this.posy == player.bullets[i].player_attack_y && player_bullet.isbulletexist == true)*/