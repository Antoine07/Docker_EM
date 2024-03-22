
export default class User {
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }

    get name(){ return this._name;}
    set name(value: string) { this._name = value; }

  }