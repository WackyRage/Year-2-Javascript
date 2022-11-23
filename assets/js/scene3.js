/*
   Scene contains processes for game allowing it to run 
   trough three function to load in the needed assets for the 
   game, to create objects and to constantly update te game.
*/
class Scene3 extends Phaser.Scene {
    
    constructor() {
        super("gameOver");
    }

    create() {
        this.add.text(270, 200, 'Game Over', {fontSize: '48px', fill: 'green'});
        this.add.text(225, 275, 'Press F5 to retry', {fontSize: '32px', fill: 'green'});

    }
}