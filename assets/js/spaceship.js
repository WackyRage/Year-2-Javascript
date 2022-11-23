/*
    class containing the sprite functions for the fuel
*/
class Spaceship extends Phaser.Physics.Arcade.Sprite {
    
    constructor(config){
        super(config.scene, config.x, config.y, "spaceship");
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);


        //  Set some default physics properties
        this.setScale(1);
        this.setBounce(0, 0);
        this.setCollideWorldBounds(true);  

        // Set sprite animations
        this.anims.create({
            key: 'contructLow',
            frames: this.anims.generateFrameNumbers('spaceship', {start: 0, end: 0}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'contructMid',
            frames: this.anims.generateFrameNumbers('spaceship', {start: 1, end: 1}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'contructTop',
            frames: this.anims.generateFrameNumbers('spaceship', {start: 2, end: 2}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'enter',
            frames: this.anims.generateFrameNumbers('spaceship', {start: 3, end: 3}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'flyAway',
            frames: this.anims.generateFrameNumbers('spaceship', {start: 4, end: 5}),
            frameRate: 10,
            repeat: -1
        });
    }

    // Function to set sprite to only having lower part
    constructShipLow(){
        this.anims.play('contructLow', true);
    }

    // Function to set sprite to have mid part added
    constructShipMid(){
        this.anims.play('contructMid', true);
    }

    // Function to set sprite as completed
    constructShipTop(){
        this.anims.play('contructTop', true);
    }

    // Function to start enter ship animation
    nextLevel(){
        this.anims.play('enter', true);
    }

    // Function to start ship flying to next level animation
    fly(){
        this.anims.play('flyAway', true);
        this.setCollideWorldBounds(false); 
        this.setVelocityY(-700);
    }

    


}