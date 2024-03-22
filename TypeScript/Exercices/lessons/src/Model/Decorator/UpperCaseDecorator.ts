
import { Text } from "./Text";

export class UpperCaseDecorator implements Text {
    private component: Text;

    constructor(component: Text) {
        this.component = component;
    }

    get text(): string {
        return this.component.text.toUpperCase();
    }
}