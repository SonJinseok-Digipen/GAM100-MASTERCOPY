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
        image(main_menu, 0, 0, 800, 800)
    }
}