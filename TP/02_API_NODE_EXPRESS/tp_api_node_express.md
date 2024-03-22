# Développement d'une application web avec Node.js, Express et TypeScript dans un environnement Docker

## Introduction :
Ce TP vise à vous familiariser avec le développement d'applications d'API en utilisant Node.js, Express et TypeScript, tout en les conteneurisant avec Docker. Ces technologies sont largement utilisées dans le développement d'applications web modernes et vous permettront de comprendre les concepts de base ainsi que le déploiement d'applications dans des conteneurs.

## Objectifs :
- Comprendre les principes fondamentaux de Node.js, Express et TypeScript.
- Apprendre à créer un serveur web basique avec Express.
- Utiliser TypeScript pour améliorer la lisibilité et la maintenabilité du code.
- Containeriser une application Node.js avec Docker et docker-compose.
- Déployer et tester l'application dans un environnement conteneurisé.

## Structure de l'API

```txt
project_mongoNode/
│
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    └── server.ts
```

## Connexion à MongoDB

```js
import { MongoClient, ServerApiVersion } from 'mongodb';

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://root:example@mongo:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
```


## Tâches à réaliser :
1. **Mise en place de l'environnement de développement** :
   - Installer Node.js sur votre machine si ce n'est pas déjà fait.
   - Créer un nouveau projet Node.js et initialiser un fichier `package.json`.
   - Installer les dépendances nécessaires : Express, TypeScript, et les types d'Express pour TypeScript.

2. **Développement de l'application Express** :
   - Créer un serveur Express minimal dans un fichier TypeScript.
   - Ajouter des routes et des gestionnaires de requêtes pour gérer les demandes HTTP (GET, POST, etc.).
   - Tester le serveur localement pour vérifier son fonctionnement.

3. **Configuration de Docker** :
   - Créer un fichier `Dockerfile` pour définir l'environnement d'exécution de l'application.
   - Configurer un fichier `docker-compose.yml` pour déployer l'application dans un conteneur Docker.
   - Assurez-vous de configurer les volumes pour monter votre code source dans le conteneur Docker.

4. **Construction et déploiement de l'application** :
   - Construire l'image Docker de votre application.
   - Lancer l'application en utilisant `docker-compose up`.
   - Vérifier que l'application fonctionne correctement en accédant à localhost:3000 dans votre navigateur.

5. **Tests supplémentaires et améliorations** :
   - Ajouter des fonctionnalités supplémentaires à votre application (par exemple : middleware, gestion des erreurs, etc.).
   - Tester l'application pour s'assurer que toutes les fonctionnalités fonctionnent correctement.
   - Réfléchir à d'autres améliorations possibles pour l'application.

### Ressources :
- Documentation Node.js : [Node.js Documentation](https://nodejs.org/en/docs/)
- Documentation Express.js : [Express.js Documentation](https://expressjs.com/)
- Documentation TypeScript : [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- Documentation Docker : [Docker Documentation](https://docs.docker.com/)
- Tutoriels en ligne et exemples de code pour des guides supplémentaires.

### Livrables :
- Code source de votre application.
- Fichiers Dockerfile et docker-compose.yml.
- Documentation décrivant le processus de développement, les problèmes rencontrés et les solutions adoptées.
