let MainMenuScene;
let PlayScene;
var CurrentScenenum = 0;
let a = 1;
let CurrentScene1;
let CurrentScene2;

function setup() {
    createCanvas(800, 800);
    MainMenuScene = new MainMenu();
    PlayScene = new Play();
}

function draw() {
    background(220);
    CurrentScenenum = a;
    if (CurrentScenenum == 1) {
        CurrentScene1 = MainMenuScene.Update();
        CurrentScene2 = MainMenuScene.Draw();
    }
    if (CurrentScenenum == 2) {
        CurrentScene1 = PlayScene.Update();
        CurrentScene2 = PlayScene.Draw();
    }
    CurrentScene1;
    CurrentScene2;
}