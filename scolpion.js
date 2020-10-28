class scolpion {
    constructor() {
        this.scolpion_randomy1 = random(1, 13);
        this.scolpion_randomy2;
        this.scolpion_randomx1 = random(3, 15);
        this.scolpion_randomx2;
        this.scolpion_x = -1 * int(this.scolpion_randomx1) * 25;
        this.scolpion_y = int(this.scolpion_randomy1) * 25;
        this.scolpion_size = 25;
        this.scolpion_speed = 10;
        this.wave = 1;
        this.num = 0;
        this.colsc = 1;
        this.scscore = 0;
    }

    update() {
        if (4 <= this.wave && this.num == 0) {
            this.scolpion_x += this.scolpion_speed;
        }
        if (800 < this.scolpion_x) {

            this.scolpion_randomy2 = random(1, 13);
            this.scolpion_randomx2 = random(3, 10);

            this.scolpion_x = -1 * int(this.scolpion_randomx2) * 25;
            this.scolpion_y = int(this.scolpion_randomy2) * 25;
            this.scolpion_xspeed = 10;

            this.colsc = 1;

            this.num = 1;
        }

        if (keyIsPressed) {
            if (key == 'a') {
                this.num = 0;
            }
            if (key == 's') {
                this.wave += 1;
            }
        }

        if (this.colfl == 1) {
            for (let i = 0; i < player.bullets.length; i++) {
                if (dist(player.bullets[i].player_attack_x, player.bullets[i].player_attack_y, this.scolpion_x, this.scolpion_y) <= 25) {
                    this.colsc = 0;
                    this.scscore += 1;
                }
            }
        }

    }

    draw() {
        if (this.colsc == 1) {
            push()
            fill('purple');
            ellipseMode(CORNER);
            circle(this.scolpion_x, this.scolpion_y, this.scolpion_size);
            pop()
        }
    }
}