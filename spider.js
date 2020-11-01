class spider {
    constructor() {
        this.spider_random1 = random(16, 29);
        this.spider_random2;
        // this.spider_random3;
        this.spider_random4;
        this.spider_random5 = random(0, 4);
        this.spider_random3;
        this.spider_checkdown = 0;
        this.spider_checkup = 0;
        this.spider_x = -10;
        this.spider_y = int(this.spider_random1) * 25;
        this.spider_size = 25;
        this.spider_xspeed = 0;
        this.spider_yspeed = 0;

        this.colsp = 1;
        this.spscore = 0;
        this.plandsp = 0;
        this.spsd = 0;

        if (int(this.spider_random2) == 0) {
            this.spider_x = 0;
            this.spider_xspeed = 5;
        } else {
            this.spider_x = 725;
            this.spider_xspeed = -5;
        }
    }

    update() {
        this.spider_x += this.spider_xspeed;
        this.spider_y += this.spider_yspeed;

        // if (frameCount % 5 == 0) {
        //     this.spider_random3 = random(0, 4);
        // }

        if (525 <= this.spider_y && this.spider_y <= 725) {
            this.spsd = 1;
            if (this.spider_y == 600) {
                this.spider_checkdown = 0;
                this.spider_checkup = 0;
            }
            if (int(this.spider_random3) == 0) {
                if (this.spider_checkdown == 0) {
                    this.spider_yspeed = 5;
                } else {
                    this.spider_yspeed = -5;
                }
                // this.spider_yspeed = 10;
                if (int(this.spider_random2) == 0) {
                    this.spider_xspeed = 5;
                } else {
                    this.spider_xspeed = -5;
                }
                if (frameCount % 5 == 0) {
                    this.spider_random3 = random(0, 4);
                }
            } else if (int(this.spider_random3) == 1) {
                if (this.spider_checkup == 0) {
                    this.spider_yspeed = -5;
                } else {
                    this.spider_yspeed = 5;
                }
                // this.spider_yspeed = -10;
                if (int(this.spider_random2) == 0) {
                    this.spider_xspeed = 5;
                } else {
                    this.spider_xspeed = -5;
                }
                if (frameCount % 5 == 0) {
                    this.spider_random3 = random(0, 4);
                }
            } else if (int(this.spider_random3) == 2) {
                if (this.spider_checkdown == 0) {
                    this.spider_yspeed = 5;
                } else {
                    this.spider_yspeed = -5;
                }
                // this.spider_yspeed = 10;
                this.spider_xspeed = 0;
                if (frameCount % 5 == 0) {
                    this.spider_random3 = random(0, 4);
                }
            } else {
                if (this.spider_checkup == 0) {
                    this.spider_yspeed = -5;
                } else {
                    this.spider_yspeed = 5;
                }
                // this.spider_yspeed = -10;
                this.spider_xspeed = 0;
                if (frameCount % 5 == 0) {
                    this.spider_random3 = random(0, 4);
                }
            }
        } else if (this.spider_y < 400) {
            this.spider_yspeed = 5;
            this.spider_checkup = 1;
            this.spider_checkdown = 0;
        } else if (725 < this.spider_y) {
            this.spider_yspeed = -5;
            this.spider_checkup = 0;
            this.spider_checkdown = 1;
        }

        if (this.spider_x < -75 || 800 < this.spider_x) {
            this.spsd = 0;
            this.colsp = 1;
            this.spider_random2 = random(0, 2);
            this.spider_random4 = random(16, 29);
            if (int(this.spider_random2) == 0) {
                this.spider_x = 0;
                this.spider_y = int(this.spider_random4) * 25;
                this.spider_xspeed = 5;
            } else {

                this.spider_x = 725;
                this.spider_y = int(this.spider_random4) * 25;
                this.spider_xspeed = -5;
            }
        }

        //거미 버섯
        for (let i = 0; i < mushmap.Mushrooms.length; i++) {
            if (dist(mushmap.Mushrooms[i].posx, mushmap.Mushrooms[i].posy, this.spider_x, this.spider_y) <= 25) {
                mushmap.Mushrooms.splice(i,1);
            }
        }

        for (let i = 0; i < player.bullets.length; i++) {
            if (dist(player.bullets[i].player_attack_x, player.bullets[i].player_attack_y, this.spider_x, this.spider_y) <= 25) {
                if (this.colsp == 1) {
                    this.plandsp = player.player_y - this.spider_y;
                    if (this.plandsp <= 400) {
                        this.spscore += 300;
                        if (this.plandsp <= 100) {
                            this.spscore += 300;
                            if (this.plandsp <= 50) {
                                this.spscore += 300;
                            }
                        }
                    }
                }
                this.colsp = 0;
                player.bullets.pop();
                if (this.plandsp < 0) {
                    this.plandsp *= -1;
                }

            }
        }

    }

    draw() {
        if (this.colsp == 1) {
            /*push()
            fill('purple');
            ellipseMode(CORNER);
            circle(this.spider_x, this.spider_y, this.spider_size);
            pop()*/
            image(spider_art, this.spider_x, this.spider_y, this.spider_size * 2);
            if(this.spsd == 1){
                if(frameCount % 80 == 0){
                    s1.play();
                }
            }  
        }
    }
}
