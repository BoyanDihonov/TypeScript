import { Drink } from "./drink";

export class VendingMachine {
    constructor(
        private buttonCapacity: number,
        private drinks: Drink[] = []
    ) {}

    addDrink(drink: Drink): void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string): boolean {
        const index = this.drinks.findIndex(drink => drink.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }

    getLongest(): string {
        const longestDrink = this.drinks.reduce((prev, current) => prev.volume > current.volume ? prev : current);
        return longestDrink.toString();
    }

    getCheapest(): string {
        const cheapestDrink = this.drinks.reduce((prev, current) => prev.price < current.price ? prev : current);
        return cheapestDrink.toString();
    }

    buyDrink(name: string): string {
        const drink = this.drinks.find(drink => drink.name === name);
        if (drink) {
            this.removeDrink(name);
            return drink.toString();
        }
        return "Drink not available";
    }

    getCount(): number {
        return this.drinks.length;
    }

    report(): string {
        const drinksList = this.drinks.map(drink => drink.toString()).join("\n");
        return `Drinks available:\n${drinksList}`;
    }
}
