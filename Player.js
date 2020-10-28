class Player {
    constructor() {
        this.player_size = 25;
        this.player_x = width / 2;
        this.player_y = height - this.player_size;
        this.map_boundary_x = width - 25;
        this.map_boundary_y = height - 175;
        this.player_velocity = 25;
        this.player_acceleration = 1;
        this.player_max_velocity = 40;
        this.isthiskeypressed = false;
        //this.bullet = new bullet(this.player_x, this.player_y);
        //this.spider1 = new spider();
        this.bullets = [];

        this.colc = 1;
        this.player_life = 2;
    }

    update() {

        if (keyIsPressed) {
            if (key == 'c') {
                this.isthiskeypressed = true;
                this.bullets.push(new bullet(this.player_x, this.player_y));
            }
            if (keyCode == RIGHT_ARROW && this.player_x < this.map_boundary_x) {
                this.player_x += this.player_velocity;
                if (this.player_x < this.map_boundary_x && this.player_x > 0) {
                    this.player_velocity += this.player_acceleration;
                }
                if (this.player_x + this.player_velocity > this.map_boundary_x) {
                    this.player_x = this.map_boundary_x;
                    this.player_velocity = 25;
                }
                /*if(this.player_velocity > this.player_max_velocity){
                  this.player_velocity = this.player_max_velocity;
                  this.player_acceleration = 0;
                }*/

            }
            if (keyCode == LEFT_ARROW && this.player_x > 0) {
                this.player_x -= this.player_velocity;
                if (this.player_x < this.map_boundary_x && this.player_x > 0) {
                    this.player_velocity += this.player_acceleration;
                }
                if (this.player_x - this.player_velocity < 0) {
                    this.player_x = 0;
                    this.player_velocity = 25;
                }

                /*if(this.player_velocity > this.player_max_velocity){
                  this.player_velocity = this.player_max_velocity;
                  this.player_acceleration = 0;
                }*/
            }
            if (keyCode == UP_ARROW && this.player_y > this.map_boundary_y) {
                this.player_y -= this.player_velocity;
                /*if(this.player_y < this.map_boundary_y && this.player_y > height-25){
          this.player_velocity += this.player_acceleration;
        }*/
                if (this.player_y - this.player_velocity < this.map_boundary_y) {
                    this.player_y = this.map_boundary_y;
                    this.player_velocity = 25;
                }
            }
            if (keyCode == DOWN_ARROW && this.player_y < height - 25) {
                this.player_y += this.player_velocity;
                /*if(this.player_y < this.map_boundary_y && this.player_y > height-25){
                  this.player_velocity += this.player_acceleration;
                }*/
                if (this.player_y + this.player_velocity > height - 25) {
                    this.player_y = height - 25;
                    this.player_velocity = 25;
                }
            }
        } else {
            this.player_velocity = 25;
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
            if (frameCount % 10 == 0) {
                this.player_life -= 1;
                this.colc = 1;
            }
        }

        if(scores.scnum == 1){
          this.player_life = 2;
        }




        ///////////////////////////////////////총알
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].update();
            if (this.bullets[this.bullets.length - 1].player_attack_y < 30) {
                this.bullets.pop();
            }
        }

        // for (let i = 0; i < this.bullets.length; i++) {
        //     this.bullets[i].update();

        // }

    }

    draw() {
        if (this.colc == 1 && this.player_life >= 0) {
            push()
            fill('gold');
            rect(this.player_x, this.player_y, this.player_size, this.player_size)
            pop()

            //총알 그리는 부분
            for (let i = 0; i < this.bullets.length; i++) {
                this.bullets[i].draw();
            }
        }
        // for (let i = 0; i < this.bullets.length; i++) {
        //     this.bullets[i].draw();
        // }
    }
}