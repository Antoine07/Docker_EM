
import { Text } from "./Text";

export class ConcreteText implements Text {
    private _text: string;

    constructor(text: string) {
        this._text = text;
    }

    get text(): string {
        return this._text;
    }
}