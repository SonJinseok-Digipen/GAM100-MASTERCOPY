 class bullet {
     constructor(x, y) {
         this.player_attack_width = 5;
         this.player_attack_height = 25;
         this.player_attack_x = x + 10;
         this.player_attack_y = y;

     }

     update() {

         //this.player_attack_x +=  10;
         this.player_attack_y -= 25;
     }
     draw() {
         if (this.player_attack_y > -25) {
             push()
             noStroke();
             fill('olive');
             rect(this.player_attack_x, this.player_attack_y, this.player_attack_width, this.player_attack_height);
             pop()
             if (frameCount % 30 == 0) {
                 s5.play();
             }

         }
     }
 }