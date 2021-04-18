class Form {
    constructor(){
        this.title = createElement("H1");
        this.L1 = createElement("H2");
        this.input = createInput("Enter Name Here");
        this.button = createButton("PLAY");
        this.greeting = createElement("H2");
    }
    hide(){
            this.L1.hide();
            this.input.hide();
            this.button.hide();
    }
    display(){ 
        this.title.position(220, 50);
        this.title.html("Multiplayer Car Racing");
        
        this.L1.position(300, 100);
        this.L1.html("Enter your name");
        
        this.input.position(300, 150);
        
        this.button.position(360, 230);
        
        this.greeting.position(320, 100);

        this.button.mousePressed(()=>{
            this.L1.hide();
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            pCount++;
            player.index=pCount;
            player.update();
            player.updateCount(pCount);
            this.greeting.html("Welcome " + player.name);
        })
    }
}