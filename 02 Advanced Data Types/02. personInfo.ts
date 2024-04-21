function createPerson(firstName: string, lastName: string, age: string): { firstName: string, lastName: string, age: number } {
    const personObject= {
        firstName: firstName,
        lastName: lastName,
        age: parseInt(age)
    };
    return personObject;
}

createPerson("Peter", "Pan", "20")
createPerson("George", "Smith", "18")