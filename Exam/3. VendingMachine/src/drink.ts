export class Drink {
    constructor(
        public name: string,
        public price: number,
        public volume: number
    ) {}

    toString(): string {
        return `Name: ${this.name}, Price: $${this.price}, Volume: ${this.volume} ml`;
    }
}
