class Player {
    constructor(mushmap) {
        this.player_size = 25;
        this.player_x = width / 2;
        this.player_y = height - this.player_size;
        this.map_boundary_x = width - 25;
        this.map_boundary_y = height - 175;
        this.player_velocity1 = 5;
        this.player_velocity2 = -5;
        this.player_acceleration1 = 2;
        this.player_acceleration2 = -2;
        this.player_max_velocity = 40;
        this.isthiskeypressed = false;
        this.bullets = [];

        this.colc = 1;
        this.player_life = 2;
    }

    update() {

        if (keyIsPressed) {
            if (key == 'c' || key == 'C') {
                if (this.bullets.length < 1) {
                    //총알 생성위치 결정 
                    this.bullets.push(new bullet(this.player_x, this.player_y));
                }
            }

            if (keyCode == RIGHT_ARROW && this.player_x < this.map_boundary_x && this.t1 == 0) {
                // this.player_x += this.player_velocity1;
                for (let i = 0; i < mushmap.Mushrooms.length; i++) {
                    if (dist(mushmap.Mushrooms[i].posx, mushmap.Mushrooms[i].posy, this.player_x, this.player_y) <= 25) {
                        this.t1 = 1;
                        this.t2 = 0;
                        this.t3 = 0;
                        this.t4 = 0;
                    } else {
                        // this.player_velocity1 = 5;
                    }
                }
                this.player_x += this.player_velocity1;
                if (this.player_x < this.map_boundary_x && this.player_x > 0) {
                    this.player_velocity1 += this.player_acceleration1;
                }
                if (this.player_x + this.player_velocity1 > this.map_boundary_x) {
                    this.player_x = this.map_boundary_x;
                    this.player_velocity1 = 5;
                }
                /*if(this.player_velocity > this.player_max_velocity){
                  this.player_velocity = this.player_max_velocity;
                  this.player_acceleration = 0;
                }*/

            }
            if (keyCode == LEFT_ARROW && this.player_x > 0 && this.t2 == 0) {
                // this.player_x += this.player_velocity2;
                for (let i = 0; i < mushmap.Mushrooms.length; i++) {
                    if (dist(mushmap.Mushrooms[i].posx, mushmap.Mushrooms[i].posy, this.player_x, this.player_y) <= 25) {
                        this.t1 = 0;
                        this.t2 = 1;
                        this.t3 = 0;
                        this.t4 = 0;
                    } else {
                        // this.player_velocity2 = -5;
                    }
                }
                this.player_x += this.player_velocity2;

                if (this.player_x < this.map_boundary_x && this.player_x > 0) {
                    this.player_velocity2 += this.player_acceleration2;
                }
                if (this.player_x + this.player_velocity2 < 0) {
                    this.player_x = 0;
                    this.player_velocity2 = -5;
                }

                /*if(this.player_velocity > this.player_max_velocity){
                  this.player_velocity = this.player_max_velocity;
                  this.player_acceleration = 0;
                }*/
            }
            if (keyCode == UP_ARROW && this.player_y > this.map_boundary_y && this.t3 == 0) {
                // this.player_y += this.player_velocity2;
                for (let i = 0; i < mushmap.Mushrooms.length; i++) {
                    if (dist(mushmap.Mushrooms[i].posx, mushmap.Mushrooms[i].posy, this.player_x, this.player_y) <= 25) {
                        this.t1 = 0;
                        this.t2 = 0;
                        this.t3 = 1;
                        this.t4 = 0;
                    } else {
                        // this.player_velocity2 = -5;
                    }
                }
                this.player_y += this.player_velocity2;
                if (this.player_y + this.player_velocity2 < this.map_boundary_y) {
                    this.player_y = this.map_boundary_y;
                    this.player_velocity2 = -5;
                }
            }
            if (keyCode == DOWN_ARROW && this.player_y < height - 25 && this.t4 == 0) {
                // this.player_y += this.player_velocity1;
                for (let i = 0; i < mushmap.Mushrooms.length; i++) {
                    if (dist(mushmap.Mushrooms[i].posx, mushmap.Mushrooms[i].posy, this.player_x, this.player_y) <= 25) {
                        this.t1 = 0;
                        this.t2 = 0;
                        this.t3 = 0;
                        this.t4 = 1;
                    } else {
                        // this.player_velocity1 = 5;
                    }
                }
                this.player_y += this.player_velocity1;
                if (this.player_y + this.player_velocity1 > height - 25) {
                    this.player_velocity1 = 5;
                }
            }
        } else {
            this.player_velocity1 = 5;
            this.t1 = 0;
            this.t2 = 0;
            this.t3 = 0;
            this.t4 = 0;
        }

        //충돌
        if (spider1.colsp == 1) {
            if (dist(spider1.spider_x, spider1.spider_y, this.player_x, this.player_y) <= 25) {
                this.colc = 0;
            }
        }
        if (flea1.colfl == 1) {
            if (dist(flea1.flea_x, flea1.flea_y, this.player_x, this.player_y) <= 25) {
                this.colc = 0;
            }
        }

        //죽음
        if (player.colc == 0) {

            //죽고 생성되는 부분
            if (frameCount % 90 == 0) {
                this.player_life -= 1;
                this.colc = 1;
            }
        }

        if (scores.scnum == 1) {
            this.player_life = 2;
        }





        //총알 업데이트
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].update();
            if (this.bullets[i].player_attack_y + 50 < 25) {
                this.bullets.pop();
            }

        }

    }

    draw() {
        if (this.colc == 1 && this.player_life >= 0) {
            image(player_art, this.player_x, this.player_y, this.player_size)
                //총알 그리는 부분
            for (let i = 0; i < this.bullets.length; i++) {
                this.bullets[i].draw();
            }
        }
    }
}