class MainMenu {
    constructor() {
        this.x = 100;
        this.y = 100;
    }

    Update() {
        if (keyIsPressed) {
            if (key == 'x') {
                a = 2;
            }
        }
    }

    Draw() {
        loadImage('unknown.png', img => {image(img, 0, 0);});
    }
}