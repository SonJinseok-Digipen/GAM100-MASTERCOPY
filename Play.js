class Play {
    constructor() {
        frameRate(10);
    }

  Update() {

        centipede1.Update();
        tail1.Update();
        
        
        tail2.Update();
        
        tail3.Update();
        /*
        tail4.Update();
        
        tail5.Update();
        tail6.Update();
        tail7.Update();
        tail8.Update();
        tail9.Update();
        tail10.Update();
        tail11.Update();
    haed2.Update()
    */
 


        player.update();
    }

    Draw() {
        tilemap1.Show();
        player.update_bullet();
        centipede1.Show();
        tail1.Show();
        
        
        tail2.Show();
        /*
        tail3.Show();
        
        tail4.Show();
        
        tail5.Show();
        tail6.Show();
        tail7.Show();
        tail8.Show();
        tail9.Show();
        tail10.Show();
        tail11.Show();
          
        haed2.Show()

    /*
    haed3.Show()
    
    haed4.Show()
    haed5.Show()
    haed6.Show()
    */

        player.draw();
    }
}