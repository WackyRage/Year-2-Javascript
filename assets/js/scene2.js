/*
   Scene contains processes for game allowing it to run 
   trough three function to load in the needed assets for the 
   game, to create objects and to constantly update te game.
*/
class Scene2 extends Phaser.Scene {
    
    constructor() {
        super("playGame");

        /* set up of class variables */
        var platforms;
        var cursors;
        var spaceman;
        var fuel;
        var spaceship;
        var spaceshipMid;

        /* set up of class collection variables */
        var mob;
        var mobGroup;
        var bullet;
        var bulletGroup;

        /* set up of string variable*/
        var scoreText;
        var lifeText;
        var fuelText;

        /* set up of INT variable*/
        var timer;
        var levelPhase;
        this.levelPhase = 0;
        var score;
        this.score = 0;
        var life;
        this.life = 4;
        var fuelInt;
        this.fuelInt = 0;
        var lastFired;
        this.lastFired = 0;
        var lastMovement;
        this.lastMovement = 0;
        var level;
        this.level = 1;

    }

    preload() {
    	this.load.image("background", "assets/img/background.jpg");
   		this.load.image('sky-medium-platform', 'assets/img/sky-medium-platform.jpg');
   		this.load.image('sky-small-platform', 'assets/img/sky-small-platform.jpg');
        this.load.image('ground-platform', 'assets/img/ground-platform.jpg');
        this.load.image('blackbar', 'assets/img/blackbar.jpg');
        this.load.image('fuel', 'assets/img/fuel.png');
        this.load.image('comet', 'assets/img/comet.png');
        this.load.image('bullet', 'assets/img/bullet.png');
        this.load.image('spaceship-top', 'assets/img/spaceship-top.png');
        this.load.image('spaceship-mid', 'assets/img/spaceship-mid.png');

        this.load.spritesheet('spaceship', 'assets/img/spaceship.png', { frameWidth: 56, frameHeight: 181});
        this.load.spritesheet('spaceman', 'assets/img/spaceman.png', { frameWidth: 32, frameHeight: 54 });

    }

    create() {
    	this.background = this.add.image(-50,26,"background");
    	this.background.setOrigin(0,0);

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 593, 'ground-platform');
        this.platforms.create(400, 3, 'blackbar');
        this.platforms.create(150, 200, 'sky-medium-platform');
        this.platforms.create(650, 250, 'sky-medium-platform');
        this.platforms.create(400, 350, 'sky-small-platform');
        
        this.scoreText = this.add.text(8, 8, 'Score: ' + this.score, {fontSize: '16px', fill: '#FFF'});
        this.lifeText = this.add.text(370, 8, 'Live: ' + this.life, {fontSize: '16px', fill: '#FFF'});
        this.fuelText = this.add.text(700, 8, 'fuel: ' + this.fuelInt + '%', {fontSize: '16px', fill: '#FFF'});

        this.spaceman = new Spaceman({scene:this, x:100, y:545});
        this.spaceman.body.ArcadeBodyCollision=true;;
        this.fuel = new Fuel({scene:this, x:Math.floor(Math.random() * 800), y:0});
        this.fuel.disableBody(true, true);
        this.spaceship = new Spaceship({scene:this, x:515, y:650});
        this.spaceshipMid = new SpaceshipPart({scene:this, x:400, y:310, sprite:"spaceship-mid"});
        this.spaceshipTop = new SpaceshipPart({scene:this, x:150, y:166, sprite:"spaceship-top"});

        this.mobGroup = this.add.group();
        this.bulletGroup = this.add.group();

