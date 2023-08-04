import { reactive } from "apollo-client-reactive-store";


export class Person {
    @reactive
    accessor firstName: string = "Jon";
    @reactive
    accessor lastName: string = "Dohn";
}

export const person = new Person();