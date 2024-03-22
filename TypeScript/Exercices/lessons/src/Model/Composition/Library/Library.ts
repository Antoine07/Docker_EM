import Book from "./Book";
import Loan from "./Loan";
import User from "./User";

export default class Library {
    private _loans: Loan[] = [];
  
    issueLoan(book: Book, user: User, createAt: Date): void {
      const loan = new Loan(book, user, createAt);
      this._loans.push(loan);
    }

    get loans():Loan[] { return this._loans }
  }