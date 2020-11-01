class score {
    constructor() {
        this.score1 = 0;
        this.score2 = 0;
        this.scnum = 0;
        this.dietxt = 0;
        this.exlife = 0;
        this.scsc = 600;
        this.exnum1 = 1;
        this.exnum2 = 2;
    }
    update() {
        if (player.player_life >= 0) {
            this.score1 = flea1.flscore + scolpion1.scscore + spider1.spscore + mushmap.mscore;
            this.scnum = 0;
            this.dietxt = 0;


            if ((this.scsc * this.exnum1) <= this.score1 && this.score1 <= (this.scsc * this.exnum2)) {
                if (player.player_life == 0) {
                    player.player_life = 1;
                    this.exnum1 += 1;
                    this.exnum2 += 1;
                } else if (player.player_life == 1) {
                    player.player_life = 2;
                    this.exnum1 += 1;
                    this.exnum2 += 1;
                } else if (player.player_life == 2) {
                    player.player_life = 3;
                    this.exnum1 += 1;
                    this.exnum2 += 1;
                }else if (player.player_life == 3) {
                    player.player_life = 4;
                    this.exnum1 += 1;
                    this.exnum2 += 1;
                }
                 else if (player.player_life == 4) {
                    player.player_life = 5;
                    this.exnum1 += 1;
                    this.exnum2 += 1;
                }
                // this.exnum1 += 1;
                // this.exnum2 += 1;
            }

        }
        if (player.player_life < 0) {
            this.score2 += this.score1;
            this.score1 = 0;
            this.dietxt = 1;
            if (keyIsPressed) {
                if (key == 'x') {
                    a = 1;
                    this.scnum = 1;
                }
            }
            // if (scores.scnum == 1) {
            //     CurrentScenenum = 1;
            // =
        }
    }
    draw() {
        // push();
        // stroke('black');
        // strokeWeight(4);
        // textSize(20);
        // fill('yellow');
        // text(this.exnum2, 100, 100);
        // pop();

        push();
        fill('black');
        rect(0, 0, 800, 75);
        pop();
        for (let i = 0; i < player.player_life; i++) {
            if (player.player_life >= 0) {
                image(player_art, 125 + i * 25, 30, 20)
            }
        }
        push();
        stroke('black');
        strokeWeight(4);
        textSize(20);
        fill('yellow');
        text(this.score1, 25, 50);
        pop();
        push();
        textSize(20);
        fill('green');
        text(this.score2, 400, 50);
        pop();

        if (this.dietxt == 1) {
            push();
            textSize(40);
            fill('yellow');
            text('Game Over', 300, 400);
            pop();
        }

    }
}