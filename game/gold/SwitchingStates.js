var myGame = new Kiwi.Game();
myGame.states.addState(loadingState);
myGame.states.addState(interiorState);
myGame.states.addState(outsideState);
myGame.states.addState(level2);


myGame.states.switchState("LoadingState");