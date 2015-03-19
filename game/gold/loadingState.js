var loadingState = new Kiwi.State('LoadingState');

loadingState.preload = function(){


	Kiwi.State.prototype.preload.call(this);
	console.log("loadingState");
	
  	// character Sprites
	this.addSpriteSheet('villian','images/characterSprites/villian.png', 32.5,49);
	this.addSpriteSheet('villian2','images/characterSprites/villian.png', 32.5,49);
	this.addSpriteSheet('soldier', 'images/characterSprites/soilders.png',32.5, 49,16,4,4,0,0,-3.0,-.50);
	this.addSpriteSheet('wizard', 'images/characterSprites/wizard.png',32.5, 49,8,4,4,0,0,-3.0,-.50);
	this.addSpriteSheet('characterWalking','images/characterSprites/heroWalking.png', 24, 43);
	this.addSpriteSheet('blade','images/characterSprites/blade.png', 32.5,49);


	// energy Sprites
	this.addSpriteSheet('implode','images/energySprites/implode.png', 70,59.9, 6, 2,3);
	this.addSpriteSheet('blast','images/energySprites/fire.png', 47.5,24, 4, 1,4);
	this.addSpriteSheet('implodeBlue','images/energySprites/blueImplode.png', 70,59.9, 6, 2,3);
	this.addSpriteSheet('energy', 'images/energySprites/energy.png', 100, 100);
	this.addSpriteSheet('energyInverted', 'images/energySprites/energyInverted.png', 100, 100);
	this.addSpriteSheet('energyInvertedRed', 'images/energySprites/energyInvertedRed.png', 100, 100);
	this.addSpriteSheet('energyInvertedBabyBlue', 'images/energySprites/energyInvertedBabyBlue.png', 100, 100);
	// misc Sprites

	this.addSpriteSheet('tiles', 'images/misc/tileset.png', 48, 48);
	this.addSpriteSheet('metalTiles', 'images/misc/metalGround.png', 48, 48);
	this.addSpriteSheet('enter', 'images/misc/Enter.png', 148, 51);
	this.addSpriteSheet('background', 'images/misc/background.jpg', 1200, 770);
	this.addImage('title', 'images/misc/title.png');
	this.addSpriteSheet('door','images/misc/door.png', 62,84, 5, 1,5);
	this.addSpriteSheet('boomerang','images/misc/boomerang.png', 28.70,40);
	//this.addSpriteSheet('longWaterfall','images/misc/longWaterfall.png', 108,850, 1, 1,12);

}

loadingState.create = function(){
	Kiwi.State.prototype.create.call(this);
	this.game.states.switchState("OutsideState");
}