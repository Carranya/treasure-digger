class Game{
    constructor(cols, rows){
        this.cols = cols;
        this.rows = rows;
        this.tiles = {};
    }

    createBoardSize() {
        let boardWidth = this.cols * 50;
        let boardHeight = this.rows * 50;

        let board = document.getElementById("board");
        board.style.width = boardWidth + "px";
        board.style.height = boardHeight + "px";
    }

    getTiles(){
        for (let r=0; r<this.rows; r++){
            for (let c=0; c<this.cols; c++){
                let tileId = c + "-" + r;
                this.tiles[tileId] = 0;
            }
        }
    }

    showTiles(){
        for(let i=0; i<this.tiles.length; i++){
            let show = document.createElement("div");
            show.innerHTML = this.tiles[i];
            document.getElementById("turns").append(show);
        }
    }
}

window.onload = function(){
    let game = new Game(10, 10);
    game.createBoardSize();
    game.getTiles();
    game.showTiles();
}