# Configuration et installation de TypeScript 

## Sommaire

### Qu'est-ce que TypeScript ?
### Typage statique
### Maintenance

### Installation et configuration

1. Utilisez la version de Node.js LTS, voir sur le site Node.js
1. Initialisez le projet (le cours) : lessons
   - TypeScript est installé en tant que devDependencies
1. Arborescence pour notre cours

:rocket:

## Qu'est-ce que TypeScript ?

TypeScript est un langage de programmation open source développé par Microsoft. 

Il s'agit d'un sur-ensemble de JavaScript, ce qui signifie que tout code JavaScript valide est également du code TypeScript. 

Cependant, TypeScript offre des fonctionnalités supplémentaires qui ajoutent de la puissance et de la flexibilité au développement d'application.

>[NOTE]
>L'une des caractéristiques principales de TypeScript est le support du typage statique. 

Contrairement à JavaScript, où les types de variables sont déterminés à l'exécution, TypeScript permet de spécifier le type des variables lors de la phase de développement. Cela permet de détecter et de corriger les erreurs potentielles dans le processus de développement.

## Typage statique

Le typage statique permet de définir explicitement le type des variables, paramètres de fonction, et valeurs de retour. Cela aide à détecter les erreurs de typage dès le stade de la compilation, offrant ainsi une plus grande sécurité et robustesse dans le code.

```ts
function add(a: number, b: number): number {
  return a + b;
}

const result: number = add(3, 5);
```

## Maintenance

La typage statique et la déclaration explicite des types rendent le code plus lisible et compréhensible. Cela facilite la maintenance du code à mesure que le projet évolue, surtout lorsque plusieurs développeurs travaillent ensemble.

## Installation et configuration

1. Utilisez la version de Node.js LTS, voir sur le site Node.js

:shell:

```bash
# version LTS
nvm use 20.11.0
```

1. Intialisez le projet (le cours) : lessons

>[!NOTE]
>TypeScript est installé en tant que devDependencies
   
:shell:

```bash
mkdir lessons && cd lessons && npm init -y 

npm install typescript --save-dev
npm install nodemon ts-node-dev --save-dev
```  

Créez un dossier src, puis initialisez le projet avec la commande `tsc --init`

:rocket:

> [!TIP]
> Le fichier tsconfig.json configure l'installation de TypeScript

```json
{
  "compilerOptions": {
    "target": "ESNext",                                  
    "module": "commonjs",                                 
    //"moduleResolution": "bundler",                    
    "outDir": "./dist",                                  
    "esModuleInterop": true,                             
    "strict": true,                                      
    "skipLibCheck": true                                
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Modifiez maintenant le fichier package.json, ajoutez la ligne suivante dans la partie script :

```json
"scripts": {
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node-dev' src/app.ts"
  },
```

:shell:

```json
npm run dev
```

## Arborescence pour notre cours 

```txt
/
├── package.json
├── src
│   ├── Model
│   │   └── Duck.ts
│   └── app.ts
├── tests
│   ├── app.spec.ts
│   └── duck.spec.ts
└── tsconfig.json
```
