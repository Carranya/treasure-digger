class Game {
    constructor() {
        this.cols = 10;
        this.rows = 10;
        this.setChests = {};
        this.chests = 10;
        this.turns = 0;
    }

    board() {
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

    randChests() {
        this.counter = 0;
        for (let i = 0; i < this.chests; i++) {
            let randno = Math.floor(Math.random() * 100);
            let randId = randno.toString();
            this.setChests[randId] = "chest";
        }
    }

    setTiles() {
         this.setChests["56"] = "chest";
        this.setChests["35"] = "chest";
        this.setChests["23"] = "chest";
        this.setChests["85"] = "chest";
        this.setChests["46"] = "chest";
        this.setChests["72"] = "chest";
        this.setChests["77"] = "chest";
        this.setChests["69"] = "chest";
        this.setChests["12"] = "chest";
        this.setChests["03"] = "chest"; 

        for (let c = 0; c < this.cols; c++) {
            for (let r = 0; r < this.rows; r++) {
                let tileId = c + "" + r;
                let tile = document.createElement("img");

                if (this.setChests[tileId] == undefined) {
                    this.setChests[tileId] = "empty";
                }

                if (this.setChests[tileId] == "chest") {
                    // let checkId = parseInt("52");
                    let checkId = parseInt(tileId);
                    // let checkId = 51;
                    let direction = [
                        (checkId - 10),
                        (checkId + 1),
                        (checkId + 10),
                        (checkId - 1)
                    ];

             
                  

                     for (let i = 0; i < 4; i++) {
                        let nearTileId = direction[i].toString();
                        if(this.setChests[nearTileId] != "chest"){
                        this.setChests[nearTileId] = "near";
                        }
                    } 
                }



                tile.src = "img/" + this.setChests[tileId] + ".jpg";
                tile.id = tileId;
                tile.setAttribute("style", "");
                tile.style.width = "48px";
                tile.style.height = "48px";
                tile.style.border = "1px solid black";
                document.getElementById("board").append(tile);
            }
        }


    }

}

window.onload = function () {
    let game;
    game = new Game;
    game.board();
    // game.randChests();
    game.setTiles();

}