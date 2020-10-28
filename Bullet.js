 class bullet {
     constructor(x, y) {
         this.player_x = x;
         this.player_y = y;
         this.isthiskeypressed = false;
         this.wasthiskeypressed = false;
         this.player_attack_x = -100;
         this.player_attack_y = 40
         this.player_attack_width = 5;
         this.player_attack_height = 30;
         this.isthiskeypressed = false;
         this.wasthiskeypressed = false;
         this.isbulletexist = false;


     }

     update() {
         if (keyIsPressed) {
             if (key == 'c') {
                 this.isthiskeypressed = true;

             }


             if (this.isthiskeypressed == true && this.wasthiskeypressed == false) {
                 if (this.isbulletexist == false) {
                     this.player_attack_x = this.player_x + 10;
                     this.player_attack_y = this.player_y - 1;
                     this.isbulletexist = true;
                 }
             }
             this.wasthiskeypressed = this.isthiskeypressed;


             if (this.player_attack_y <= 0) {
                 this.isbulletexist = false;
             }


         }
     }


     draw() {
         fill('magenta');
         rect(this.player_attack_x, this.player_attack_y, this.player_attack_width, this.player_attack_height);
         this.player_attack_y -= 50;
         if (this.player_attack_y <= 0) {
             this.isbulletexist = false;
         }

     }





 }


 // class bullet {
 //     constructor(x, y) {
 //         this.player_x = x;
 //         this.player_y = y;
 //         this.isthiskeypressed = false;
 //         this.wasthiskeypressed = false;
 //         this.player_attack_x = -100;
 //         this.player_attack_y = 40
 //         this.player_attack_width = 5;
 //         this.player_attack_height = 30;
 //         this.isthiskeypressed = false;
 //         this.wasthiskeypressed = false;
 //         this.isbulletexist = false;


 //     }

 //     update() {
 //         if (keyIsPressed) {
 //             if (key == 'c') {
 //                 this.isthiskeypressed = true;

 //             }


 //             if (this.isthiskeypressed == true && this.wasthiskeypressed == false) {
 //                 if (this.isbulletexist == false) {
 //                     this.player_attack_x = this.player_x + 10;
 //                     this.player_attack_y = this.player_y - 60;
 //                     this.isbulletexist = true;
 //                 }
 //             }
 //             this.wasthiskeypressed = this.isthiskeypressed;


 //             if (this.player_attack_y <= 0) {
 //                 this.player_attack_y -= 25;
 //                 this.isbulletexist = false;
 //             }


 //         }
 //     }


 //     draw() {
 //         fill('magenta');
 //         rect(this.player_attack_x, this.player_attack_y, this.player_attack_width, this.player_attack_height);
 //         this.player_attack_y -= 50;
 //         if (this.player_attack_y <= 0) {
 //             this.isbulletexist = false;
 //         }

 //     }





 // }