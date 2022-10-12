class Game {
    constructor(cols, rows, chests) {
        this.cols = cols;
        this.rows = rows;
        this.chests = chests;
        this.setChests = {};
        this.findChests = 0;
        this.turns = 0;
        this.counter = 0;

    }

    createBoardSize() {
        let boardWidth = this.cols * 50;
        let boardHeight = this.rows * 50;

        let board = document.getElementById("board");
        board.style.width = boardWidth + "px";
        board.style.height = boardHeight + "px";
        board.style.border = "5px solid black";
        board.style.display = "flex";
        board.style.flexWrap = "wrap";
        board.style.margin ="auto auto";

        document.getElementById("turns").innerHTML = "Turns: " + this.turns;
        document.getElementById("findChests").innerHTML = "Chests: " + this.findChests + "/" + this.chests;
    }

    randChests() {
        let randRow = Math.floor(Math.random() * this.rows);
        let randCol = Math.floor(Math.random() * this.cols);

        if (this.setChests[randCol + "-" + randRow] == undefined) {
            this.setChests[randCol + "-" + randRow] = "chest";
            this.counter++;
        }

        if (this.counter != this.chests) {
            this.randChests();
        }
    }

    setTiles() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (this.setChests[c + "-" + r] == "chest") {
                    const direction = {};

                    if (c == 0) {
                        direction[0] = "";
                    } else {
                        direction[0] = (c - 1) + "-" + r;
                    }

                    if (r == 0) {
                        direction[1] = "";
                    } else {
                        direction[1] = c + "-" + (r - 1);
                    }

                    if (c == (this.cols - 1)) {
                        direction[2] = "";
                    } else {
                        direction[2] = (c + 1) + "-" + r;
                    }

                    if (r == (this.rows - 1)) {
                        direction[3] = "";
                    } else {
                        direction[3] = c + "-" + (r + 1);
                    }


                    for (let i = 0; i < 4; i++) {
                        if (direction[i] != "") {
                            if (this.setChests[direction[i]] != "chest") {
                                this.setChests[direction[i]] = "near";
                            }
                        }
                    }
                }

                if (this.setChests[c + "-" + r] == undefined) {
                    this.setChests[c + "-" + r] = "empty";
                }
            }
        }


    }

    createBoard() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                let fieldId = c + "-" + r;
                let tile = document.createElement("img");
                // tile.src = "img/" + this.setChests[fieldId] + ".jpg";
                tile.src = "img/back.jpg";
                tile.id = fieldId;
                tile.setAttribute("style", "");
                tile.style.width = "48px";
                tile.style.height = "48px";
                tile.style.border = "1px solid black";
                document.getElementById("board").append(tile);
            }
        }
    }


    checkCard(pickId) {
        let pickCard = document.getElementById(pickId);
        pickCard.src = "img/" + this.setChests[pickId] + ".jpg";
        this.turns++;

        if(this.setChests[pickId] == "chest"){
            this.findChests++;
        }

        document.getElementById("turns").innerHTML = "Turns: " + this.turns;
        document.getElementById("findChests").innerHTML = "Chests: " + this.findChests + "/" + this.chests;

        if(this.findChests == this.chests){
            for(let r=0; r<this.rows; r++){
                for(let c=0; c<this.cols; c++){
                    let winId = c + "-" + r;
                    let winShow = document.getElementById(winId);
                    winShow.src = "img/" + this.setChests[winId] + ".jpg";
                }
            }

            document.getElementById("winTurns").innerHTML = this.turns;
            setTimeout(this.win, 1000);
        }
    }

    win(){
        document.getElementById("winBox").style.transform = "translate(0, 0)";
    }

}

window.onload = function () {
    let game;

    document.getElementById("idSettings").addEventListener("click", gameSettings);

    function gameSettings(){

        document.getElementById("gameSettings").style.transform = "translate(0, -3000px)";
        
        let cols = document.getElementById("setupCols").value;
        let rows = document.getElementById("setupRows").value;
        let chests = document.getElementById("setupChests").value;

        game = new Game(cols, rows, chests);
        game.createBoardSize();
        game.randChests();
        game.setTiles();
        game.createBoard();

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let pickId = c + "-" + r;
                let pick = document.getElementById(pickId);
                pick.addEventListener("click", function () { game.checkCard(pickId); });
            }
        }
    }
}