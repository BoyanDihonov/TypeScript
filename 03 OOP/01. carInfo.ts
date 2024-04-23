class Car {
    private _brand: string;
    private _model: string;
    private _horsepower: number;

    constructor(brand: string = "", model: string = "", horsepower: number = 0) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }

    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get horsepower(): number {
        return this._horsepower;
    }

    set horsepower(value: number) {
        this._horsepower = value;
    }
}


// Test
const input = "Chevrolet Impala 390";
const [brand, model, horsepowerStr] = input.split(" ");
const horsepower = parseInt(horsepowerStr);

const car = new Car(brand, model, horsepower);
console.log(`The car is: ${car.brand} ${car.model} - ${car.horsepower} HP.`);

