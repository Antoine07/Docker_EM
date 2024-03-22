import { Duck } from './Model/Duck'
import { Circle } from "./Model/Shapes/Circle";
import { Square } from "./Model/Shapes/Square";
import Shape from "./Model/Shapes/Shape";

// chap 1 introduction et installation
console.log("-------------------------------------")
console.log("  chap 1 introduction et installation")
console.log("-------------------------------------")
const duck = new Duck("John");
console.log(duck.name);


// chap 2 introduction à TS
console.log("-------------------------------------")
console.log("  chap 2 introduction à TS")
console.log("-------------------------------------")

import { Person } from './Model/Users/types/Person';
import { ErrorPerson } from './Model/Users/types/Error';
import { container } from './Model/Users/Container';

const addUser = container();

try {
    const user1: Person = { id: 1, name: "John Doe" };
    const user2: Person = { id: 2, name: "Jane Doe" };

    console.log(addUser(user1)); // [ { id: 1, name: 'John Doe' } ]
    console.log(addUser(user2)); // [ { id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' } ]

    // Tentative d'ajout d'un utilisateur déjà existant
    console.log(addUser(user1)); // Error: { code: 100, message: 'The person already exists in the users array.' }
} catch (error) {
    if (error instanceof ErrorPerson)
        console.error(error);
}

// chap 3 POO
console.log("-------------------------------------")
console.log("  chap 3 POO")
console.log("-------------------------------------")

const shapes: Shape[] = [new Circle(5), new Square(4)];

for (const shape of shapes) {
    shape.draw();
    console.log("Area:", shape.area());
}

// association

import { Course } from './Model/Association/Course';
import { Student } from './Model/Association/Student';
import { Order } from './Model/Association/Order';
import { Customer } from './Model/Association/Customer';

// Création d'instances
const student1 = new Student('Alice');
const student2 = new Student('Bob');
const mathCourse = new Course('Mathematics');

// Établissement de la relation d'association bidirectionnelle
student1.enroll(mathCourse);
student2.enroll(mathCourse);

// Accès aux informations des deux côtés de l'association
console.log(student1.courses); // [mathCourse]
console.log(mathCourse.students); // [student1]

// relation undirectionnelle 
// Création d'instances
const order1 = new Order('ORD123');
const order2 = new Order('ORD456');

const customer = new Customer('Alice');

// Établissement de la relation unidirectionnelle
customer.addOrder(order1);
customer.addOrder(order2);

// Accès aux informations du côté de la classe Customer
console.log(customer.orders); // [order1, order2]


// composition 

// Import des classes depuis le fichier library.ts
import { Book, User, Library } from './Model/Composition/Library';

// Création d'instances de Livre, Utilisateur et Bibliothèque
const book1 = new Book('Vivre le compte à rebour', 'Boualen');
const user1 = new User('Alice');
const library = new Library();

// Emprunter un livre
library.issueLoan(book1, user1, new Date('2024-12-31'));

// Obtenir la liste des emprunts
const loans = library.loans;

// Afficher les informations sur chaque emprunt
for (const loan of loans) {
    console.log(`Emprunt par ${loan.user.name} - Livre: ${loan.book.title}, Auteur: ${loan.book.author}, Date de retour: ${loan.createAt}`);
}

import { UpperCaseDecorator } from './Model/Decorator/UpperCaseDecorator';
import { ConcreteText } from './Model/Decorator/ConcreteText';

// Utilisation des composants et des décorateurs
const baseTextComponent = new ConcreteText('Hello, World!');
console.log('Base Text:', baseTextComponent.text);

const upperCaseDecorator = new UpperCaseDecorator(baseTextComponent);
console.log('Decorated Text:', upperCaseDecorator.text);
