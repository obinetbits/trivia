//exports = typeof window !== "undefined" && window !== null ? window : global;

var gameRunner = require('./gameRunner');

var app = function(){
  var notAWinner = false;

  var game = new gameRunner.Game();
  
  game.add('Chet');
  game.add('Pat');
  game.add('Sue');
  
  do{
    //generate a random number from 1 - 6: roll a dice
    game.roll(Math.floor(Math.random()*6) + 1);
  
    //generate a random number from 0 - 9, of which all numbers indicate correct answer except 7
    if(Math.floor(Math.random()*10) == 7){
      notAWinner = game.wrongAnswer();
    }else{
      notAWinner = game.wasCorrectlyAnswered();
    }
  
  }while(notAWinner);
};

app();

module.exports = app;
