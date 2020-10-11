class Play {
    constructor() {
        frameRate(10);
    }

    Update() {
        centipede1.Update();
        tail1.Update();
        tail2.Update();
        tail3.Update();
        flea1.update();
        scolpion1.update();
        player.update();
        spider1.update();
    }

    Draw() {
        drawgrid();
        player.update_bullet();
        centipede1.Show();
        tail1.Show();
        tail2.Show();
        tail3.Show();
        player.draw();
        flea1.draw();
        scolpion1.draw();
        spider1.draw();
    }
}