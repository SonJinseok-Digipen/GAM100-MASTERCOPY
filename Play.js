class Play {
    constructor() {
        frameRate(10);
    }

    Update() {
        centipede1.Update();
        tail1.Update();
        tail2.Update();
        tail3.Update();
        //tail4.Update();
        //tail5.Update();
        
        //tail4.Show();
        //tail5.Show();
        player.update();
    }

    Draw() {
        drawgrid();
        player.update_bullet();
        centipede1.Show();
        tail1.Show();
        tail2.Show();
        tail3.Show();
        player.draw();
    }
}