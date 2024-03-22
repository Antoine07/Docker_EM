import { Person } from "./types/Person";
import {  ErrorPerson } from "./types/Error";

export function container() {
    const users: Person[] = [];

    return function addUser(user: Person): Person[] | ErrorPerson {
        if (users.includes(user))
            throw new ErrorPerson(100, "The person already exists in the users array.");

        users.push(user);

        return users;
    }
}