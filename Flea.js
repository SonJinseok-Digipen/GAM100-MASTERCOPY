class Flea {
    constructor() {
        this.flea_randomx1 = random(1, 29);
        this.flea_randomx2 = random(1, 29);
        this.flea_life = 1;
        this.flea_x = int(this.flea_randomx1) * 25;
        this.flea_y = -50;
        this.flea_size = 25;
        this.flea_speed = 5;
        this.num = 10;
        this.num2 = 0;
        this.wave = 1;
        this.mushroomcount = 0;
      
    }

    update() {
        // this.flea_y += this.flea_speed;


        if (this.mushroomcount < 10) {
            this.num2 += 1;
        }

        if (2 <= this.wave && this.num2 > 0) {

            this.flea_y += this.flea_speed;

        }
        if (800 < this.flea_y) {

            this.flea_randomx2 = random(1, 29);

            this.flea_x = int(random(1, 29)) * 25;
            this.flea_y = -50;
            this.flea_yspeed = 5;
            this.num = 10;
            this.num2 = 0;

        }
      if(this.flea_life > 0 && player.isbulletexist == true){
          if(player.player_attack_x <= this.flea_x + this.flea_size &&     player.player_attack_x + player.player_attack_width >= this.flea_x - this.flea_size && this.flea_y + this.flea_size > player.player_attack_y && this.flea_y - 15 < player.player_attack_y){
      this.flea_life = 0;
      player.isbulletexist = false;
      }
         }
      
        /*dist(player.player_attack_x, player.player_attack_y, this.flea_x + this.flea_size / 2, this.flea_y + this.flea_size / 2) < this.flea_size / 2 || dist(player.player_attack_x + player.player_attack_width, player.player_attack_y, this.flea_x + this.flea_size / 2, this.flea_y + this.flea_size / 2) < this.flea_size / 2 || dist(player.player_attack_x + player.player_attack_width / 2, player.player_attack_y, this.flea_x + this.flea_size / 2, this.flea_y + this.flea_size / 2) < this.flea_size / 2*/
      //console.log(player.player_attack_y)
      //dist(player.player_attack_x, player.player_attack_y, this.flea_x, this.flea_y) < this.flea_size / 2
        if (keyIsPressed) {
            if (key == 'q') {
                this.num += 1;
            }
            if (key == 'w') {
                this.num -= 1;
            }
            if (key == 's') {
                this.wave += 1;
            }
        }

        // for (let i = 0; i < tilemap1.rows; i++) {
        //     for (let j = 0; j < tilemap1.cols; j++) {
        //         if ()//
        //             if (tilemap1.layers[i][j] == 1) {
        //                 this.mushroomcount += 1;
        //             }
        //     }
        // }
        for (let i = tilemap1.rows - 3; i < tilemap1.rows; i++) {
            for (let j = 0; j < tilemap1.cols; j++) {
                if (tilemap1.layers[i][j] == 1) {
                        this.mushroomcount += 1;
                    }
            }
        }
      //console.log(this.flea_y)
      //console.log(this.flea_life)
      //console.log(this.flea_life)
    }

    draw() {
      if(this.flea_life > 0){
          push()
          fill('purple');
          ellipseMode(CORNER);
          circle(this.flea_x, this.flea_y, this.flea_size);
          pop()
        }
    }
}
