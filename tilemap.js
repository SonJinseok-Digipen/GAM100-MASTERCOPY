//This code made by Jinseok Son
//Do not change any of this Code If you can't understand how this code work


class Mushroom_tilemap {

    constructor() {
        this.xcordinate = 0;
        this.ycordinate = 0;
        this.rows = 30;
        this.cols = 30;
        this.tilesize = 25;
        this.layers = [];



        for (let i = 0; i < this.rows; i++) {
            this.layers[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.layers[i][j] = 0;
            }
        }


        for (let i = 0; i < 32; i++) {
            this.layers[int(random(3, this.rows))][int(random(0, this.cols))] = new Mushroom(int(random(3, this.rows) * 25),int(random(0, this.cols) * 25));
        }


        for (let i = this.rows - 3; i < this.rows; i++) {
            this.layers[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.layers[i][j] = 0;
            }
        }

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.layers[i][j] == 1) {
                    this.layers[i][j] = createVector(i * 25, j * 25);
                }
            }
        }



    }

    Show() {
        let current_mushnumber = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j <= this.cols; j++) {
                if (this.layers[i][j] == 0) {
                    push();
                    fill(255);
                    rect(j * this.tilesize, i * this.tilesize, this.tilesize, this.tilesize);
                    pop();
                }

                if (this.layers[i][j] != 0) {
                    push();
                    fill(0, 0, 255);
                    rect(j * this.tilesize, i * this.tilesize, this.tilesize, this.tilesize);
                    current_mushnumber++;
                    pop();

                }

            }
        }
    }


}