        this.spawnMobs();

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.spaceman, this.platforms);
        this.physics.add.collider(this.fuel, this.platforms);
        this.physics.add.collider(this.spaceshipMid, this.platforms);
        this.physics.add.collider(this.spaceshipTop, this.platforms);
        this.physics.add.collider(this.spaceshipTop, this.platforms);
        this.physics.add.overlap(this.mobGroup, this.spaceman, this.death, null, this);
        this.physics.add.collider(this.bulletGroup, this.mobGroup, this.shot, null, this);
        this.physics.add.collider(this.mobGroup, this.platforms, this.mobRespawn, null, this);
        this.physics.add.overlap(this.spaceman, this.fuel, this.collectfuel, null, this);
        this.physics.add.overlap(this.spaceman, this.spaceshipMid, this.collectSpaceshipMid, null, this);
        this.physics.add.overlap(this.spaceman, this.spaceshipTop, this.collectSpaceshipTop, null, this);
        this.physics.add.overlap(this.spaceman, this.spaceship, this.enterSpaceship, null, this);

    }

    update() {
        // add controlls for player avatar
        if(this.cursors.left.isDown){
            if(this.spaceman.body.touching.down){
                this.spaceman.walkLeft();
            } else {
                this.spaceman.flyLeft();
            }

            if(this.cursors.space.isDown) {
                this.shoot("left");
            }

        } else if(this.cursors.right.isDown){
            if(this.spaceman.body.touching.down){
                this.spaceman.walkRight();
            } else {
                this.spaceman.flyRight();
            }


            if(this.cursors.space.isDown) {
                this.shoot("right");
            }

        } else {
            if(this.spaceman.body.touching.down){

                this.spaceman.stationary();
            } else {
                this.spaceman.flyStationary();
            }
        }

        // add custom gravity for player
        if(this.cursors.up.isDown){
            this.spaceman.fly();
        } else {
            this.spaceman.gravity();
        }

        // start function that allows mob to move
        this.mobMovement();

        // start function to add custom gravity for fuel
        this.fuel.gravity();

        // allow objects to circle the screenborder
        this.physics.world.wrap(this.spaceman, 32);
        this.physics.world.wrap(this.mobGroup, 32);
        this.physics.world.wrap(this.bulletGroup, 32);    
    }

    // function that detemines movement patterns for mobs
    mobMovement(){
        var timer = this.time.now;
        if(this.level == 1 || this.level == 3){
            if(timer >= this.lastMovement) {
                for (var i = 0; i < this.mobGroup.getLength(); i++) {
                    var child = this.mobGroup.getChildren().find(v => v.name == i);
                    child.movement(this.level);
                this.lastMovement = timer + 400;
                }
            }
        }
    }

    // function that allows player to collect fuel and add total to collected
    collectfuel (spaceman, fuel) {
        this.fuel.disableBody(true, true);

        this.score += 50;
        this.scoreText.setText('Score: ' + this.score);

        this.fuelInt += 20;
        this.fuelText.setText('fuel: ' + this.fuelInt + '%');

        if(this.fuelInt < 100) {
            this.fuel.enableBody(true, Math.floor(Math.random() * 800), 0, true, true);
            this.fuelText.setText('fuel: ' + this.fuelInt + '%');

        } else {      
            this.levelPhase = 3;       
        }
    }

    collectSpaceshipMid(spaceman, spaceshipMid) {
        this.spaceshipMid.disableBody(true, true);

        this.score += 100;
        this.scoreText.setText('Score: ' + this.score);
        this.levelPhase = 1;

        this.spaceship.constructShipMid();
    }

    collectSpaceshipTop(spaceman, spaceshipMid) {
        if(this.levelPhase === 1) {
            this.spaceshipTop.disableBody(true, true);

            this.score += 100;
            this.scoreText.setText('Score: ' + this.score);
            this.levelPhase = 2;

            this.spaceship.constructShipTop();

            this.fuel.enableBody(true, Math.floor(Math.random() * 800), 0, true, true)
        }
    }

    // function that is part of next level animation
    enterSpaceship(spaceman, spaceship) {
        if(this.levelPhase === 3) {
            this.spaceman.disableBody(true, true);
            this.score += 1000;
            this.scoreText.setText('Score: ' + this.score);
            this.spaceship.nextLevel();
            this.timer = this.time.addEvent({ delay: 1000, callback: this.spaceshipFly, callbackScope: this });

        }
    }

    // function that is part of next level animation
    spaceshipFly(){
        this.spaceship.fly();
        this.timer = this.time.addEvent({ delay: 2000, callback: this.spaceshipReset, callbackScope: this });
        this.timer = this.time.addEvent({ delay: 3000, callback: this.setNewStage, callbackScope: this });
    }

    // Empties scene of old movable object and sets up scene for next level
    setNewStage(){
        this.spaceman.enableBody(true, 100, 545, true, true);
        this.spaceship.setCollideWorldBounds(true);
        this.spaceship.enableBody(true, 515, 650, true, true);
        this.spaceship.constructShipTop();
        this.mobGroup.clear(true, true);
        this.spawnMobs();
        this.fuelInt = 0;
        this.fuelText.setText('fuel: ' + this.fuelInt + '%');

        // reset level if level reached 3
        if(this.level == 3) {
            this.level = 1;
            // reset spaceship
            this.levelPhase = 0; 
            this.spaceship.constructShipLow();
            this.spaceshipMid.enableBody(true, 400, 310, true, true);
            this.spaceshipTop.enableBody(true, 150, 166, true, true);
        } else {
            this.level += 1;
            // set spaceship to constructed without fuel
            this.levelPhase = 2; 
            this.fuel.enableBody(true, Math.floor(Math.random() * 800), 0, true, true);
        }
    }

    spaceshipReset(){
        this.spaceship.disableBody(true,true)
    }

    // function that activates gravity for user avatars gravity
    gravity(){
        this.spaceman.gravity();
    }

    // set ammount of mobs to spawn 
    spawnMobs() {
        var amountOfMobs = this.level % 5;
        for (var i = 0; i < (amountOfMobs+4); i++) {
            // add random timer to spawn mobs to allow variation
            this.time.addEvent({ delay: Math.floor(Math.random() * 5000), callback: this.spawnMob, callbackScope: this });  
        }
    }

    spawnMob(){
        this.mob = new Mob({scene:this, x:800, y:Math.floor(Math.random() * 500)}, this.level)
        // set number as name to allow easy manipulation
        this.mob.name = this.mobGroup.getLength();
        // set movement to match level
        this.mob.movement(this.level);
        this.mobGroup.add(this.mob);
    }

    mobRespawn(mob){
        if(this.level == 1){
            mob.disableBody(true, true);
            this.time.addEvent({ delay: Math.floor(Math.random() * 5000), callback: this.spawnMob, callbackScope: this });  
        } else {
        }
    }

    // function that maintains lives of avatar
    death(mob) {
        this.life -= 1;

        //When lives are all used up, activate gameover scene or reset body with live less
        if(this.life == 0) {
            this.scene.start("gameOver");
        } else {
            this.spaceman.disableBody(true, true);
            this.lifeText.setText('Live: ' + this.life);
            this.spaceman.enableBody(true, 100, 545, true, true);
            this.mobRespawn(mob);
        }
    }

    disableBullet(){
        this.bulletGroup.killAndHide(this.bulletGroup.getFirstAlive());
    }

    // allows player to shoot in direction it is moving
    shoot(direction){
        // set timer for interval between each bullet shot
        var timer = this.time.now;
                
        if(timer > this.lastFired) {
                
            this.lastFired = timer + 200;
            this.bullet = new Bullet({scene:this, x:this.spaceman.x, y:this.spaceman.y}, direction);
            this.bulletGroup.add(this.bullet);   

            // set timer after which bullet dissapears         
            this.time.addEvent({ delay: 2000, callback: this.disableBullet, callbackScope: this });  
        }
    }

    // function that registers if mob is hit by bullet
    shot(bullet, mob){
        if(mob.disableBody(true, true) && bullet.disableBody(true, true)){
            this.score += 100;
            this.scoreText.setText('Score: ' + this.score);
            this.spawnMob();
        }

    }

}