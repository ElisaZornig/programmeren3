<?php
/**
 * @return array
 */
function getBooks()
{
    return [
        [
            "id" => 1,
            "title" => "De Gorgels",
            "author" => "Jochem Myjer",
            "image" => "De_Gorgels.png"
        ],
        [
            "id" => 2,
            "title" => "Dolfje Weerwolfje",
            "author" => "Paul van Loon",
            "image" => "Dolfje_weerwoflje.jpg"
        ],
        [
            "id" => 3,
            "title" => "Pluk van de Petteflet",
            "author" => "Annie M.G. Schmidt",
            "image" => "Pluk_van_de_Petteflet.jpg"
        ],
        [
            "id" => 4,
            "title" => "Jip en Janneke",
            "author" => "Annie M.G. Schmidt",
            "image" => "Jip_en_janneke.jpg"
        ],
        [
            "id" => 5,
            "title" => "Kruistocht in Spijkerbroek",
            "author" => "Thea Beckman",
            "image" => "kruistocht.jpg"
        ],
        [
            "id" => 6,
            "title" => "Pietje Bell",
            "author" => "Chris van Abkoude",
            "image" => "pietje.jpg"
        ],
        [
            "id" => 7,
            "title" => "Koning van Katoren",
            "author" => "Jan Terlouw",
            "image" => "koning.png"
        ],
        [
            "id" => 8,
            "title" => "Oorlogswinter",
            "author" => "Jan Terlouw",
            "image" => "oorlogs.jpg"
        ],
        [
            "id" => 9,
            "title" => "Dagboek van een muts",
            "author" => "Rachel Renée Russell",
            "image" => "dagboek.jpeg"
        ],
        [
            "id" => 10,
            "title" => "Het leven van een loser",
            "author" => "Jeff Kinney",
            "image" => "loser.jpg"
        ]
    ];
}



/**
 * @param $id
 * @return mixed
 */
function getBooksDetails($id)
{
    $tags = [
        1 => [
            "summary" => "Een spannend avontuur waarbij de hoofdpersoon een geheim recept ontdekt en het in de oven bakt.",
            "tags" => ['avontuur', 'geheim', 'oven']
        ],
        2 => [
            "summary" => "Een boeiend verhaal over een jongen die ontdekt hoe je een heerlijke Hollandse maaltijd kunt maken...",
            "tags" => ['Nederlands', 'gezond', 'stamppot', 'boerenkool']
        ],
        3 => [
            "summary" => "Een hartverwarmend verhaal over een maaltijd die nog lekkerder smaakt als je oma het maakt.",
            "tags" => ['familie', 'traditie']
        ],
        4 => [
            "summary" => "Een favoriete maaltijd voor veel mensen na een avondje uit in de stad.",
            "tags" => ['fastfood', 'lekker', 'vlees']
        ],
        5 => [
            "summary" => "Een specialiteit die je kunt proeven wanneer je op vakantie bent in Spanje.",
            "tags" => ['vis']
        ],
        6 => [
            "summary" => "Een magisch verhaal over cupcakes die tot leven komen.",
            "tags" => ['magie', 'cupcakes']
        ],
        7 => [
            "summary" => "Een avontuurlijk verhaal over een jongen die een chocoladefabriek ontdekt.",
            "tags" => ['avontuur', 'chocolade']
        ],
        8 => [
            "summary" => "Een verrassend verhaal over een meisje dat een zoete verrassing ontdekt.",
            "tags" => ['verrassing', 'zoetigheid']
        ],
        9 => [
            "summary" => "Een grappig verhaal over een jongen die op avontuur gaat met kauwgom.",
            "tags" => ['grappig', 'kauwgom']
        ],
        10 => [
            "summary" => "Een betoverend verhaal over een ijssalon met magische krachten.",
            "tags" => ['betoverend', 'ijs']
        ],
    ];

    return $tags[$id];
}
