import { Order } from "./Order";

export class Customer {
    private _name: string;
    private _orders: Order[];

    constructor(name: string, orders : Order[] = []){
        this._name = name;
        this._orders = orders;
    }
  
    addOrder(order: Order) {
      this._orders.push(order);
    }

    get orders(): Order[]{ return this._orders }
  }
  