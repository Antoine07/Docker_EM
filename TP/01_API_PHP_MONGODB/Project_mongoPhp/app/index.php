<?php

// collection est dans le fichier bootstrap
require __DIR__ . '/bootstrap.php';

// utilisation de dépandances Symfony pour gérer les requêtes et les réponses
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

use MongoDB\BSON\Regex ;

$request = Request::createFromGlobals();
$action = $request->query->get('api');
// Le composant Mongo php demande un entier il faudra penser à caster
// forcer le type de la variable ici on force une chaine de caractères à être un entier 
$limit = (int) $request->query->get('limit') ?? 50;

$response = new JsonResponse();
define('LIMIT', $limit);

if ($action == 'all') {
  $cursor = $collectionRestaurants->find(
    [
      'cuisine' => 'Italian',
    ],
    [
      'limit' => LIMIT,
      'projection' => [
        'name' => 1,
        '_id' => 0
      ],
    ]
  );

  $response->setContent(json_encode([
    'data' => $cursor->toArray()
  ]));
} elseif ($action == 'cuisine') {
  $name = $request->query->get('name') ?? '';
  // requête 
  $cursor = $collectionRestaurants->find(
    [
      'cuisine' => $name,
    ],
    [
      'limit' => LIMIT,
      'projection' => [
        'name' => 1,
        '_id' => 0,
        'cuisine' => 1
      ],
    ]
  );

  $response->setContent(json_encode([
    'data' => $cursor->toArray()
  ]));

} elseif($action == 'restaurantsByBorough'){

  $pipeline = [
    [
      '$group' => [
        '_id' => '$borough',
        'count' => ['$sum' => 1]
      ]
    ]
  ];

  $cursor = $collectionRestaurants->aggregate($pipeline);

  $response->setContent(json_encode([
    'data' => $cursor->toArray()
  ]));

}elseif( $action == 'count'){
  $count = $collectionRestaurants->countDocuments();

  $response->setContent(json_encode([
    'data' => $count
  ]));
}elseif( $action == 'regex'){
  $name = $request->query->get('name') ?? '';

  $cursor = $collectionRestaurants->find(
    [
      'name' => new Regex($name, 'i')
    ],
    [
      'limit' => LIMIT,
      'projection' => [
        'name' => 1,
        '_id' => 0,
        'cuisine' => 1
      ],
    ]
  );

  $response->setContent(json_encode([
    'data' => $cursor->toArray()
  ]));

}
else {
  $response->setContent(json_encode([
    'data' => "Aucune reponse de l'api"
  ]));
}

$response->headers->set('Content-Type', 'application/json');
$response->send();
