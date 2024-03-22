# Corrigé

## Table des matières
- [Bank](#bank)
- [Client](#client)
- [Account](#account)
- [CreditCard](#creditcard)
- [index.ts](#indexts)


## Bank


```typescript
// Bank.ts
import { Client } from "./Client";
import { CreditCard } from "./CreditCard";

export class Bank {
    name: string;
    private clients: Client[];

    constructor(name: string) {
        this.name = name;
        this.clients = [];
    }

    addClient(client: Client): void {
        this.clients.push(client);
    }

    requestCreditCard(client: Client): CreditCard | boolean {
        if (this.clients.includes(client)) {
            return new CreditCard(client.compteBancaire);
        }
        return false;
    }

    afficherListeClients(): string[] {
        return this.clients.map(client => `${client.prenom} ${client.nom} solde = ${client.compteBancaire.solde}`);
    }

    toString(): string {
        return `Bienvenue à la banque ${this.name}`;
    }
}
```

## Client

```typescript
// Client.ts
import { Account } from "./Account";
import { CreditCard } from "./CreditCard";

export class Client {

    public compteBancaire: Account

    constructor(
        public nom: string, 
        public prenom: string, 
        public age: number, 
        public city: string, 
        public job: string, 
        public salaire: number, 
        public depot_initial: number,
        
    ) {
        this.compteBancaire = new Account(depot_initial);
    }

    requestCreditCard() : CreditCard {
        return new CreditCard(this.compteBancaire)
    }

    toString(): string {
        return `Client (${this.prenom} ${this.nom})`;
    }

    consulterSolde() : string {
        return `Votre solde est de ${this.compteBancaire.solde}`
    }

    deposer(montant: number): void {
        this.compteBancaire.deposer(montant)
    }

    retirer(montant: number): void | string {
        return this.compteBancaire.retirer(montant)
    }
}
```

## Account

```typescript
// Account.ts
export class Account {

    constructor(
        public number: number,
        public solde: number = 0
    ) {
        this.solde = solde;
        this.number = this.generateRandomNumber();
    }

    deposer(montant: number): void {
        this.solde += montant;
    }

    retirer(montant: number): void | string {
        if (montant > this.solde) {
            return "Plafond depasser !"
        }
        this.solde -= montant;
        
    }

    generateRandomNumber(): number {
        return Math.floor(Math.random() * 8000000) + 1000000;
    }

    toString(): string {
        return `Compte numero ${this.number}, solde= ${this.solde}`;
    }
}
```

## CreditCard

```typescript
// CreditCard.ts
import { Account } from "./Account";

export class CreditCard {
    public number_card: string = "";
    public expiry_date: string = "";
    public ccv: string = "";

    constructor(
        public compte_bancaire: Account,
    ) {
        this.compte_bancaire = compte_bancaire;
        this.createCreditCard();
    }

    generateCardNumber(): string {
        const card_number = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
        const formatted_card_number = card_number.match(/.{1,4}/g)!.join(' ');
        return formatted_card_number;
    }

    generateExpiryDate(): string {
        const today = new Date();
        const expiration_date = new Date(today.getTime() + 365 * 5 * 24 * 60 * 60 * 1000);
        const formatted_expiration_date = expiration_date.toLocaleDateString('fr-FR', { month: '2-digit', year: '2-digit' });
        return formatted_expiration_date;
    }

    generateCCV(): string {
        return Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
    }

    createCreditCard(): void {
        this.number_card = this.generateCardNumber();
        this.expiry_date = this.generateExpiryDate();
        this.ccv = this.generateCCV();
    }

    toString(): string {
        return `${this.number_card} - ${this.expiry_date} - ${this.ccv}`;
    }
}
```

## index.ts
Pour tester le code, on peut utiliser le code suivant:

```typescript
// index.ts
import { Bank } from "./Bank";
import { Client } from "./Client";

const societeGenerale = new Bank("Societe Generale")

const ugo = new Client("Cosson", "Ugo", 25, "Paris", "Developpeur", 4200, 100)
const zakaria = new Client("Bourmel", "Zakaria", 25, "Lille", "DevOps", 4200, 500)

societeGenerale.addClient(ugo);
societeGenerale.addClient(zakaria);

const cb_ugo = societeGenerale.requestCreditCard(ugo)
const cb_zakaria = zakaria.requestCreditCard()

ugo.retirer(200)


console.log(societeGenerale.toString());
console.log(ugo.toString());
console.log(zakaria.toString());

console.log(cb_ugo.toString());
console.log(cb_zakaria.toString());

const clients = societeGenerale.afficherListeClients()
console.log(clients);
```