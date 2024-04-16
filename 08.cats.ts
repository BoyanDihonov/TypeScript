class Cat {
    constructor(public name: string, public age: number) {}

    meow(): void {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

function createCats(catInfo: string[]): void {
    catInfo.forEach(info => {
        const [name, ageStr] = info.split(' ');
        const age = parseInt(ageStr);
        const cat = new Cat(name, age);
        cat.meow();
    });
}