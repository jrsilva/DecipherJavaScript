var outsideState = new Kiwi.State('OutsideState');
var music = new Audio('music/title.mp3');
var toPlay = true;

outsideState.create = function(){
    console.log("outsideState");

	Kiwi.State.prototype.create.call(this);


    // create sprites and images
    if(toPlay){
     music.currentTime = 2;
     music.play();
     music.loop = true;
    }
    
    

    this.background = new Kiwi.GameObjects.StaticImage(this, this.textures['title'], 0, 0);
    

    this.character = new Kiwi.GameObjects.Sprite(this, this.textures['characterSprite'], 319, 232);
    this.energy = new Kiwi.GameObjects.Sprite(this, this.textures['energy'], 0, 0);
    this.energy.animation.add('idle', [0,2,3,4,5,6,7,8,9,10], 0.09, true);

    this.energyInverted = new Kiwi.GameObjects.Sprite(this, this.textures['energyInverted'], 0, 0);
    this.energyInverted.animation.add('idle', [0,2,3,4,5,6,7,8,9,10], 0.075, true);

    this.energyInvertedRed = new Kiwi.GameObjects.Sprite(this, this.textures['energyInvertedRed'], 0, 0);
    this.energyInvertedRed.animation.add('idle', [0,2,3,4,5,6,7,8,9,10], 0.1, true);

    this.energyInvertedBabyBlue = new Kiwi.GameObjects.Sprite(this, this.textures['energyInvertedBabyBlue'], 0, 0);
    this.energyInvertedBabyBlue.animation.add('idle', [0,2,3,4,5,6,7,8,9,10], 0.085, true);

    // assign Enter key to the variable stateKey
   
    this.stateKey = this.game.input.keyboard.addKey(Kiwi.Input.Keycodes.ENTER);

   

    //begin animation and add it to the screen

   
    this.energy.animation.play('idle');
    this.energyInvertedRed.animation.play('idle');
    this.energyInverted.animation.play('idle');
    this.energyInvertedBabyBlue.animation.play('idle');

    this.addChild(this.background);
   
    this.addChild(this.energy);
    this.addChild(this.energyInverted);
    this.addChild(this.energyInvertedRed);
    this.addChild(this.energyInvertedBabyBlue);


    // energy coordinates
    this.energy.x = 8;
    this.energy.y = 100;

    this.energyInvertedRed.x = 90;
    this.energyInvertedRed.y = 270;

    this.energyInverted.x = 565;
    this.energyInverted.y = 270;

    this.energyInvertedBabyBlue.x = 675;
    this.energyInvertedBabyBlue.y = 100;

   
}

outsideState.update = function(){
	Kiwi.State.prototype.update.call(this);
    
    
	if (this.stateKey.isDown) {
        music.paused = true;
        music.currentTime = 2;
        music.src = 'music/level1.mp3';

        this.game.states.switchState("InteriorState");

    }

    
}