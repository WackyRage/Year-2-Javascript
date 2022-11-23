/*
   Scene contains processes for game allowing it to run 
   trough three function to load in the needed assets for the 
   game, to create objects and to constantly update te game.
*/
class Scene1 extends Phaser.Scene {
    
    constructor() {
        super("bootGame");
        var cursors;
    }

    create() {
        /* text shall serve as a starting screen */
        this.add.text(310, 200, 'JetPac', {fontSize: '48px', fill: 'green'});
        this.add.text(225, 275, 'Press space to start', {fontSize: '32px', fill: 'green'});

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        /* allows the game to start on action */
        if(this.cursors.space.isDown) {
            this.scene.start("playGame");
        }
    }
}