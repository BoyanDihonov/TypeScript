class Person {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
function opinionPoll(data: string) {
    const [name, ageStr] = data.split(' ')
    const age = parseInt(ageStr)

    const person = new Person(name, age);
    console.log(`${person.name} is ${person.age} years old.`)
}

opinionPoll("Bobi 12")