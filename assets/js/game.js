/* 
    declaring the object with configurations for the game
*/
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Scene1, Scene2, Scene3],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        } 
    }
}
/*
    Making of the game object and setting in the configurations using config
*/

var game = new Phaser.Game(config, this);