import { Student } from "./Student";

export class Course {
    private _name: string;
    private _students: Student[];

    constructor(name: string, students: Student[] = []) {
        this._name = name;
        this._students = students;
    }

    get name(): string{ return this._name; }
    get students():Student[] { return this._students; }
    set name(name: string) { this._name = name; }
    set students(student: Student) { this._students.push(student); }

}