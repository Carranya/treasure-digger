class Game {
    constructor() {
        this.cols = 10;
        this.rows = 10;
        this.chests = 10;
        this.turns = 0;
        this.setCards = {};
    }

    board() {

        let boardWidth = this.cols * 50;
        let boardHeight = this.rows * 50;

        let board = document.createElement("div");
        board.setAttribute("id", "board");
        board.setAttribute("style", "");
        board.style.width = boardWidth + "px";
        board.style.height = boardHeight + "px";
        board.style.border = "5px solid blueviolet";
        board.style.display = "flex";
        board.style.flexWrap = "wrap";
        document.getElementById("main").append(board);

        /* for(let c=0; c<this.cols; c++){
            for(let r=0; r<this.rows; r++){
                let randId = c + "" + r;
                let randCard = Math.floor(Math.random() * 100);
                this.setCards[randId] = randCard;
                if(randCard == 1){
                    this.chests++;
                }
            }
        } */



    }

    /*  randomCards() {
        for (let i = 0; i < this.chests; i++) {
            let randCard = Math.floor(Math.random() * 100);
            let randId = randCard.toString();
            if (this.setCards[randId] == "1") {
                this.randomCards();
            } else {
                this.setCards[randId] = "1";
            }
        }
    }  */

   /* randomChests() {
        this.count = 0;
        for (let i = 0; i < this.chests; i++) {
            this.randChest();
        }
    }

    randChest() {
        this.count++;
        this.randCard = Math.floor(Math.random() * 100);
        this.randId = this.randCard.toString();
        if (this.setCards[this.randId] == "0000000000"){
            this.randChest();
        } else {
            this.setCards[this.randId] = "0000000000";
        }
    }
 */

    randChests(){
        
    }


    show() {
        for (let c = 0; c < this.cols; c++) {
            for (let r = 0; r < this.rows; r++) {
                let id = c + "" + r;
                let test = document.createElement("div");
                test.setAttribute("id", id);
                let text = "ID: " + id + " / Card: " + this.setCards[id];
                test.innerHTML = text;
                document.getElementById("test").append(test);
            }
        }
        document.getElementById("chest").innerHTML = "Total Durchläufe: " + this.count;
    }



}

window.onload = function () {
    let game;
    game = new Game();
    game.board();
    game.randomChests();
    game.show();
}


