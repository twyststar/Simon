exports.simonModule = Simon;

function Simon (){
  this.game = [];
}

var turn = 0;
var counts = [];

Simon.prototype.prepArr = function(){
  this.demoTurn();
};

Simon.prototype.playerTurn = function(){

};


Simon.prototype.demoTurn = function(){
  this.game.push(Math.floor(Math.random() * 4) + 1 );
  game = this.game;
  for(var start = 0; start < game.length; start++) {
    (function(i){
      setTimeout(function(){
        if(game[i] == 1){
        $("#sq1").addClass("green-back").delay(500).queue(function(next){
            $(this).removeClass("green-back");
            console.log('green');
            next();
            counts.push(i);
        });
        } else if(game[i] == 2){
          $("#sq2").addClass("red-back").delay(500).queue(function(next){
              $(this).removeClass("red-back");
              console.log('red');
              next();
              counts.push(i);
          });
        } else if(game[i] == 3){
          $("#sq3").addClass("yellow-back").delay(500).queue(function(next){
              $(this).removeClass("yellow-back");
              console.log('yellow');
              next();
              counts.push(i);
          });
        } else {
          $("#sq4").addClass("blue-back").delay(500).queue(function(next){
              $(this).removeClass("blue-back");
              console.log('blue');
              next();
              counts.push(i);
          });
        }

      }, 700 * i);
    })(start);
  }

  console.log(game);
}

Simon.prototype.playtest = function(game, counts){
  if (game.length != counts.length){
    console.log('turn!');
  }
}
