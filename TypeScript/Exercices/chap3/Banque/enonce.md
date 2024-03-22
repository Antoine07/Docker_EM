# Enoncé de l'exercice

Vous devez simuler le fonctionnement d'une banque en Typescript.
La banque a un nom et une liste de clients.
Au moment de la création de la banque, on doit lui donner un nom.

Une banque peut ajouter un client, supprimer un client, afficher la liste de ses clients et afficher le solde total de tous ses clients.

Un client a un nom, prénom, un age, une ville, un job et un salaire.

Au moment où la banque enregistre le client, cela doit créer son compte automatiquement avec un solde que le client peut préciser.

Le compte d'un client peut afficher son solde, faire un dépôt et un retrait.

Le client peut consulter, déposer et retirer de l'argent. Il peut faire également une demande de carte bancaire qui sera affectée à son compte.

La banque peut également faire une demande de carte bancaire pour un client. La carte bancaire est affectée à un compte.

Le numéro de compte est généré automatiquement alétoirement et est unique.

Une carte bancaire a un numéro (généré aléatoirement), une date d'expiration et un code de sécurité CCV (généré aléatoirement). La date d'expiration est de 5 ans à partir de la date de création de la carte. Elle doit avoir le format suivant: "MM/AA". Quand on affiche la carte bancaire, elle doit avoir le format suivant: `XXXX XXXX XXXX XXXX - XX/XX - XXX` où `X` est un chiffre.