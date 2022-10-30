/*
   GameScene contains processes for game allowing it to run 
   trough three function to load in the needed assets for the 
   game, to create objects and to constantly update te game.
*/
class Scene3 extends Phaser.Scene {
    
    constructor() {
        super("gameOver");
        //var cursors;
    }

    create() {
        this.add.text(270, 200, 'Game Over', {fontSize: '48px', fill: 'green'});
        // this.add.text(225, 275, 'Press space to retry', {fontSize: '32px', fill: 'green'});

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    // update() {
    //     if(this.cursors.space.isDown) {;
    //         this.scene.start("playGame");
    //     }
    // }
}