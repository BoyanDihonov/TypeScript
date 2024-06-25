"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const index = this.clothes.findIndex(cloth => cloth.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        return this.clothes.reduce((smallest, cloth) => {
            return cloth.size < smallest.size ? cloth : smallest;
        });
    }
    getCloth(color) {
        return this.clothes.find(cloth => cloth.color === color);
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const sortedClothes = this.clothes.slice().sort((a, b) => a.size - b.size);
        const clothesString = sortedClothes.map(cloth => cloth.toString()).join('\n');
        return `${this.type} magazine contains:\n${clothesString}`;
    }
}
exports.Magazine = Magazine;
