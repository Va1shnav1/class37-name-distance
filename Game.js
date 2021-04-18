class Game{
    constructor(){

    }
    getState(){
        var stateRef = database.ref('gameState')
        console.log("hello");
        stateRef.on("value", function(data){
            GS = data.val();
        })
        console.log(GS);
    }
    updateState(State){
        database.ref('/').update({
            gameState:State
        })
    }
    async start(){
        if(GS===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                pCount=playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        text("Game Start", 150, 150);
        Player.getPlayerInfo();
        if(allPlayers!== undefined){
            var pos = 100;
            //for(var plr= 0; plr<allPlayers.length;plr++)
            for(var plr in allPlayers ){
                if(plr==="Player"+player.index){
                    fill("red");
                }else{
                    fill("black");
                }
                text(allPlayers[plr].Name+":"+allPlayers[plr].Distance, 120, pos)
                pos+=30;
            }
            
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            console.log("up arrow");
            player.distance+=50;
            player.update();
        }
    }
}