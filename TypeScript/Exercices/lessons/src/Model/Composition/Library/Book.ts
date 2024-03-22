export default class Book {
    private _title: string;
    private _author: string;
  
    constructor(title: string, author: string) {
      this._title = title;
      this._author = author;
    }

    get title():string{ return this._title;}
    get author():string{ return this._author;}
    set title(value: string) { this._title = value; }
    set author(value: string) { this._author = value; }

  }