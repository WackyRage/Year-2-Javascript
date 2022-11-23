/*
    class that shall function as loose spaceship parts
*/
class SpaceshipPart extends Phaser.Physics.Arcade.Image {
    
    constructor(config, image){
        super(config.scene, config.x, config.y, config.sprite);
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);


        //  Set some default physics properties
        this.setScale(1);
        this.setBounce(0, 0);
        this.setCollideWorldBounds(true);  
    }

}