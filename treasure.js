class Game{
    constructor(){
        this.cols = 10;
        this.rows = 10;
        this.setChests = {};
        this.chests = 10;
        this.turns = 0;
    }

    board(){
        let boardWidth = this.cols * 50;
        let boardHeight = this.rows * 50;

        let board = document.createElement("div");
        board.setAttribute("id", "board");
        board.setAttribute("style", "");
        board.style.width = boardWidth + "px";
        board.style.height = boardHeight + "px";
        board.style.border = "5px solid green";
        board.style.display = "flex";
        board.style.flexWrap = "wrap";
        document.getElementById("main").append(board);
    }

    randChests(){
        for(let i=0; i<this.chests; i++){
            let randno = Math.floor(Math.random() * 100);
            let randId = randno.toString();
            this.setChests[randId] = "1";
        }
    }

    show(){
        for(let c=0; c<this.cols; c++){
            for(let r=0; r<this.rows; r++){
                let id = c + "" + r;
                let text = "ID: " + id + " / Nr. " + this.setChests[id];
                let test = document.createElement("div");
                test.setAttribute("id", id);
                test.innerHTML = text;
                document.getElementById("test").append(test);
            }
        }
    }

    check(){
        for(let c=0; c<this.cols; c++){
            for(let r=0; r<this.rows; r++){
                let id = c + "" + r;
                if(this.setChests[id] == "1"){
                    alert(id);
                }
            }
        }
    }
}

window.onload = function(){
    let game;
    game = new Game;
    game.board();
    game.randChests();
    game.show();
    game.check();
}