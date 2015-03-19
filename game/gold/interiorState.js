    var interiorState = new Kiwi.State('InteriorState');
    var canvasWidth = 1200;
    var canvasHeight = 600;
    var hurt = false;
    var seconds =0;
    var secondsForBoomerang =0;

    var map;
    var startingX =160;

    //booleans for behavior of the enemies
    var wizard3 = false;
    var wizard4 = false;
    var soldier_2 = false;
    var soldier2_2= false;
    var wizardBool = true;
    var rightEdge = true;
    var leftEdge = false;
    var rightEdge2 = false;
    var leftEdge2 = true;
    var rightEdge3 = false;
    var leftEdge3 = true;
    var rightEdge4 = false;
    var leftEdge4 = true;

    var restart = false;

   var music1 = new Audio('music/level1.mp3');


    interiorState.create = function() {
        music1.play();
        music1.loop = true;
        music1.currentTime = 2;
        Kiwi.State.prototype.create.call(this);
    
        
        //add background pic
        this.bg = new Kiwi.GameObjects.StaticImage(this, this.textures['background'], 0, 0);
        this.addChild(this.bg);

        //Our Tile Map
        this.tilemap = new Kiwi.GameObjects.Tilemap.TileMap(this);     
        this.tilemap.setTo(48,48,120,15);



        //unroll the createTileType for optimization
        this.tilemap.createTileType(0);
        this.tilemap.createTileType(1);
        this.tilemap.createTileType(2);
        this.tilemap.createTileType(3);
        this.tilemap.createTileType(4);
        this.tilemap.createTileType(5);
        this.tilemap.createTileType(6);
        this.tilemap.createTileType(7);
        this.tilemap.createTileType(8);
        this.tilemap.createTileType(9);
        this.tilemap.createTileType(10);
        this.tilemap.createTileType(11);
        this.tilemap.createTileType(12);
        this.tilemap.createTileType(13);
        this.tilemap.createTileType(14);
        this.tilemap.createTileType(15);
        this.tilemap.createTileType(16);
        this.tilemap.createTileType(17);
        this.tilemap.createTileType(18);
        this.tilemap.createTileType(19);
        this.tilemap.createTileType(20);

        
        var tilemapdata = [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,8,0,0,0,0,0,6,7,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,11,11,11,11,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,11,8,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0,0,11,11,11,11,11,8,0,0,0,0,0,0,0,0,0,0,0,11,
0,0,0,0,0,0,0,0,0,0,6,11,11,8,0,0,0,0,0,0,0,6,11,11,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,7,7,7,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0,0,11,11,11,11,11,11,8,0,0,0,0,0,0,0,0,0,0,11,
0,0,0,0,0,0,0,0,0,6,11,11,11,8,0,0,0,0,0,0,0,6,11,11,11,8,0,0,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,11,11,8,0,0,0,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
0,0,0,0,0,0,0,0,6,11,11,11,11,8,0,0,0,0,0,0,0,6,11,11,11,11,8,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,8,0,0,0,0,0,0,6,11,11,8,0,0,0,6,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
11,11,11,11,11,11,11,11,11,11,11,11,11,8,0,0,0,0,0,0,0,6,11,11,11,11,11,11,11,11,11,11,11,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,11,11,8,0,0,0,0,0,0,6,11,11,8,0,0,0,6,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0,0,7,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11  ];

        //Create a new TileMapLayer
         map =this.tilemap.createNewLayer('Ground', this.textures['tiles'], tilemapdata);
          
          
        // this.longWaterfall = new CustomSprite(this, this.textures['longWaterfall'], 0, 0);
        // this.longWaterfall.animation.add('idle', [0,1,2,3,4,5], 0.1, true, true);
        // this.longWaterfall.x = 300;
        // this.addChild(this.longWaterfall); 
        // this.longWaterfall.animation.play('idle');

        //Add the Layer to the State to be Rendered.
        this.addChild( this.tilemap.layers[0] );   


        //animation sprite for when the character is hit
        this.implode = new CustomSprite(this, this.textures['implode'], 0, 6000);  
        this.implode.animation.add('idle', [0,1,2,3,4,5,6], 0.075, false, true);
        this.addChild(this.implode); 
        //animation sprite for when the enemies are hit
        this.implodeBlue = new CustomSprite(this, this.textures['implodeBlue'], 0, 6000);  
        this.implodeBlue.animation.add('idle', [0,1,2,3,4,5,6], 0.075, false, true);
        this.addChild(this.implodeBlue); 
       
       
        // door to the next level 
        this.door = new CustomSprite(this, this.textures['door'], 0, 490);
        this.door.animation.add('closing', [4,3,2,1,0], 0.1, true);
        this.door.animation.add('idle', [0], 0.1, false, true);
        this.door.x = 5600;
        this.addChild(this.door); 


         // waterfall 
       


        //banner when the character is hurt, ask user to press enter
        this.enter = new CustomSprite(this, this.textures['enter'], 0, 0);
        this.enter.animation.add('idle', [0], 0.1, false, true);
        this.enter.y = 4000;
        this.addChild(this.enter); 

        //blasts from the enemy
        this.blast = new CustomSprite(this, this.textures['blast'], 0, 0);
        this.blast.animation.add('walking',  [0,1,2,3], 0.1, true);
        this.blast.animation.add('idle',  [0,1,2,3], 0.1, false, true);
        this.blast.physics.acceleration.x = -3;
        this.addChild(this.blast); 
        this.blast.y = 2000;

        this.blast2 = new CustomSprite(this, this.textures['blast'], 0, 0);
        this.blast2.animation.add('walking',  [0,1,2,3], 0.1, true);
        this.blast2.animation.add('idle',  [0,1,2,3], 0.1, false, true);
        this.blast2.physics.acceleration.x = -3;
        this.addChild(this.blast2); 
        this.blast2.y = 2000;

        this.blast3 = new CustomSprite(this, this.textures['blast'], 0, 0);
        this.blast3.animation.add('walking',  [0,1,2,3], 0.1, true);
        this.blast3.animation.add('idle',  [0,1,2,3], 0.1, false, true);
        this.blast3.physics.acceleration.x = -3;
        this.addChild(this.blast3); 
        this.blast3.y = 2000;

        this.blast21 = new CustomSprite(this, this.textures['blast'], 0, 0);
        this.blast21.animation.add('walking',  [0,1,2,3], 0.1, true);
        this.blast21.animation.add('idle',  [0,1,2,3], 0.1, false, true);
        this.blast21.physics.acceleration.x = -3;
        this.addChild(this.blast21); 
        this.blast21.y = 2000;

        this.blast22 = new CustomSprite(this, this.textures['blast'], 0, 0);
        this.blast22.animation.add('walking',  [0,1,2,3], 0.1, true);
        this.blast22.animation.add('idle',  [0,1,2,3], 0.1, false, true);
        this.blast22.physics.acceleration.x = -3;
        this.addChild(this.blast22); 
        this.blast22.y = 2000;

        this.blast23 = new CustomSprite(this, this.textures['blast'], 0, 0);
        this.blast23.animation.add('walking',  [0,1,2,3], 0.1, true);
        this.blast23.animation.add('idle',  [0,1,2,3], 0.1, false, true);
        this.blast23.physics.acceleration.x = -3;
        this.addChild(this.blast23); 
        this.blast23.y = 2000;

        this.boomerang = new CustomSprite(this, this.textures['boomerang'], 0, 0);
        this.boomerang.animation.add('walking',  [0,1,2,3,4,5,6,7], 0.1, true);
        this.boomerang.animation.add('idle',  [0,1,2,3], 0.1, false, true);
        this.boomerang.physics.acceleration.x = 3;
        this.addChild(this.boomerang); 
        this.boomerang.y = 2000;
       

        //Create our character
        this.character = new CustomSprite(this, this.textures['characterWalking'], 0, 0);
        this.character.animation.add('walking', [0,1,2,3], 0.08, true);
        this.character.animation.add('idle', [0], 0.1, false, true);
        this.character.animation.add('goingUp', [1], 0.1, false);
        this.character.animation.add('goingDown', [1], 0.1, false);
        this.character.physics.acceleration.y = 6;
        this.addChild(this.character);

        //enemy wizard
        this.wizard = new CustomSprite(this, this.textures['wizard'], 0, 0);
        this.wizard.animation.add('walking', [8,9,10,11], 0.1, true);
        this.wizard.animation.add('idle', [8], 0.1, false, true);
        this.wizard.animation.add('goingUp', [9], 0.1, false);
        this.wizard.animation.add('goingDown', [9], 0.1, false);
        this.wizard.physics.acceleration.y = 7;
        this.addChild(this.wizard);
        this.wizard.scaleX = -1;

        this.wizard2 = new CustomSprite(this, this.textures['wizard'], 0, 0);
        this.wizard2.animation.add('walking', [8,9,10,11], 0.1, true);
        this.wizard2.animation.add('idle', [8], 0.1, false, true);
        this.wizard2.animation.add('goingUp', [9], 0.1, false);
        this.wizard2.animation.add('goingDown', [9], 0.1, false);
        this.wizard2.physics.acceleration.y = 7;
        this.addChild(this.wizard2);
        this.wizard2.scaleX = -1;
       

        //Create our Villians
        this.villian = new CustomSprite(this, this.textures['villian'], 0, 0);
        this.villian.animation.add('walking', [8,9,10,11], 0.1, true);
        this.villian.animation.add('idle', [8], 0.1, false, true);
        this.villian.animation.add('goingUp', [9], 0.1, false);
        this.villian.animation.add('goingDown', [9], 0.1, false);
        this.villian.physics.acceleration.y = 7;
        this.addChild(this.villian);


        this.villian2 = new CustomSprite(this,this.textures['villian2'], 0, 0);
        this.villian2.animation.add('walking', [8,9,10,11], 0.1, true);
        this.villian2.animation.add('idle', [8], 0.1, false, true);
        this.villian2.animation.add('goingUp', [9], 0.1, false);
        this.villian2.animation.add('goingDown', [9], 0.1, false);
        this.villian2.physics.acceleration.y = 7;
        this.addChild(this.villian2);

         this.blade = new CustomSprite(this, this.textures['blade'], 0, 0);
        this.blade.animation.add('idle', [4], 0.1, true);
         this.blade.animation.play('idle');
        this.blade.physics.acceleration.y = 7;
        this.addChild(this.blade);


        //Create our Soldier

        this.soldier = new CustomSprite(this,this.textures['soldier'], 0, 0);
        this.soldier.animation.add('walking', [8,9,10,11], 0.1, true);
        this.soldier.animation.add('idle', [8], 0.1, false, true);
        this.soldier.animation.add('goingUp', [9], 0.1, false);
        this.soldier.animation.add('goingDown', [9], 0.1, false);
        this.soldier.physics.acceleration.y = 7;
        this.addChild(this.soldier);


        this.soldier2 = new CustomSprite(this,this.textures['soldier'], 0, 0);
        this.soldier2.animation.add('walking', [8,9,10,11], 0.1, true);
        this.soldier2.animation.add('idle', [8], 0.1, false, true);
        this.soldier2.animation.add('goingUp', [9], 0.1, false);
        this.soldier2.animation.add('goingDown', [9], 0.1, false);
        this.soldier2.physics.acceleration.y = 7;
        this.addChild(this.soldier2);

        // initial coordinates
            
            map.x =0;
            map.y = 0;
            this.character.y =300;
            this.character.x = 160;
            this.soldier2.y = 300;
            this.soldier2.x = 790;
            this.soldier.y = 300;
            this.soldier.x = 2000;
            this.villian.x = 2000;
            this.villian.y = 300;
            this.villian2.x = 2000;
            this.villian2.y = 300;
             this.blade.x = 2900;
            this.blade.y = 0;
            this.blast.x = 20000;
            this.blast2.x = 20000;
            this.blast3.x = 20000;
            this.blast21.x = 20000;
            this.blast22.x = 20000;
            this.blast23.x = 20000;
             this.boomerang.x = 20000;
            this.wizard.x = 2100;
            this.wizard2.x = 1400;
            this.wizard2.y = 100;



        for(var i = 1; i < this.tilemap.tileTypes.length; i++) {
            this.tilemap.tileTypes[i].allowCollisions = Kiwi.Components.ArcadePhysics.ANY;
        }

    }

    interiorState.update = function() {
        Kiwi.State.prototype.update.call(this);


        // when character falls down and out of the stage -- death
        if(this.character.y > (map.height) *48 +26){
            hurt = true;
            this.character.y = 2000;
        }
        // display banner when hurt
        if(hurt){
            this.enter.y = canvasHeight/2;
            this.enter.x = canvasWidth/2 - 80;

            //User to press enter to restart
             if (this.game.input.keyboard.isDown(Kiwi.Input.Keycodes.ENTER)){
                restart = true;
             }
             this.character.physics.acceleration.y = 0;
             this.character.physics.velocity.y = 0;

        }


        //restart 
        if(hurt  &&  restart){
            map.x =0;
            map.y = 0;
            this.character.y =300;
            this.character.x = 160;
            this.soldier2.y = 300;
            this.soldier2.x = 790;
            this.character.physics.acceleration.y = 7;

            
            this.soldier2.physics.acceleration.y = 7;

            this.soldier.y = 300;
            this.soldier.x = 2000;
            this.soldier.physics.acceleration.y = 7;

            this.villian.x = 2000;
            this.villian.y = 300;
            this.villian.physics.acceleration.y = 7;

            this.villian2.x = 2000;
            this.villian2.y = 300;
            this.villian2.physics.acceleration.y = 7;

             this.blade.x = 2000;
            this.blade.y = 300;
            this.blade.physics.acceleration.y = 7;

            this.blast.x = -2000;
            this.blast2.x = -2000;
            this.blast3.x = -2000;
            this.blast21.x = -2000;
            this.blast22.x = -2000;
            this.blast23.x = -2000;

            this.wizard.x = 2100;
            this.wizard.y = 5;
            this.wizard.physics.acceleration.y = 7;

            this.wizard2.x = 1400;
            this.wizard2.y = 50;
            this.wizard2.physics.acceleration.y = 7;

            this.door.x = 5600;
            this.enter.y = 4000;
           
            this.implode.y=6000;
            this.implodeBlue.y = 6000;

            this.boomerang.x = -2000;
            this.boomerang.y = -2000;


            wizard3 = false;
            wizard4 = false;
            soldier_2 = false;
            soldier2_2 = false;
            wizardBool = true;
            seconds =0;
            secondsForBoomerang = 0;
            
            hurt =false;
            restart = false;
        }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // following is spawn of enemies to this level whenever the 'hero' passes certain checkpoints
        if( (map.x < -500&& map.x >-2300) &&  !wizard3){ 
            this.villian.y = 140;
            this.villian.x = 1390;
            
            wizard3 = true;
        }
        if( (map.x < -500&& map.x >-2300)  && !wizard4){
            this.villian2.y = 40;
            this.villian2.x = 1790;
            this.blade.y = 40;
            this.blade.x = 2820;
            
            wizard4 = true;
        }
        if( (map.x < -500&& map.x >-2300) &&  !soldier_2){ 
            this.soldier.y = 40;
            this.soldier.x = 1390;
            
            soldier_2 = true;
        }
        if( map.x < -1700 &&  !soldier2_2){ 
            this.soldier2.y = 20000;
            this.soldier2.x = -20000;
            soldier2_2 = true;
            
        }
        if(map.x < -2301){
            soldier_2 = false;
            wizard4 = false;
            wizard3 = false;
        }
        if( map.x < -1700  &&  !soldier_2){
            this.soldier.y = 20000;
            this.soldier.x = -20000;
            soldier_2 = true;
        }

        if( map.x < -1700  &&  !wizard4){
            this.villian.y = 140;
            this.villian.x = 2090;
            
            wizard4 = true;
        }

        if( map.x < -2700 && wizardBool){
            this.wizard.y = 40;
            this.wizard.x = 1880;
            this.wizard2.y = 340;
            this.wizard2.x = 1380;
            
            wizardBool = false;
        }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Move the player/character as well as offset the maps


       if (this.game.input.keyboard.isDown(Kiwi.Input.Keycodes.A) && !hurt) {

                var mapOffset = 2;
                if(this.game.input.keyboard.isDown(Kiwi.Input.Keycodes.J)){
                    mapOffset = 3;
                }

                if(this.character.physics.isTouching(Kiwi.Components.ArcadePhysics.LEFT)){
                    this.character.scaleX = -1;
                    this.character.physics.velocity.x =-.01; 
                }
                else if( this.character.x <0){
                    this.character.x= 0;
                            
                }
                else if(map.x===0 ){

                    this.character.scaleX = -1;
                    this.character.physics.velocity.x = -.01;
                    this.character.x -= mapOffset;
                    
                }
                else if (this.character.physics.velocity.x === 0){
                    
                    this.character.scaleX = -1;
                    this.character.physics.velocity.x =-.01;
                    
                }
                else if( this.character.x > canvasWidth*.7){
                    this.character.scaleX = -1;
                    
                    this.character.physics.velocity.x =-.01;
                    this.character.x -=mapOffset;
                    
                }   
                else{
                    
                    this.character.scaleX = -1;
                    this.character.physics.velocity.x = -.1;

                        if(this.character.x <( ((map.width - 1) * 48) - startingX*2) ){
                            map.x += mapOffset;
                            this.villian.x +=mapOffset;
                            this.villian2.x+=mapOffset;
                             this.blade.x+=mapOffset;
                            this.soldier.x +=mapOffset;
                            this.soldier2.x +=mapOffset;
                            this.wizard.x +=mapOffset;
                            this.wizard2.x +=mapOffset;
                            this.blast.x+=mapOffset;
                            this.blast2.x+=mapOffset;
                            this.blast3.x+=mapOffset;
                            this.blast21.x+=mapOffset;
                            this.blast22.x+=mapOffset;
                            this.blast23.x+=mapOffset;
                             this.boomerang.x += mapOffset;
                            this.door.x +=mapOffset;
                            this.implodeBlue.x +=mapOffset;


                        }
                        else{
                            this.character.x -=mapOffset;
                        }
                
                   
                }
            
        } else if (this.game.input.keyboard.isDown(Kiwi.Input.Keycodes.D) && !hurt) {

                var mapOffset = 2;
                if(this.game.input.keyboard.isDown(Kiwi.Input.Keycodes.J)){
                    mapOffset = 3;
                }
                
                if(this.character.physics.isTouching(Kiwi.Components.ArcadePhysics.RIGHT)){
                    this.character.scaleX = 1;
                    this.character.physics.velocity.x = .01;
    
                }

                else if( this.character.x >=  ( (map.width - 1) * 48) - startingX){
                    this.character.x = ( (map.width - 1) * 48) - startingX;
                    
                }
            
                else if (Math.abs(map.x) >= map.width*48 - canvasWidth){
                    this.character.scaleX = 1;
                    this.character.physics.velocity.x = .01;
                    this.character.x+= mapOffset;
                    
                   
                    
                }

                else{

                   
                        
            
                         this.character.scaleX = 1;
                         this.character.physics.velocity.x = .01;

                         if(this.character.x < startingX){
                            this.character.x +=mapOffset;
                         }
                        
                         else if(this.character.x <canvasWidth - 200){
                            map.x -= mapOffset;
                            this.villian.x -=mapOffset;
                            this.villian2.x-=mapOffset;
                            this.blade.x -=mapOffset;
                            this.soldier.x -=mapOffset;
                            this.soldier2.x -=mapOffset;
                            this.wizard.x -=mapOffset;
                            this.wizard2.x -=mapOffset;
                            this.blast.x -=mapOffset;
                            this.blast2.x -=mapOffset;
                            this.blast3.x -=mapOffset;
                            this.blast21.x-=mapOffset;
                            this.blast22.x-=mapOffset;
                            this.blast23.x-=mapOffset;
                            this.boomerang.x-=mapOffset;
                            this.door.x -=mapOffset;
                            this.implodeBlue.x -=mapOffset;
                         }
                         else
                            this.character.x +=mapOffset;
                }

            
           
        } else {
            this.character.physics.velocity.x = 0;

             if(this.character.x >=this.door.x && this.character.x < this.door.x + this.door.width){
                        if(this.game.input.keyboard.isDown(Kiwi.Input.Keycodes.S))
                           

                            music1.paused = true;
                            music1.currentTime = 0;
                            music1.src = "music/level2.mp3";
                            this.game.states.switchState("level2");
                    }
        }

        this.tilemap.layers[0].physics.overlapsTiles(this.character, true);
        this.tilemap.layers[0].physics.overlapsTiles(this.villian, true);
        this.tilemap.layers[0].physics.overlapsTiles(this.villian2, true);
        this.tilemap.layers[0].physics.overlapsTiles(this.blade, true);
        this.tilemap.layers[0].physics.overlapsTiles(this.soldier, true);
        this.tilemap.layers[0].physics.overlapsTiles(this.soldier2, true);
        this.tilemap.layers[0].physics.overlapsTiles(this.wizard, true);
        this.tilemap.layers[0].physics.overlapsTiles(this.wizard2, true);


      

        if(this.character.physics.overlaps(this.blast,true) || this.character.physics.overlaps(this.blast2,true) || this.character.physics.overlaps(this.blast3,true)){
            
            hurt = true;    
            this.implode.x = this.character.x- 19;
            this.implode.y = this.character.y- 14;
            this.character.y = 2000;
            this.implode.animation.play('idle');

            this.blast.physics.velocity.x = -17;
            this.blast.physics.velocity.y = 17;
               
            this.blast2.physics.velocity.x = -17;
            this.blast2.physics.velocity.y = -17;
                
            this.blast3.physics.velocity.x = -17;
            this.blast3.physics.velocity.x = 0;


        }
        if(this.character.physics.overlaps(this.blast21,true) || this.character.physics.overlaps(this.blast22,true) || this.character.physics.overlaps(this.blast23,true)){
            
                hurt = true;    
                this.implode.x = this.character.x - 19;
                this.implode.y = this.character.y- 14;
                this.character.y = 2000;
                this.implode.animation.play('idle');


                this.blast21.physics.velocity.x = -17;
                this.blast21.physics.velocity.y = 17;
               
                this.blast22.physics.velocity.x = -17;
                this.blast22.physics.velocity.y = -17;
                
                this.blast23.physics.velocity.x = -17;
                this.blast23.physics.velocity.y = 0;
                

        }
        if(this.character.physics.overlaps(this.boomerang,true)){
            hurt = true;
            this.implode.x = this.character.x - 19;
            this.implode.y = this.character.y- 14;
            this.character.y = 2000;
            this.boomerang.physics.velocity.x=-60;
            this.implode.animation.play('idle');

          
         }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //enemy interaction
        
        if(this.character.physics.overlaps(this.villian,true)){
            

            if(this.character.physics.velocity.y>0 && (this.character.x >= this.villian.x - this.villian.width *.5 && this.character.x <= this.villian.x +this.villian.width+this.villian.width*.15)
                && (this.character.y +this.villian.height *.3< this.villian.y)
            ){
                this.implodeBlue.x = this.villian.x- 10;
                this.implodeBlue.y = this.villian.y- 10;
                
                this.villian.y = 90000; 
                this.villian.x = 90000;
                this.villian.physics.acceleration.y = 0;
                this.implodeBlue.animation.play('idle'); 
    
            }
            else{
                
                hurt = true;
                this.implode.x = this.character.x- 19;
                this.implode.y = this.character.y- 14;
                this.character.y = 90000;
                this.character.x = 90000;
                this.implode.animation.play('idle');    
            }

        }
         else if(this.character.physics.overlaps(this.villian2,true)){
            

            if(this.character.physics.velocity.y>0 && (this.character.x >= this.villian2.x - this.villian2.width *.5 && this.character.x <= this.villian2.x +this.villian2.width+this.villian2.width*.15)
                 && (this.character.y +this.villian2.height *.3< this.villian2.y)
            ){
                this.implodeBlue.x = this.villian2.x- 10;
                this.implodeBlue.y = this.villian2.y- 10;
                this.villian2.y = 90000; 
                this.villian2.y = 90000;
                this.villian2.physics.acceleration.y = 0;
                this.implodeBlue.animation.play('idle'); 
            }
            else{
                 hurt = true;   
                 this.implode.x = this.character.x- 19;
                this.implode.y = this.character.y- 14;
                 this.character.y = 90000;
                this.character.x = 90000;
                this.implode.animation.play('idle'); 
            }

        }
         else if(this.character.physics.overlaps(this.blade,true)){
            

            if(this.character.physics.velocity.y>0 && (this.character.x >= this.blade.x - this.blade.width *.5 && this.character.x <= this.blade.x +this.blade.width+this.blade.width*.15)
                 && (this.character.y +this.blade.height *.3< this.blade.y)
            ){
                this.implodeBlue.x = this.blade.x- 10;
                this.implodeBlue.y = this.blade.y- 10;
                this.blade.y = 90000; 
                this.blade.y = 90000;
                this.blade.physics.acceleration.y = 0;
                this.implodeBlue.animation.play('idle'); 
            }
            else{
                 hurt = true;   
                 this.implode.x = this.character.x- 19;
                this.implode.y = this.character.y- 14;
                 this.character.y = 90000;
                this.character.x = 90000;
                this.implode.animation.play('idle'); 
            }

        }
         else if(this.character.physics.overlaps(this.soldier,true)){
           
            

            if(this.character.physics.velocity.y>0 && (this.character.x >= this.soldier.x - this.soldier.width *.5 && this.character.x <= this.soldier.x +this.soldier.width+this.soldier.width*.15)
                 && (this.character.y +this.soldier.height *.3< this.soldier.y)
            ){
                this.implodeBlue.x = this.soldier.x- 10;
                this.implodeBlue.y = this.soldier.y- 10; 
                this.soldier.y = 90000; 
                this.soldier.x = 90000;
                this.soldier.physics.acceleration.y = 0;
                this.implodeBlue.animation.play('idle'); 
            }
            else{
                
                hurt = true;  
                 this.implode.x = this.character.x- 19;
                this.implode.y = this.character.y- 14;
                 this.character.y = 90000;
                this.character.x = 90000;
                this.implode.animation.play('idle');  
            }

        }
         else if(this.character.physics.overlaps(this.soldier2,true)){

            

            if(this.character.physics.velocity.y>0 && (this.character.x >= this.soldier2.x - this.soldier2.width *.5 && this.character.x <= this.soldier2.x +this.soldier2.width+this.soldier2.width*.15)
                 && (this.character.y +this.soldier2.height *.3< this.soldier2.y)
            ){
                this.implodeBlue.x = this.soldier2.x- 10;
                this.implodeBlue.y = this.soldier2.y- 10;
                this.soldier2.y = 90000; 
                 this.soldier2.x = 90000;
                this.soldier2.physics.acceleration.y = 0;
                this.implodeBlue.animation.play('idle'); 
            }
            else{
                  
                hurt = true; 
                 this.implode.x = this.character.x- 19;
                this.implode.y = this.character.y- 14;
                 this.character.y = 90000;
                this.character.x = 90000;
                this.implode.animation.play('idle');   
            }

        }
        else if(this.character.physics.overlaps(this.wizard,true)){
            

            if(this.character.physics.velocity.y>0 && (this.character.x >= this.wizard.x - this.wizard.width *.8 && this.character.x <= this.wizard.x +this.wizard.width+this.wizard.width*.15)
                 && (this.character.y +this.wizard.height *.3< this.wizard.y)
            ){
                this.implodeBlue.x = this.wizard.x- 10;
                this.implodeBlue.y = this.wizard.y- 10; 
                this.wizard.y = 90000; 
                 this.wizard.x = 90000; 
                this.wizard.physics.acceleration.y = 0;
                
                this.implodeBlue.animation.play('idle'); 
            }
            else{
                  
                hurt = true;    
                 this.implode.x = this.character.x- 19;
                this.implode.y = this.character.y- 14;
                 this.character.y = 90000;
                this.character.x = 90000;
                this.implode.animation.play('idle');
            }

        }
         else if(this.character.physics.overlaps(this.wizard2,true)){
            

            if(this.character.physics.velocity.y>0 && (this.character.x >= this.wizard2.x - this.wizard2.width *.8 && this.character.x <= this.wizard2.x +this.wizard2.width+this.wizard2.width*.15)
                 && (this.character.y +this.wizard2.height *.3< this.wizard2.y)
            ){
                this.implodeBlue.x = this.wizard2.x- 10;
                this.implodeBlue.y = this.wizard2.y- 10; 
                this.wizard2.y = 90000;
                 this.wizard2.x = 90000;
                this.wizard2.physics.acceleration.y = 0;
                
                this.implodeBlue.animation.play('idle');  
            }
            else{
                  
                hurt = true;    
                 this.implode.x = this.character.x- 19;
                this.implode.y = this.character.y- 14;
                 this.character.y = 90000;
                this.character.x = 90000;
                this.implode.animation.play('idle');
            }

        }



     //Dealing with the ground

     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (! this.villian.physics.isTouching(Kiwi.Components.ArcadePhysics.DOWN)){
            this.villian.animation.play('walking');
            if(rightEdge){
                leftEdge = true;
                rightEdge = false;
                this.villian.x -=1;
                this.villian.y -=1;
            }
            else{
                rightEdge= true;
                leftEdge = false;
                this.villian.x +=1;
                this.villian.y -=1;
                
            }
        }

            if(rightEdge){
                this.villian.scaleX = 1;
                this.villian.physics.velocity.x = 25;
                

            }
            else if(leftEdge){
                this.villian.scaleX = -1;
                this.villian.physics.velocity.x = -25;
                
                
            }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    if (! this.villian2.physics.isTouching(Kiwi.Components.ArcadePhysics.DOWN)){
        this.villian2.animation.play('walking');
            if(rightEdge2){

                leftEdge2 = true;
                rightEdge2 = false;
                this.villian2.x -=1;
                this.villian2.y -=1;
                
            }
            else{
                rightEdge2= true;
                leftEdge2 = false;
                this.villian2.x +=1;
                this.villian2.y -=1;
                
            }
        }
            
            
            if(rightEdge2){
                this.villian2.scaleX = 1;
                this.villian2.physics.velocity.x = 25;
                

            }
            else if(leftEdge2){
                this.villian2.scaleX = -1;
                this.villian2.physics.velocity.x = -25;
                
                
            }

     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        seconds++;
        secondsForBoomerang++;
         if( secondsForBoomerang === 500){
             this.boomerang.y = this.blade.y;
            this.boomerang.x =this.blade.x - this.boomerang.width*.52;
            this.boomerang.animation.play('walking');
             this.boomerang.physics.velocity.x=-60;
             secondsForBoomerang =0;

        }
        if(this.boomerang.x > (this.blade.x - this.boomerang.width*.52)){
            this.boomerang.y = 20000;
        }


    
        if( seconds ===300){
                this.soldier.y -=1;
                this.soldier.physics.velocity.y = -29;
                this.soldier.animation.play('jumping');
                this.blast.y = this.wizard.y + this.blast.height*.2;
                this.blast.x = this.wizard.x - this.blast.width *.82;
                this.blast.animation.play('walking');
                this.blast2.y = this.wizard.y + this.blast.height*.2;
                this.blast2.x = this.wizard.x - this.blast.width *.82;
                this.blast2.animation.play('walking');
                this.blast3.y = this.wizard.y + this.blast.height*.2;
                this.blast3.x = this.wizard.x - this.blast.width *.82;
                this.blast3.animation.play('walking');

               
               
                    this.blast.physics.velocity.x = -17;
                    this.blast.physics.velocity.y = 17;
               
                    this.blast2.physics.velocity.x = -17;
                    this.blast2.physics.velocity.y = -17;
                
                    this.blast3.physics.velocity.x = -17;




                this.blast21.y = this.wizard2.y + this.blast21.height*.2;
                this.blast21.x = this.wizard2.x - this.blast21.width *.82;
                this.blast21.animation.play('walking');
                this.blast22.y = this.wizard2.y + this.blast22.height*.2;
                this.blast22.x = this.wizard2.x - this.blast22.width *.82;
                this.blast22.animation.play('walking');
                this.blast23.y = this.wizard2.y + this.blast.height*.2;
                this.blast23.x = this.wizard2.x - this.blast.width *.82;
                this.blast23.animation.play('walking');

               
               
                    this.blast21.physics.velocity.x = -17;
                    this.blast21.physics.velocity.y = 17;
               
                    this.blast22.physics.velocity.x = -17;
                    this.blast22.physics.velocity.y = -17;
                
                    this.blast23.physics.velocity.x = -17;


            }
                
  
      if( seconds ===300){
                this.soldier2.animation.play('walking');
                this.soldier2.y -=1;
                this.soldier2.physics.velocity.y = -27;
               
                seconds =0;
            }
    


      if (! this.soldier.physics.isTouching(Kiwi.Components.ArcadePhysics.DOWN)){
            this.soldier.animation.play('walking');

            if(rightEdge3){



                leftEdge3 = true;
                rightEdge3 = false;
                this.soldier.x -=1;
                this.soldier.y -=.1;
                
            }
            else{
                rightEdge3= true;
                leftEdge3 = false;
                this.soldier.x +=1;
                this.soldier.y -=.1;
                
            }
        }

            
            
            if(rightEdge3){
                this.soldier.scaleX = 1;
                this.soldier.physics.velocity.x = 10;
                

            }
            else if(leftEdge3){
                this.soldier.scaleX = -1;
                this.soldier.physics.velocity.x = -10;
                
                
            }
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      if (! this.soldier2.physics.isTouching(Kiwi.Components.ArcadePhysics.DOWN)){
        this.soldier2.animation.play('walking');

            if(rightEdge4){

                leftEdge4 = true;
                rightEdge4 = false;
                this.soldier2.x -=1;
                this.soldier2.y -=.1;
                
            }
            else{
                rightEdge4= true;
                leftEdge4 = false;
                this.soldier2.x +=1;
                this.soldier2.y -=.1;
                
            }
        }

            if(rightEdge4){
                this.soldier2.scaleX = 1;
                this.soldier2.physics.velocity.x = 10; 

            }
            else if(leftEdge4){
                this.soldier2.scaleX = -1;
                this.soldier2.physics.velocity.x = -10;
                
            }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        if (this.character.physics.isTouching(Kiwi.Components.ArcadePhysics.DOWN)) {
            
            
            //Does the player want to up?
            if (this.game.input.keyboard.isDown(Kiwi.Input.Keycodes.W)) {
                this.character.physics.velocity.y = -37;
                this.character.animation.play('goingUp');

           
            }
            else if (this.game.input.keyboard.isDown(Kiwi.Input.Keycodes.S)) {
                this.character.y = this.character.y;
                this.character.animation.play('goingUp');

            //No velocity? Ok then we are standing still
            }

             else if(this.character.physics.velocity.x == 0) {
                this.character.animation.play('idle');

            //Not jumping or standing still? Then lets walk  (and we aren't already)
            } else if(this.character.animation.currentAnimation.name != 'walking') {
                this.character.animation.play('walking');

            }


        //So we're not touching the ground, are we going down?
        } else if (this.character.physics.velocity.y > 0) {

             if (this.game.input.keyboard.isDown(Kiwi.Input.Keycodes.S)) {
                //this.character.physics.velocity.y = -4;
                //this.character.animation.play('goingUp');
                this.character.y = 0;

            //No velocity? Ok then we are standing still....duh de doo
            }
            
                
            this.character.physics.velocity.y += 2.9;
            

            this.character.animation.play('goingDown');

        }

    }

    //Creating our own GameObject that extends Sprite so we can add the ArcadePhysics Component to it.
    var CustomSprite = function(interiorState,texture,x,y) {
        Kiwi.GameObjects.Sprite.call(this, interiorState, texture, startingX, y);

        //add the ArcadePhysics Component to our new GameObject
        this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));

        this.update = function() {

            Kiwi.GameObjects.Sprite.prototype.update.call(this);
            //Execute the update method on the ArcadePhysics Component.
            this.physics.update();


        }

    }

    Kiwi.extend(CustomSprite, Kiwi.GameObjects.Sprite);


