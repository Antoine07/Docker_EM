<?php

require_once __DIR__ . '/vendor/autoload.php' ;

use MongoDB\Client;

// localhost est remplacé par mongo qui est le nom de l'image dans votre docker-compose
$client = new Client('mongodb://root:example@mongo:27017');
$collectionRestaurants = $client->ny->restaurants;
