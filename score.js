class score {
    constructor() {
        this.score1 = 0;
        this.score2 = 0;
        this.scnum = 0;
        this.dietxt = 0;
    }
    update() {
        if (player.player_life >= 0) {
            this.score1 = flea1.flscore + scolpion1.scscore + spider1.spscore;
            this.scnum = 0;
            this.dietxt = 0;
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
            // }
        }
    }
    draw() {
        push();
        fill('white');
        rect(0, 0, 800, 75);
        pop();
        for (let i = 0; i < player.player_life; i++) {
            if (player.player_life >= 0) {
                push();
                fill('yellow');
                rect(125 + i * 25, 30, 20, 20);
                pop();
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
            fill('Yellow');
            text('Game Over', 300, 400);
            pop();
        }

    }
}