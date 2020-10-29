/*File Name: Play.js
   Project Name: Centipede
   The course name: GAM100
   The term: Fall 2020
   Author(s): 

   All content © 2020 DigiPen (USA) Corporation, all rights reserved.*/

class Play {
    constructor() {
      
    }

  Update() {
         centipede1.Update();
        tail1.Update();
        
        
        tail2.Update();
        
        tail3.Update();
        mushmap.update();
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
        drawgrid();
        tilemap1.Show();
        centipede1.Show();
        tail1.Show();
        tail2.Show();
        mushmap.draw();
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