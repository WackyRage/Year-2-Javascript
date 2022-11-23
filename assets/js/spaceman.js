/*
    class containing the sprite functions for the spaceman
*/
class Spaceman extends Phaser.Physics.Arcade.Sprite {
    
    constructor(config){
        super(config.scene, config.x, config.y, "spaceman");
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);


        //  Set some default physics properties
        this.setScale(1);
        this.setBounce(0, 0);
        // this.setCollideWorldBounds(true);   

        // Set sprite animations
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('spaceman', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'spaceman', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('spaceman', {start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'fly-left',
            frames: this.anims.generateFrameNumbers('spaceman', {start: 9, end: 10}),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'fly-turn',
            frames: [ { key: 'spaceman', frame: 11 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'fly-right',
            frames: this.anims.generateFrameNumbers('spaceman', {start: 12, end: 13}),
            frameRate: 10,
            repeat: -1
        }); 
    }

    // custom gravity for fuel
    gravity(){
        this.setVelocityY(150);
    }

    // Function to allow movement with walking left animation
    walkLeft(){
        this.setVelocityX(-100);

        this.anims.play('left', true);
    }

    // Function to allow movement with walking right animation
    walkRight(){
        this.setVelocityX(100);

        this.anims.play('right', true);
    }

    // Function to stop movement and set sprite to stationary
    stationary(){
        this.setVelocityX(0);

        this.anims.play('turn', true);
    }

    // Function to allow movement with fly left animation
    flyLeft(){
        this.setVelocityX(-200);

        this.anims.play('fly-left', true);
    }

    // Function to allow movement with fly right animation
    flyRight(){
        this.setVelocityX(200);

        this.anims.play('fly-right', true);
    }

    // Function to allow avatar to fly while using directions
    fly(){
        this.setVelocityY(-200);
    }

    // Function to allow avatar to fly while using no directions
    flyStationary(){
        this.setVelocityX(0);

        this.anims.play('fly-turn', true);
    }

}