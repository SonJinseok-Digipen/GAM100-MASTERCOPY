class Flea {
    constructor() {
        this.flea_randomx1 = random(1, 29);
        this.flea_randomx2;

        this.flea_x = int(this.flea_randomx1) * 25;
        this.flea_y = -75;
        this.flea_size = 25;
        this.flea_speed = 10;
        this.num = 10;
        this.num2 = 0;
        this.wave = 1;
        this.mushroomcount = 0;
        this.colfl = 1;
        this.flscore = 0;
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

            this.flea_x = int(this.flea_randomx2) * 25;
            this.flea_y = -75;
            this.flea_yspeed = 10;
            this.num = 10;
            this.num2 = 0;

            this.colfl = 1;

        }

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

        
        for (let i = tilemap1.rows - 3; i < tilemap1.rows; i++) {
            for (let j = 0; j < tilemap1.cols; j++) {
                if (tilemap1.layers[i][j] == 1) {
                    this.mushroomcount += 1;
                }
            }
        }

        if (this.colfl == 1) {
            for (let i = 0; i < player.bullets.length; i++) {
                if (dist(player.bullets[i].player_attack_x, player.bullets[i].player_attack_y, this.flea_x, this.flea_y) <= 25) {
                    this.colfl = 0;
                    this.flscore += 1;
                    player.bullets.pop();
                }
            }
        }

    }

    draw() {
        if (this.colfl == 1) {
            /*push()
            fill('purple');
            ellipseMode(CORNER);
            circle(this.flea_x, this.flea_y, this.flea_size);
            pop()*/
            image(flea_art, this.flea_x, this.flea_y, this.flea_size);
        }
    }
}
