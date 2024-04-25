interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerID: T, model: T): void;
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
    dealershipName: T;
    soldCars: number;
    modelsSold: { [key: string]: T };

    constructor(dealershipName: T) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {};
    }

    sellCar(dealerID: T, model: T): void {
        this.modelsSold[dealerID as unknown as string] = model;
        this.soldCars++;
    }

    showDetails(): string {
        let details = `${this.dealershipName}:\n`;
        for (const dealerID in this.modelsSold) {
            details += `${dealerID} sold ${this.modelsSold[dealerID]}\n`;
        }
        return details;
    }
}