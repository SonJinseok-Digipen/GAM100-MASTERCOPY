class scolpion {
    constructor() {
        this.scolpion_randomy1 = random(3, 13);
        this.scolpion_randomy2;
        this.scolpion_randomx1 = random(3, 15);
        this.scolpion_randomx2;
        this.scolpion_x = -1 * int(this.scolpion_randomx1) * 25;
        this.scolpion_y = int(this.scolpion_randomy1) * 25;
        this.scolpion_size = 25;
        this.scolpion_speed = 5;
        this.wave = 1;
        this.num = 0;
        this.colsc = 1;
        this.scscore = 0;
        this.mtrue = 0;
        //this.scmush_random;
    }

    update() {

        //this.scmush_random = random(0, 4);

        if (4 <= this.wave && this.num == 0) {
            this.scolpion_x += this.scolpion_speed;

            for (let i = 0; i < mushmap.Mushrooms.length; i++) {
                if (dist(mushmap.Mushrooms[i].posx, mushmap.Mushrooms[i].posy, this.scolpion_x, this.scolpion_y) <= 25) {
                    this.mtrue = 1;
                }else{
                    this.mtrue = 0;
                }
            }
            if (this.colsc == 1 && this.mtrue == 0) {
                mushmap.Mushrooms.push(new Mushroom(int(this.scolpion_x / 25), this.scolpion_y / 25));
            }
            
        }
        //int(scoplpion_x / 25)
        if (800 < this.scolpion_x) {

            this.scolpion_randomy2 = random(3, 13);
            this.scolpion_randomx2 = random(3, 10);

           this.scolpion_x = -1 * int(this.scolpion_randomx2) * 25;
            this.scolpion_y = int(this.scolpion_randomy2) * 25;
            this.scolpion_xspeed = 5;

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

        if (this.colsc == 1) {
            for (let i = 0; i < player.bullets.length; i++) {
                if (dist(player.bullets[i].player_attack_x, player.bullets[i].player_attack_y, this.scolpion_x, this.scolpion_y) <= 25) {
                    this.colsc = 0;
                    this.scscore += 1000;
                    player.bullets.pop();
                }
            }
        }

    }

    draw() {
        if (this.colsc == 1) {
            /*push()
            fill('purple');
            ellipseMode(CORNER);
            circle(this.scolpion_x, this.scolpion_y, this.scolpion_size);
            pop()*/
            image(scolpion_art ,this.scolpion_x, this.scolpion_y, this.scolpion_size * 2);           
        }
    }
}