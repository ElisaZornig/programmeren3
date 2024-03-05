<?php
////Require functions for actions
//require_once "includes/actions.php";
//
////Based on the existence of the GET parameter, 1 of the 2 functions will be called
//if (!isset($_GET['id'])) {
//    $data = getBooks();
//} else {
//    $data = getBooksDetails($_GET['id']);
//}
//
////Set the header & output JSON so the client will know what to expect.
//header("Content-Type: application/json");
//echo json_encode($data);
//exit;
//?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/style.css">
    <script defer src="./js/javascript.js"></script>
    <title>Document</title>
</head>

<body>
<header>
    <h1>Kinderboeken magazine</h1>
</header>
<main>
    <section class="kinderboeken" id="kinderboeken">
        <div class="boek" id="1">
            <h2>De Gorgels</h2>
            <img src="./img/De_Gorgels.png">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
        <div class="boek" id="2">
            <h2>Dolfje Weerwolfje</h2>
            <img src="./img/Dolfje_weerwoflje.jpg">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
        <div class="boek" id="3">
            <h2>Pluk van de Petteflet</h2>
            <img src="./img/Pluk_van_de_Petteflet.jpg">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
        <div class="boek" id="4">
            <h2>Jip en Janneke</h2>
            <img src="./img/Jip_en_janneke.jpg">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
        <div class="boek" id="5">
            <h2>Kruistocht in Spijkerbroek</h2>
            <img src="./img/kruistocht.jpg">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
        <div class="boek" id="6">
            <h2>Pietje Bell</h2>
            <img src="./img/pietje.jpg">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
        <div class="boek" id="7">
            <h2>Koning van Katoren</h2>
            <img src="./img/koning.png">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
        <div class="boek" id="8">
            <h2>Oorlogswinter</h2>
            <img src="./img/oorlogs.jpg">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
        <div class="boek" id="9">
            <h2>Dagboek van een muts</h2>
            <img src="./img/dagboek.jpeg">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
        <div class="boek" id="10">
            <h2>Het leven van een loser</h2>
            <img src="./img/loser.jpg">
            <button class="add">
                Voeg toe aan favorieten
            </button>
            <button class="remove" style = "display:none">
                Verwijder uit favorieten
            </button>
            <button class="details">
                Details
            </button>
        </div>
    </section>
    <section class="detail-venster" id="detailsVenster" style="display: none">
        <h2>title</h2>
        <p>details</p>
        <button class="close" id="close">
            Close
        </button>
    </section>
</main>
</body>
</html>
