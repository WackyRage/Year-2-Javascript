/*
    class containing the functions for mobs
*/
class Mob extends Phaser.Physics.Arcade.Image {
    
    constructor(config) {
        super(config.scene, config.x, config.y, "comet");
        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);

        var timer;
        var movementDirection;
        this.timer = Phaser.Time.Clock;

        // Set default physics properties
        this.setScale(1);
        this.setBounce(1, 1);
    }

    // function that decides movement patterns based on level
    movement(level){
        if(level == 1){
            this.comet();
        } else if (level == 2) {
            this.alien();
        } else if (level == 3) {
            this.bolloon();
        }
    }

    // movement pattern for comets
    comet() {
        this.setVelocityX(-160);
        this.setVelocityY((Math.floor(Math.random() * 6 - 1)* 10));
    }

    // movement pattern for aliens
    alien() {
        var direction = (Math.floor(Math.random() * 4));
        if(direction == 1){
            this.setVelocityX(100);
            this.setVelocityY(100);
        } else if(direction == 2) {
            this.setVelocityX(-100);
            this.setVelocityY(-100);       
        } else if(direction == 3) {
            this.setVelocityX(-100);
            this.setVelocityY(100);
        } else  {
            this.setVelocityX(100);
            this.setVelocityY(-100);
        } 
    }

    // movement pattern for bolloons
    bolloon() {
        console.log("bolloon " + this.movementdirection);
        if(this.movementdirection == null) {
            this.direction = (Math.floor(Math.random() * 2)) + 1;
            this.movementdirection = this.direction;
        } else if(this.movementdirection == 1 || this.movementdirection == 2) {
            this.direction = (Math.floor(Math.random() * 2)) + 3;
            ;
        }

        if(this.direction == 1){
            this.setVelocityX(100);
            this.setVelocityY(0);
            this.movementDirection = 1;
        } else if(this.direction == 2) {
            this.setVelocityX(-100);
            this.setVelocityY(0);  
            this.movementDirection = 2;     
        } else if(this.direction == 3) {
            this.setVelocityY(100);
            this.movementDirection = 3;
        } else  {
            this.setVelocityY(-100);
            this.movementDirection = 4;
        } 
        
    }

}