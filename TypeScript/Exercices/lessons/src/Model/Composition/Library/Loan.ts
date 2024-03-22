import Book from "./Book";
import User from "./User";

export default class Loan {
    private _book: Book;
    private _user: User;
    private _createdAt: Date;
  
    constructor(book: Book, user: User, createAt: Date) {
      this._book = book;
      this._user = user;
      this._createdAt = createAt;
    }

     get book():Book { return this._book;}
     get user(): User { return this._user;}
     get createAt(){ return this._createdAt;}
     set book(value: Book) { this._book = value; }
     set user(value: User) { this._user = value; }
     set createAt(value: Date) { this._createdAt = value; }

  }