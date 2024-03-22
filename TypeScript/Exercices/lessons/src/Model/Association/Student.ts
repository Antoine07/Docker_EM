import { Course } from "./Course";

export class Student {
    private _name: string;
    private _courses: Course[];

    constructor(name: string, courses: Course[] = []) {
        this._name = name;
        this._courses = courses;
    }

    enroll(course: Course) {
        this._courses.push(course);
        course.students.push(this);
    }

    public get name() { return this._name; }
    public get courses():Course[] { return this._courses; }
    public set name(name: string) { this._name = name; }
    public set courses(course: Course[]) { this._courses = course; }
}
