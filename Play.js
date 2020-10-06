class Play {
    constructor() {
        this.x1 = 200;
        this.y2 = 200;
        this.q;
    }

    Update() {
        if (keyIsPressed) {
            if (key == 'a') {
                a = 1;
            }
            if (key == 's') {
                this.q = square(this.x1, this.y2, 500);
            }
        }
    }

    Draw() {
        push()
        fill(100);
        square(this.x1, this.y2, 400);
        this.q;
        pop()
    }
}