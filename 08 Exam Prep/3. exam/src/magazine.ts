import { Cloth } from "./cloth";

export class Magazine {
    type: string;
    capacity: number;
    clothes: Cloth[];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth): void {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }

    removeCloth(color: string): boolean {
        const index = this.clothes.findIndex(cloth => cloth.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }

    getSmallestCloth(): Cloth {
        return this.clothes.reduce((smallest, cloth) => {
            return cloth.size < smallest.size ? cloth : smallest;
        });
    }

    getCloth(color: string): Cloth {
        return this.clothes.find(cloth => cloth.color === color);
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): string {
        const sortedClothes = this.clothes.slice().sort((a, b) => a.size - b.size);
        const clothesString = sortedClothes.map(cloth => cloth.toString()).join('\n');
        return `${this.type} magazine contains:\n${clothesString}`;
    }
}