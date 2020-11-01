class Flea {
    constructor() {
        this.flea_randomx1 = random(1, 29);
        this.flea_randomx2;

        this.flmush_random;

        this.flea_x = int(this.flea_randomx1) * 25;
        this.flea_y = -75;
        this.flea_size = 25;
        this.flea_speed = 5;
        this.num = 0;
        this.wave = 1;
        this.mushroomcount = 0;
        this.colfl = 1;
        this.flscore = 0;

        this.mtrue = 0;

    }

    update() {
        if (frameCount % 60 == 0) {
            for (let i = tilemap1.rows - 5; i < tilemap1.rows; i++) {
                for (let j = 0; j < tilemap1.cols; j++) {
                    if (tilemap1.layers[i][j] != 0) {
                        this.mushroomcount += 1;
                    }
                }
            }
        }
        if (this.mushroomcount > 10) {
            this.num += 1;
        }

        this.flmush_random = random(0, 4);

        if (2 <= this.wave && this.num > 0) {
            this.flea_y += this.flea_speed;
            for (let i = 0; i < mushmap.Mushrooms.length; i++) {
                if (dist(mushmap.Mushrooms[i].posx, mushmap.Mushrooms[i].posy, this.flea_x, this.flea_y) <= 25) {
                    this.mtrue = 1;
                } else {
                    this.mtrue = 0;
                }
            }
            if (int(this.flmush_random) == 1 && this.colfl == 1 && int(this.flea_y / 25) != 29 && this.mtrue == 0) {
                mushmap.Mushrooms.push(new Mushroom(this.flea_x / 25, int(this.flea_y / 25)));
            }

        }
        if (800 < this.flea_y) {

            this.flea_randomx2 = random(1, 29);

            this.flea_x = int(this.flea_randomx2) * 25;
            this.flea_y = -75;
            this.flea_yspeed = 5;
            this.num = 10;
            this.mushroomcount = 0;
            this.num2 = 0;

            this.colfl = 1;

        }

        if (keyIsPressed) {
            if (key == 's') {
                this.wave += 1;
            }
        }



        if (this.colfl == 1) {
            for (let i = 0; i < player.bullets.length; i++) {
                if (dist(player.bullets[i].player_attack_x, player.bullets[i].player_attack_y, this.flea_x, this.flea_y) <= 25) {
                    this.colfl = 0;
                    this.flscore += 200;
                    player.bullets.pop();
                }
            }
        }

    }

    draw() {
        if (this.colfl == 1) {
            push()
            fill('purple');
            ellipseMode(CORNER);
            image(flea_art, this.flea_x, this.flea_y, this.flea_size);
            textSize(50)
            text(int(this.flmush_random), 200, 200)
            pop()
        }

    }
}