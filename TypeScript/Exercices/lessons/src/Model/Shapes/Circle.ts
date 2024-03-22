import Shape from './Shape'

export class Circle implements Shape {
    private radius: number;
    private precision: number;

    constructor(radius: number, precision : number = 100) {
        this.radius = radius;
        this.precision = precision;
    }

    draw(): void {
        console.log("Drawing a circle.");
    }

    area(): number {
        if( this.precision <= 0) throw new Error("bad precision") ;
        
        return Math.round( Math.PI * this.radius ** 2 * this.precision) / this.precision;
    }
}