var form, game, player;
var database;
var player, form, game;
var GS = 0;
var pCount = 0;
var allPlayers ;
function setup(){
    createCanvas(600, 400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    //background(255);
    if(pCount===2){
        game.updateState(1);
    }
   if(GS===1){
       clear();
       game.play();
   }
}