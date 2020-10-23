let MainMenuScene;
let PlayScene;
let CurrentScenenum = 2;
let a = 2;
let CurrentScene1;
let CurrentScene2;
let main_menu;

let tilemap1;
let centipede1;
let tail1;
let tail2;
let tail3;
let tail4;
let tail5;
let player;

function preload() {
    main_menu = loadImage('Asset/unknown.png');
}


function setup() {
    createCanvas(750, 750);
    MainMenuScene = new MainMenu();
    PlayScene = new Play();
    tilemap1 = new Mushroom_tilemap();
    centipede1 = new centipedeHead(0, 700);
    tail1 = new centipedetale1(centipede1);
    tail2 = new centipedetale2(tail1);
    tail3 = new centipedetale2(tail2);
    tail4 =new centipedetale2(tail3);
    tail5 =new centipedetale2(tail4);
    player = new Player();
    tilemap1.Initialize();
    frameRate(5);
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

            if (tilemap1.layers[j][i] == 1) {
                push();
                fill(0, 0, 255);
                rect(i * tilemap1.tilesize, j * tilemap1.tilesize, tilemap1.tilesize, tilemap1.tilesize);
                current_mushnumber++;
                pop();

            }

        }
    }
}