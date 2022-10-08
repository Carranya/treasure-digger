class Game {
    constructor() {
        this.cols = 10;
        this.rows = 10;
        this.setChests = {};
        this.chests = 10;
        this.turns = 0;
        this.counter = 0;
    }

    createBoardSize() {
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

/*     randChests() {
        this.counter = 0;
        for (let i = 0; i < this.chests; i++) {
            let randno = Math.floor(Math.random() * 100);
            let randId = randno.toString();
            this.setChests[randId] = "chest";
        }
    } */

    randChests() {
        let randCol = Math.floor(Math.random() * this.cols);
        let randRow = Math.floor(Math.random() * this.rows);

        if(this.setChests[randCol + "-" + randRow] == undefined){
            this.setChests[randCol + "-" + randRow] = "chest";
            this.counter++;
        }

        if(this.counter != this.chests){
            this.randChests();
        }
    }

    setTiles() {
        for (let c = 0; c < this.cols; c++) {
            for (let r = 0; r < this.rows; r++) {
                let tileId = c + "" + r;

                if (this.setChests[tileId] == "chest") {
                    let checkId = parseInt(tileId);
                    let direction = [
                        (checkId - this.cols),
                        (checkId + 1),
                        (checkId + this.cols),
                        (checkId - 1)
                    ];

                    for (let i = 0; i < 4; i++) {
                        let nearTileId
                        if(direction[i] < 10){
                            nearTileId = "0" + direction[i].toString();
                        } else {
                            nearTileId = direction[i].toString();
                        }

                        if (this.setChests[nearTileId] != "chest") {
                            this.setChests[nearTileId] = "near";
                        }
                    }
                }

                if (this.setChests[tileId] == undefined) {
                    this.setChests[tileId] = "empty";
                }
            }
        }


    }

    createBoard() {
        for (let c = 0; c < this.cols; c++) {
            for (let r = 0; r < this.rows; r++) {
                let fieldId = c + "" + r;
                let tile = document.createElement("img");
                tile.src = "img/" + this.setChests[fieldId] + ".jpg";
                tile.id = fieldId;
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
    game.createBoardSize();
    game.randChests();
    game.setTiles();
    game.createBoard();

}