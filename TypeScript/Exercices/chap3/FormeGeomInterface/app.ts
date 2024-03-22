import { Circle } from "./Model/Shapes/Circle";
import { Square } from "./Model/Shapes/Square";
import  Shape  from "./Model/Shapes/Shape";

// Utilisation polymorphique
const shapes: Shape[] = [new Circle(5), new Square(4)];

for (const shape of shapes) {
    shape.draw();
    console.log("Area:", shape.area());
}