/*File Name: spider.js
   Project Name: Centipede
   The course name: GAM100
   The term: Fall 2020
   Author(s): 

   All content © 2020 DigiPen (USA) Corporation, all rights reserved.*/

class spider {
    constructor() {
        this.spider_random1 = random(16, 29);
        this.spider_random2 = 0;
        // this.spider_random3;
        this.spider_random4 = 0;
        this.spider_random5 = random(0, 4);
        this.spider_random3 = 0;
      
        this.spider_checkdown = 0;
        this.spider_checkup = 0;
        this.spider_x = -10;
        this.spider_y = int(this.spider_random1) * 25;
        this.spider_size = 25;
        this.spider_xspeed = 0;
        this.spider_yspeed = 0;
        this.spider_life = 1;
        if (int(this.spider_random2) == 0) {
            this.spider_x = 0;
            this.spider_xspeed = 10;
        } else {
            this.spider_x = 725;
            this.spider_xspeed = -10;
        }
    }

    update() {
        this.spider_x += this.spider_xspeed;
        this.spider_y += this.spider_yspeed;

        // if (frameCount % 5 == 0) {
        //     this.spider_random3 = random(0, 4);
        // }

        if (400 <= this.spider_y && this.spider_y <= 725) {
            if (this.spider_y == 550) {
                this.spider_checkdown = 0;
                this.spider_checkup = 0;
            }
            if (int(this.spider_random3) == 0) {
                if (this.spider_checkdown == 0) {
                    this.spider_yspeed = 10;
                } else {
                    this.spider_yspeed = -10;
                }
                // this.spider_yspeed = 10;
                if (int(this.spider_random2) == 0) {
                    this.spider_xspeed = 10;
                } else {
                    this.spider_xspeed = -10;
                }
                if (frameCount % 5 == 0) {
                    this.spider_random3 = random(0, 4);
                }
            } else if (int(this.spider_random3) == 1) {
                if (this.spider_checkup == 0) {
                    this.spider_yspeed = -10;
                } else {
                    this.spider_yspeed = 10;
                }
                // this.spider_yspeed = -10;
                if (int(this.spider_random2) == 0) {
                    this.spider_xspeed = 10;
                } else {
                    this.spider_xspeed = -10;
                }
                if (frameCount % 5 == 0) {
                    this.spider_random3 = random(0, 4);
                }
            } else if (int(this.spider_random3) == 2) {
                if (this.spider_checkdown == 0) {
                    this.spider_yspeed = 10;
                } else {
                    this.spider_yspeed = -10;
                }
                // this.spider_yspeed = 10;
                this.spider_xspeed = 0;
                if (frameCount % 5 == 0) {
                    this.spider_random3 = random(0, 4);
                }
            } else {
                if (this.spider_checkup == 0) {
                    this.spider_yspeed = -10;
                } else {
                    this.spider_yspeed = 10;
                }
                // this.spider_yspeed = -10;
                this.spider_xspeed = 0;
                if (frameCount % 5 == 0) {
                    this.spider_random3 = random(0, 4);
                }
            }
        } else if (this.spider_y < 400) {
            this.spider_yspeed = 10;
            this.spider_checkup = 1;
            this.spider_checkdown = 0;
        } else if (725 < this.spider_y) {
            this.spider_yspeed = -10;
            this.spider_checkup = 0;
            this.spider_checkdown = 1;
        }

        if (this.spider_x < -75 || 800 < this.spider_x) {
            this.spider_random2 = random(0, 2);
            this.spider_random4 = random(16, 29);
            if (int(this.spider_random2) == 0) {
                this.spider_x = 0;
                this.spider_y = int(this.spider_random4) * 25;
                this.spider_xspeed = 10;
            } else {

                this.spider_x = 725;
                this.spider_y = int(this.spider_random4) * 25;
                this.spider_xspeed = -10;
            }
        }
    }

    draw() {
        push()
        fill('purple');
        ellipseMode(CORNER);
        circle(this.spider_x, this.spider_y, this.spider_size);
        pop()
    }
}
