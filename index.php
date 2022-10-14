<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Treasure Digger</title>
    <script type="text/javascript" src="treasure.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="header">Treasure Digger</div>
    <br>
        <div id="board"></div>
        <br>
        <div id="turns" class="infoScore"></div>
        <div id="findChests" class="infoScore"></div>

        <div id="footer">
            <div id="footText">Karin Giang 2022</div>
        </div>
    <div class="idBox">
        <div id="gameSettings" class="infoBox">
            <p>Columns: <select id="setupCols">
                <?php
                    for($c = 10; $c<=20; $c=$c+5){
                        echo "<option value=$c>$c</option>";
                    }
                ?>
                </select><br>

                Rows: <select id="setupRows">
                <?php
                    for($r=10; $r<=20; $r=$r+5){
                        echo "<option value=$r>$r</option>";
                    }
                ?>
                </select><br>

                Chests: <select id="setupChests">
                <?php
                    for($ch=10; $ch<=20; $ch++){
                        echo "<option value=$ch>$ch</option>";
                    }
                ?>
                </select></p>
                
            <p><input type="button" id="idSettings" value="Start Game"></p>
        </div>
    </div> 

    <div class="idBox">
        <div id="winBox" class="infoBox">
            <h1>You win!</h1>
            <p>Turns: <span id="winTurns"></span></p>
            <p><a href="index.php" id="newGame">New Game?</a><p>
        </div>
    </div>

    
</body>
</html>
