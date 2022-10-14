<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function fcheck(){
            let firstData = document.formData.erster.value;
            let secondData = document.formData.zweiter.value;
            alert(firstData + "/ " + secondData)
        }
    </script>
</head>
<body>
    <div id="main">
        <form name="formData" action="test.php">
            <p>Erster: <input name="erster"></p>
            <p>Zweiter: <input name="zweiter"></p>
            <p><button id="idButton">Senden</button></p>
        </form>
    </div>
    <div id="ausgabe"></div>
    <script>
        let clickButton = document.getElementById("idButton");
        clickButton.addEventListener("click", fcheck);
    </script>
</body>
</html>