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
            "image" => "De_Gorgels.png",
        ],
        [
            "id" => 2,
            "title" => "Dolfje Weerwolfje",
            "author" => "Paul van Loon",
            "image" => "Dolfje_weerwoflje.jpg",
        ],
        [
            "id" => 3,
            "title" => "Pluk van de Petteflet",
            "author" => "Annie M.G. Schmidt",
            "image" => "Pluk_van_de_Petteflet.jpg",
        ],
        [
            "id" => 4,
            "title" => "Jip en Janneke",
            "author" => "Annie M.G. Schmidt",
            "image" => "Jip_en_janneke.jpg",
        ],
        [
            "id" => 5,
            "title" => "Kruistocht in Spijkerbroek",
            "author" => "Thea Beckman",
            "image" => "kruistocht.jpg",
        ],
        [
            "id" => 6,
            "title" => "Pietje Bell",
            "author" => "Chris van Abkoude",
            "image" => "pietje.jpg",
        ],
        [
            "id" => 7,
            "title" => "Koning van Katoren",
            "author" => "Jan Terlouw",
            "image" => "koning.png",
        ],
        [
            "id" => 8,
            "title" => "Oorlogswinter",
            "author" => "Jan Terlouw",
            "image" => "oorlogs.jpg",
        ],
        [
            "id" => 9,
            "title" => "Dagboek van een muts",
            "author" => "Rachel Renée Russell",
            "image" => "dagboek.jpeg",
        ],
        [
            "id" => 10,
            "title" => "Het leven van een loser",
            "author" => "Jeff Kinney",
            "image" => "loser.jpg",
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
            "summary" => "Een spannend avontuur waarbij Melle en zijn familie op vakantie gaan naar zee en ontdekken dat er Gorgels bestaan, kleine wezentjes die overal om ons heen zijn.",
            "tags" => ['avontuur', 'fantasie', 'vriendschap']
        ],
        2 => [
            "summary" => "Het verhaal van Dolfje Weerwolfje, een jongen die bij volle maan in een weerwolf verandert en samen met zijn vriendjes spannende avonturen beleeft.",
            "tags" => ['fantasie', 'weerwolven', 'avontuur']
        ],
        3 => [
            "summary" => "Een klassiek verhaal over Pluk die in zijn rode kraanwagentje in de Petteflet gaat wonen en bevriend raakt met alle bewoners.",
            "tags" => ['kinderboek', 'avontuur', 'vriendschap']
        ],
        4 => [
            "summary" => "Korte verhalen over de avonturen van Jip en Janneke, twee buurkinderen die samen spelen en de wereld ontdekken.",
            "tags" => ['kinderboek', 'avontuur', 'vriendschap']
        ],
        5 => [
            "summary" => "Een spannend verhaal over een jongen die per ongeluk terug in de tijd reist naar de Middeleeuwen en daar allerlei avonturen beleeft.",
            "tags" => ['avontuur', 'tijdreizen', 'geschiedenis']
        ],
        6 => [
            "summary" => "Een humoristisch verhaal over de avonturen van de kwajongen Pietje Bell in de stad Rotterdam.",
            "tags" => ['humor', 'avontuur', 'jongensboek']
        ],
        7 => [
            "summary" => "Het verhaal van Stach die koning wil worden van Katoren en zeven moeilijke opdrachten moet volbrengen om dit te bereiken.",
            "tags" => ['avontuur', 'fantasie', 'kinderboek']
        ],
        8 => [
            "summary" => "Een aangrijpend verhaal over een jongen die tijdens de Tweede Wereldoorlog in een moeilijke situatie belandt en moeilijke keuzes moet maken.",
            "tags" => ['oorlog', 'oorlogsboek', 'jongeren']
        ],
        9 => [
            "summary" => "Een grappig dagboek van Nikki, een meisje dat allerlei avonturen beleeft op school en thuis.",
            "tags" => ['humor', 'dagboek', 'meidenboek']
        ],
        10 => [
            "summary" => "Het leven van Greg, een jongen die probeert populair te worden op school en daarbij allerlei grappige situaties meemaakt.",
            "tags" => ['humor', 'school', 'jongensboek']
        ],
    ];

    return $tags[$id];
}

