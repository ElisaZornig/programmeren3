<?php
$mymusic = file_get_contents("les1.JSON");
$myData = json_decode($mymusic);

foreach($myData -> music as $music){
    $music -> artist = "milanova";
}
header("Content-Type: application/json");
echo json_encode($myData);
exit;