<?php
$pokemonArray = [];
for($i = 0; $i < 10; $i++){
    $pokemonArray[]= [
    "id" => $i,
    "name" => "pokemon",
    ];
}
header("Content-Type: application/json");
echo json_encode($pokemonArray);
exit;

