<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>

        body {
            overflow: hidden;
        }
      

        .textBox{
            width: 100%;
            height: 100%;
            position: absolute;
            transition: transform 1s;
            z-index: 2;
        }

        #teil1{
            background-color: lightblue;
            transform: translate(0,0);
        }

        #teil2{
            background-color: lightgreen;
            transform: translate(0,100%);
        }
    </style>
</head>
<body>
    <div id="main">
        <div id="teil1" class="textBox"><button id="button1">Teil1</button></div>
        <div id="teil2" class="textBox"><button id="button2">Teil2</button></div>
    </div>
    <script>
        function move1(){
            let x = document.getElementById("teil1");
            x.style.transform = "translate(0, -100%)";

            let y = document.getElementById("teil2");
            y.style.transform = "translate(0, 0)";
        }

        function move2(){
            let x = document.getElementById("teil1");
            x.style.transform = "translate(0, 0)";

            let y = document.getElementById("teil2");
            y.style.transform = "translate(0, 100%)";
        }

        document.getElementById("button1").addEventListener("click", move1);
        document.getElementById("button2").addEventListener("click", move2);
    </script>
</body>
</html>