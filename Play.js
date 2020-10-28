class Play {
    constructor() {
        frameRate(10);
    }

    Update() {
        centipede1.Update();
        tail1.Update();
        tail2.Update();
        tail3.Update();
        tail4.Update();
        tail5.Update();
        tail6.Update();
        tail7.Update();
        tail8.Update();
        tail9.Update();
        tail10.Update();
        tail11.Update();
        flea1.update();
        scolpion1.update();
        player.update();
        spider1.update();
        player_bullet.update();
        mushmap.update();
        scores.update();
    }

    Draw() {
        drawgrid();
        mushmap.draw();
        player_bullet.draw();
        centipede1.Show();
        tail1.Show();
        tail2.Show();
        tail3.Show();
        tail4.Show();
        tail5.Show();
        tail6.Show();
        tail7.Show();
        tail8.Show();
        tail9.Show();
        tail10.Show();
        tail11.Show();
        player.draw();
        flea1.draw();
        scolpion1.draw();
        spider1.draw();
        scores.draw();
    }
}