/*
    class containing the functions for Bullet
*/
class Bullet extends Phaser.Physics.Arcade.Image {
    
    constructor(config, direction) {
        super(config.scene, config.x, config.y,"bullet");
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);

        this.setScale(1);
       
        // set direction movement
        if(direction === 'left'){
            this.setVelocityX(-300);
        } else if(direction === 'right'){
            this.setVelocityX(300);
        }
    }   

}