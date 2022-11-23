/*
    class containing the functions for fuel
*/
class Fuel extends Phaser.Physics.Arcade.Image {
    
    constructor(config){
        super(config.scene, config.x, config.y, "fuel");
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);


        //  Set some default physics properties
        this.setScale(1);
        this.setBounce(0, 0);
        this.setCollideWorldBounds(true);  
    }

    // custom gravity for fuel
    gravity(){
        this.setVelocityY(150);
    }

}