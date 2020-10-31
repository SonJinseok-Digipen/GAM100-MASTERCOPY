class Play {
    constructor() {

    }

    Update() {
        
        centipede1.Update();
        centipede2.Update();
        centipede3.Update();
        /*
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
        */
        spawnflea();
        scolpion1.update();
        spider1.update();
        mushmap.update();
        player.update();
        player_bullet.update();
        scores.update();
    }

    Draw() {
        drawgrid();
        mushmap.draw();
        player.draw();
        player_bullet.draw();
        centipede1.Show();
        centipede2.Show();
        centipede3.Show();
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
        flea1.draw();
        scolpion1.draw();
        spider1.draw();
        scores.draw();
    }
}