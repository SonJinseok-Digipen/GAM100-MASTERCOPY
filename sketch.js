  let MainMenuScene;
  let PlayScene;
  let CurrentScenenum = 1;
  let a = 1;
  let CurrentScene1;
  let CurrentScene2;
  let main_menu;

  let tilemap1;
  let centipede1;
  let flea1;
  let tail1;
  let tail2;
  let tail3;
  let tail4;
  let tail5;
  let player;
  let player_bullet;
  let Mushroom1;
  let scores;

  function preload() {
      main_menu = loadImage('Asset/unknown.png');
  }


  function setup() {
      createCanvas(750, 750);
      MainMenuScene = new MainMenu();
      PlayScene = new Play();
      tilemap1 = new Mushroom_tilemap();
      centipede1 = new centipedeHead(0, 0);
      flea1 = new Flea();
      spider1 = new spider();
      scolpion1 = new scolpion();
      tail1 = new centipedetale1(centipede1);
      tail2 = new centipedetale2(tail1);
      tail3 = new centipedetale2(tail2);
      tail4 = new centipedetale2(tail3);
      tail5 = new centipedetale2(tail4);
      tail6 = new centipedetale2(tail5);
      tail7 = new centipedetale2(tail6);
      tail8 = new centipedetale2(tail7);
      tail9 = new centipedetale2(tail8);
      tail10 = new centipedetale2(tail9);
      tail11 = new centipedetale2(tail10);

      haed2 = new centipedeHead(0, 0);

      player_bullet = new bullet();

      player = new Player();

      mushmap = new Mushmap(tilemap1);
      mushmap.Initialize();

      scores = new score();

  }

  function draw() {
      background(220);
      CurrentScenenum = a;
      if (CurrentScenenum == 1) {
          MainMenuScene.Update();
          MainMenuScene.Draw();
      }

      if (CurrentScenenum == 2) {
          PlayScene.Update();
          PlayScene.Draw();
      }

  }

  function drawgrid() {
      let current_mushnumber = 0;
      for (let j = 0; j < tilemap1.rows; j++) {
          for (let i = 0; i <= tilemap1.cols; i++) {
              if (tilemap1.layers[j][i] == 0) {
                  push();
                  fill(255);
                  rect(i * tilemap1.tilesize, j * tilemap1.tilesize, tilemap1.tilesize, tilemap1.tilesize);
                  pop();
              }

              if (tilemap1.layers[j][i] != 0) {
                  push();
                  fill(0, 0, 255);
                  rect(i * tilemap1.tilesize, j * tilemap1.tilesize, tilemap1.tilesize, tilemap1.tilesize);
                  current_mushnumber++;
                  pop();

              }

          }
      }
  }