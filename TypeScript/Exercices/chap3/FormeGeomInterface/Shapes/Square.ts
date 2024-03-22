import Shape from './Shape'

export class Square implements Shape {
    private sideLength: number;

    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }

    draw(): void {
        console.log("Drawing a square.");
    }

    area(): number {
        return this.sideLength ** 2;
    }
}